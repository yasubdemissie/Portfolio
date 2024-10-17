import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "../Ui/other/NavButton";
import { HiHome, HiPhone, HiUser } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa6";
// import { FiTv } from "react-icons/fi";

const pages = [
  { title: "Home", link: "/", icon: <HiHome /> },
  { title: "About", link: "/about", icon: <HiUser /> },
  { title: "Portfolio", link: "/portfolio", icon: <FaBriefcase /> },
  // { title: "Blog", link: "/blog", icon: <FiTv /> },
  { title: "Contact", link: "/contact", icon: <HiPhone /> },
];

function NavElement() {
  const el = useLocation();
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col gap-10 justify-center items-center text-gray-300 font-bold">
      {pages.map((page) => (
        <NavButton
          key={page.title}
          title={page.title}
          activeButton={el.pathname === page.link}
          onClick={() => navigate(page.link)}
        >
          {page.icon}
        </NavButton>
      ))}
    </div>
  );
}

export default NavElement;
