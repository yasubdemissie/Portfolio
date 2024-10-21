import propType from "prop-types";

function Button({ children, type = "other", onClick, color }) {
  const styles = {
    social: `rounded-full mt-1 mx-auto font-extrabold bg-gray-500/5 p-2 relative top-[27rem]
     text-white lg:top-5 justify-around text-2xl transition-all duration-700 `,
    other:
      "rounded-md mt-1 font-extrabold text-2xl transition-all duration-700",
  };

  const buttonStyle = {
    background: color,
    // WebkitBackgroundClip: color.includes('gradient') ? 'text' : 'border-box',
    // WebkitTextFillColor: color.includes('gradient') ? 'transparent' : 'inherit',
  };

  return (
    <button onClick={onClick} title="mode" className={styles[type]} style={buttonStyle}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propType.node,
  type: propType.string,
  onClick: propType.func,
  color: propType.string,
};

export default Button;
