import Progress from "../Ui/other/Progress";

const data = [
  { name: "JavaScript", percent: 90 },
  { name: "React", percent: 85 },
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 85 },
  { name: "Tailwind Css", percent: 80 },
  { name: "php", percent: 60 },
  { name: "node Js", percent: 50 },
  { name: "Java", percent: 65 },
];

function Portifolio() {
  return (
    <>
      <div className="personal_css grid justify-center grid-cols-1">
        <h1 className="mx-auto text-yellow-500 text-5xl mt-24 font-extrabold">
          Portifolio
        </h1>
        <div className="grid justify-around grid-cols-4 pl-48">
          {data.map((item) => (
            <Progress key={item.name} name={item.name} value={item.percent} />
          ))}
        </div>
      </div>
      {/* <div>
        <h1 className="mx-auto text-yellow-500 text-5xl mt-24 font-extrabold">
          Soft Skills
        </h1>
      </div> */}
    </>
  );
}

export default Portifolio;
