"use client";

import { useEffect, useRef, useState } from "react";
import Skill from "../elements/skill";

export default function Cloud() {
  type Skill = {
    name: string;
    level: number;
    category: string;
  };

  const skills: Skill[] = [
    { name: "React", level: 5, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "TypeScript", level: 1, category: "language" },
    { name: "Laravel", level: 5, category: "backend" },
    { name: "Next.js", level: 5, category: "frontend" },
    { name: "CSS", level: 3, category: "frontend" },
    { name: "Bootstrap", level: 2, category: "frontend" },
    { name: "MySQL", level: 4, category: "database" },
    { name: "PostgreSQL", level: 4, category: "database" },
    { name: "Vue", level: 1, category: "frontend" },
    { name: "WordPress", level: 5, category: "cms" },
    { name: "PHP", level: 4, category: "language" },
    { name: "JavaScript", level: 4, category: "language" },
    { name: "C#", level: 3, category: "language" },
    { name: "Linux", level: 3, category: "os" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkRef = () => {
      if (!containerRef.current) {
        requestAnimationFrame(checkRef);
        return;
      }

      if (!containerRef.current.parentElement) {
        return;
      }

      const observer = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      });

      observer.observe(containerRef.current.parentElement);
      return () => observer.disconnect();
    };

    setMounted(true);
    checkRef();
  }, []);

  let delayIncrement = 0.3;
  let delayCount = -delayIncrement;

  if (mounted == false) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-full overflow-clip" ref={containerRef}>
      {skills.map((skill) => {
        delayCount += delayIncrement;

        return (
          <Skill
            key={skill.name}
            name={skill.name}
            level={skill.level}
            category={skill.category}
            containerWidth={size.width}
            containerHeight={size.height}
            delayCount={`${delayCount}s`}
          />
        );
      })}
    </div>
  );
}
