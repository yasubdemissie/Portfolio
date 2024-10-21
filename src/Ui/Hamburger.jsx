function Hamburger({ isOpen, onOpen }) {
  //   const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onOpen(!isOpen);
  };

  return (
    <header
      className="top-3 right-3 grid space-y-[2px] h-fit w-fit bg-white lg:hidden p-1 rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`h-[2px] rounded-lg w-8 bg-black transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[4px] w-5" : ""
        }`}
      ></div>
      <div
        className={`h-[2px] rounded-lg w-8 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-[2px] rounded-lg w-8 bg-black transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[4px] w-5" : ""
        }`}
      ></div>
    </header>
  );
}

export default Hamburger;
