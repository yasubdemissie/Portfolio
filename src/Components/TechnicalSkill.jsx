import Progress from "../Ui/other/Progress";

const techinalSkills = [
  { name: "JavaScript", percent: 90 },
  { name: "React", percent: 85 },
  { name: "MySQL", percent: 75 },
  { name: "CSS", percent: 85 },
  { name: "Tailwind Css", percent: 80 },
  { name: "php", percent: 60 },
  { name: "node Js", percent: 50 },
  { name: "Java", percent: 65 },
];

function TechnicalSkill() {
  return (
    <div className="grid justify-center grid-cols-1">
      <h1 className="mx-auto my-10 text-yellow-500 text-5xl mt-24 font-extrabold capitalize">
        Technical Skills
      </h1>
      <div className="grid gap-9 grid-cols-4 pl-48">
        {techinalSkills.map((item) => (
          <Progress key={item.name} name={item.name} value={item.percent} />
        ))}
      </div>
    </div>
  );
}

export default TechnicalSkill;
