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
  ];

  let width = 400;
  let height = 400;

  return <div className="bg-slate-200 relative" style={{ width: width, height: height }}>
    {skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} level={skill.level} category={skill.category} containerWidth={width} containerHeight={height} />
    ))}
  </div>;
}
