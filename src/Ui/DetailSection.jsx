import propType from 'prop-types';

function DetailSection({ icon, title, description }) {
  const classStyle =
    title === "Address"
      ? "col-span-6 font-semibold text-sm capitalize"
      : "col-span-6 text-blue-400";
  return (
    <div className="row-span-1 grid grid-rows-2 grid-cols-8 h-24 my-0">
      <span className="text-yellow-500 text-2xl row-span-2 col-span-2 flex justify-center items-center">
        {icon}
      </span>{" "}
      <span className="col-span-6 mt-4 italic">{title}</span>
      <span className={classStyle}>{description}</span>
    </div>
  );
}

DetailSection.propTypes = {
  icon: propType.element,
  title: propType.string,
  description: propType.string,
}

export default DetailSection;
