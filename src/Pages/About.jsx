import SoftSkils from "../Components/SoftSkils";
import TechnicalSkill from "../Components/TechnicalSkill";

function About() {
  return <div className="grid w-dvw overflow-x-hidden mx-auto">
    <TechnicalSkill />
    <SoftSkils />
  </div>;
}

export default About;
