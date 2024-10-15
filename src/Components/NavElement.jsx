import { Link, useLocation, useNavigate } from "react-router-dom";
import NavButton from "../Ui/other/NavButton";
import { HiBookOpen, HiHome, HiPhone, HiTv, HiUser } from "react-icons/hi2";

function NavElement() {

    const el = useLocation();
    const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col gap-10 justify-center items-center text-gray-300 font-bold">
      <NavButton title={"Home"} activeButton={el.pathname === "/"} onClick={() => navigate('/')}>
        <HiHome />
      </NavButton>
      <NavButton title={"Contact"} activeButton={el.pathname === "/contact"} onClick={() => navigate('/contact')}>
        <HiPhone />
      </NavButton>
      <NavButton title={"Works"} activeButton={el.pathname === "/portfolio"} onClick={() => navigate('/portfolio')}>
        <HiBookOpen />
      </NavButton>
      <NavButton title={"Blog"} activeButton={el.pathname === "/blog"} onClick={() => navigate('/blog')}>
        <HiTv />
      </NavButton>
      <NavButton title={"About"} activeButton={el.pathname === "/about"} onClick={() => navigate('/about')}>
        <HiUser />
      </NavButton>
    </div>
  );
}

export default NavElement;
