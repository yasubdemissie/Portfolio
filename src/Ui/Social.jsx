import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";

const social = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://t.me/yas777dam",
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    link: "https://t.me/yas777dam",
  },
  {
    name: "Twitter/ X",
    icon: <HiX />,
    link: "https://t.me/yas777dam",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://t.me/yas777dam",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://t.me/yas777dam",
  },
];

function Social() {

  const navigate = useNavigate();

  return (
    <div className="row-span-1 bottom-0 relative top-[27rem] lg:top-0 flex justify-center gap-x-2">
      {social.map((item) => (
        <NavButton
          key={item.name}
          contactType={"contact"}
          onClick={() => window.open(item.link)}
        >
          {item.icon}
        </NavButton>
      ))}
    </div>
  );
}

export default Social;
