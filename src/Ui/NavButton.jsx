import propType from "prop-types";

function NavButton({ children, onClick, activeButton, title, contactType }) {
  const style = ` hover:animate-spin hover:scale-125 rounded-full p-3 ${
    activeButton ? "bg-yellow-400 text-gray-700" : " bg-gray-700 "
  } ${contactType === "contact" ? "text-gray-100 h-fit" : ""}`;

  return (
    <button title={title} className={style} onClick={onClick}>
      {children}
    </button>
  );
}

NavButton.propTypes = {
  children: propType.node,
  onClick: propType.func,
  activeButton: propType.bool,
  title: propType.string,
  contactType: propType.string,
};

export default NavButton;
