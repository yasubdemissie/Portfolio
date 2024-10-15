function NavButton({ children, onClick, activeButton }) {
  const style = `transition duration-700 hover:animate-spin hover:scale-125 rounded-full p-3 ${
    activeButton ? "bg-yellow-400 text-gray-700" : " bg-gray-700 "
  }`;
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default NavButton;
