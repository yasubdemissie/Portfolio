import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import Button from "./Button";

const social = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/yasub_d",
    color: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    link: "https://t.me/yas777dam/yasub_d",
    color: "#0088cc",
  },
  {
    name: "Twitter/ X",
    icon: <HiX />,
    link: "https://twitter.com/yasubdemissie",
    color: "#1DA1F2",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
    color: "#1877F2",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/yasubdemissie",
    color: "#333",
  },
];

function Social() {
  return (
    <div className="row-span-1 lg:mb-10 flex justify-evenly px-auto w-full sm:w-4/6 lg:gap-x-2">
      {social.map((item) => (
        <Button
          key={item.name}
          type={"social"}
          onClick={() => window.open(item.link)}
          color={item.color}
        >
          {item.icon}
        </Button>
      ))}
    </div>
  );
}

export default Social;
