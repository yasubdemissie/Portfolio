import propType from 'prop-types';
function SkillCard({ children }) {
  return <div className="grid grid-cols-10 h-fit py-16">{children}</div>;
}

function Icon({ children }) {
  return (
    <div className="col-span-2 font-bold text-6xl text-yellow-500 flex justify-center items-center">
      {children}
    </div>
  );
}

function Explanation({ children, title }) {
  return (
    <div className="col-span-8 italic font-sans text-md mx-10 my-auto">
      <h2 className="mb-8">{title}</h2>
      <div className="m-0 font-extralight">{children}</div>
    </div>
  );
}

SkillCard.Icon = Icon;
SkillCard.Explanation = Explanation;

SkillCard.propTypes = {
  children: propType.node,
}
Icon.propTypes = {
  children: propType.node,
}

Explanation.propTypes = {
  children: propType.node,
  title: propType.string,
}

export default SkillCard;
