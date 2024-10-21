import propType from "prop-types";

function NavButton({
  children,
  onClick,
  activeButton,
  title,
  contactType,
  isOpen,
}) {
  const style = `transition-transform transition-opacity duration-1000 hover:scale-125 rounded-full p-3 ${
    isOpen ? "opacity-1" : "opacity-0"
  } ${activeButton ? "bg-yellow-400 text-gray-700" : " bg-gray-700 "} ${
    contactType === "contact" ? "text-gray-100 h-fit" : ""
  }`;

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
  isOpen: propType.bool,
  title: propType.string,
  contactType: propType.string,
};

export default NavButton;
