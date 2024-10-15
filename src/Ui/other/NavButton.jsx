import { useLocation } from "react-router-dom";

function NavButton({ children, onClick, activeButton, title }) {
  const style = `transition duration-700 hover:animate-spin hover:scale-125 rounded-full p-3 ${
    activeButton ? "bg-yellow-400 text-gray-700" : " bg-gray-700 "
  }`;

  return (
    <button title={title}  className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default NavButton;
