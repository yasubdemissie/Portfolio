import SkillCard from "../Ui/SkillCard";
import { SiMinds } from "react-icons/si";
import { FaPeopleCarryBox, FaPeopleGroup } from "react-icons/fa6";
import {
  GiChameleonGlyph,
  GiClockwork,
  GiMagnifyingGlass,
} from "react-icons/gi";

const softSkills = [
  {
    name: "Problem-solving",
    description: `I excel at quickly diagnosing and resolving issues by breaking
                down complex challenges into manageable steps, ensuring efficient
                and effective solutions.`,
    icon: <SiMinds />,
  },
  {
    name: "Communication",
    description: `I simplify technical concepts for non-technical stakeholders, ensuring clear communication and alignment across all teams.`,
    icon: <FaPeopleGroup />,
  },
  {
    name: "Collaboration",
    description: `I thrive in team environments, contributing ideas and being open to feedback, which fosters strong collaboration and successful project outcomes.`,
    icon: <FaPeopleCarryBox />,
  },
  {
    name: "Time Management",
    description: `I prioritize tasks efficiently, meeting tight deadlines while maintaining high-quality work in fast-paced environments.`,
    icon: <GiClockwork />,
  },
  {
    name: "Adaptability",
    description: `I learn new tools and technologies rapidly, allowing me to adapt to changing project needs and stay up to date with industry trends.`,
    icon: <GiChameleonGlyph />,
  },
  {
    name: "Attention to Detail",
    description: `I take pride in delivering high-quality work by carefully considering the finer details. Whether it's clean code, user-friendly design, or well-documented processes, I ensure that no aspect is overlooked, contributing to the overall success of a project.`,
    icon: <GiMagnifyingGlass />,
  },
];

function SoftSkils() {
  return (
    <div className="grid justify-center">
      <h1 className="mx-auto text-yellow-500 text-5xl mt-32 font-extrabold">
        Soft Skills
      </h1>

      <div className="grid lg:grid-cols-2 gap-1 lg:gap-4 mb-10 lg:mx-24">
        {softSkills.map((item) => (
          <SkillCard key={item.name}>
            <SkillCard.Icon>{item.icon}</SkillCard.Icon>
            <SkillCard.Explanation title={item.name}>
              {item.description}
            </SkillCard.Explanation>
          </SkillCard>
        ))}
      </div>
    </div>
  );
}

export default SoftSkils;
