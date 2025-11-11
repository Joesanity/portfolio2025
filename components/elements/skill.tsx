import { useState, useEffect, ReactNode } from "react";

export default function Skill({
  name,
  level,
  category,
  containerWidth,
  containerHeight,
  icon
}: {
  name: string;
  level: number;
  category: string;
  containerWidth: number;
  containerHeight: number;
  icon: ReactNode
}) {
  const elementWidth = 100;
  const elementHeight = 30;
  const offsetChangeAmount = 0.5;

  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [currentTarget, setCurrentTarget] = useState({
    x: Math.random() * (containerWidth - elementWidth),
    y: Math.random() * (containerHeight - elementHeight),
  });

  useEffect(() => {
    if (containerWidth > elementWidth && containerHeight > elementHeight) {
      setXOffset(Math.random() * (containerWidth - elementWidth));
      setYOffset(Math.random() * (containerHeight - elementHeight));
      setNewTarget();
    }
  }, [containerWidth, containerHeight]);

  function setNewTarget() {
    setCurrentTarget({
      x: Math.random() * (containerWidth - elementWidth),
      y: Math.random() * (containerHeight - elementHeight),
    });
  }

  function moveToTarget() {
    setXOffset((prev) =>
      prev < currentTarget.x
        ? prev + offsetChangeAmount
        : prev > currentTarget.x
        ? prev - offsetChangeAmount
        : prev
    );
    setYOffset((prev) =>
      prev < currentTarget.y
        ? prev + offsetChangeAmount
        : prev > currentTarget.y
        ? prev - offsetChangeAmount
        : prev
    );

    if (Math.abs(xOffset - currentTarget.x) < 1) {
        setXOffset(currentTarget.x)
    }

    if (Math.abs(yOffset - currentTarget.y) < 1) {
        setYOffset(currentTarget.y)
    }

    if (
      Math.abs(xOffset - currentTarget.x) < 1 &&
      Math.abs(yOffset - currentTarget.y) < 1
    ) {
      setNewTarget();
    }
  }

  useEffect(() => {
    const interval = setInterval(moveToTarget, 16);
    return () => clearInterval(interval);
  }, [xOffset, yOffset, currentTarget]);

  function CalculateFontSize(
    level: number,
    minLevel = 1,
    maxLevel = 5,
    minSize = 16,
    maxSize = 24
  ) {
    const clampedLevel = Math.min(Math.max(level, minLevel), maxLevel);

    return (
      minSize +
      ((clampedLevel - minLevel) / (maxLevel - minLevel)) * (maxSize - minSize)
    );
  }

  return (
    <div
      className="absolute flex gap-4 items-center justify-start "
      style={{
        top: yOffset,
        left: xOffset,
        zIndex: level,
        width: elementWidth,
        height: elementHeight,
      }}
    >
      {/* <h2 style={{ fontSize: `${CalculateFontSize(level)}px` }}>{name}</h2> */}
      {icon}
    </div>
  );
}
