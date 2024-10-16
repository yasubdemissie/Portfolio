import CircularProgressbar from "./CircularProgressbar";

function Progress({ name, value }) {
  return (
    <div className="relative grid px-auto h-fit w-1/4">
      <CircularProgressbar percent={value} />
      <h3 className="w-full flex justify-center items-center">{name}</h3>
    </div>
  );
}

export default Progress;
