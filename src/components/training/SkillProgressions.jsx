import Collapsible from "../Collapsible";

export default function SkillProgressions({ progressions }) {
  const skills = Object.values(progressions);

  return (
    <Collapsible title="Skill Progressions" count={skills.length}>
      {skills.map((skill) => (
        <div key={skill.name} className="skill-card">
          <div className="skill-card__name">{skill.name}</div>
          <div className="skill-card__current">{skill.current}</div>
          {skill.phases.map((phase, i) => (
            <div key={i} className="skill-phase">
              <div className="skill-phase__period">{phase.period}</div>
              <div className="skill-phase__target">{phase.target}</div>
            </div>
          ))}
        </div>
      ))}
    </Collapsible>
  );
}
