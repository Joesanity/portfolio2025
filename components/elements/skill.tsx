export default function Skill({
  name,
  level,
  category,
  containerWidth,
  containerHeight,
}: {
  name: string;
  level: number;
  category: string;
  containerWidth: number;
  containerHeight: number;
}) {
  let elementWidth = 180;
  let elementHeight = 30;

  function generateXOffset() {
    return Math.random() * (containerWidth - elementWidth);
  }

  function generateYOffset() {
    return Math.random() * (containerHeight - elementHeight);
  }

  let yOffset = generateYOffset();
  let xOffset = generateXOffset();

  function CalculateFontSize(
    level: number,
    minLevel = 1,
    maxLevel = 5,
    minSize = 16,
    maxSize = 24
  ) {
    const clampedLevel = Math.min(Math.max(level, minLevel), maxLevel);

    const fontSize =
      minSize +
      ((clampedLevel - minLevel) / (maxLevel - minLevel)) * (maxSize - minSize);

    return fontSize;
  }

  

  return (
    <div
      className="absolute flex gap-4 items-center justify-start bg-white"
      style={{
        top: yOffset,
        left: xOffset,
        zIndex: level,
        width: elementWidth,
        height: elementHeight,
      }}
    >
      <h2 style={{ fontSize: `${CalculateFontSize(level)}px` }}>{name}</h2>
      <p style={{ fontSize: `${CalculateFontSize(level) - 1}px` }}>
        {category}
      </p>
    </div>
  );
}
