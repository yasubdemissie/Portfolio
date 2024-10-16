import { HiLocationMarker } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { ImMail4 } from "react-icons/im";
import NavButton from "../Ui/other/NavButton";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ContactDetail() {

  const navigate = useNavigate();

    return (
        <div className="m-1 rounded-lg grid grid-cols-1 grid-rows-11 gap-2">
        <div className="row-span-4 grid py-9 px-4">
          <h2 className="font-bold text-3xl ml-5 italic">I am here</h2>
          <div className="italic font-extralight text-lg">
            Whether you need help with web development or want to brainstorm
            ideas, I’m here to collaborate! Reach out and let’s bring your
            projects to life! 👨‍💻✨
          </div>
        </div>
        <div className="row-span-2 grid grid-rows-2 grid-cols-8">
          <span className="text-yellow-500 text-5xl row-span-2 col-span-2 flex justify-center items-center">
            <HiLocationMarker />
          </span>{" "}
          <span className="col-span-6 mt-4">Address</span>
          <span className="col-span-6 font-bold capitalize">
            AASTU, Addis Ababa -- Ethiopia
          </span>
        </div>
        <div className="row-span-2 grid grid-rows-2 grid-cols-8">
          <span className="text-yellow-500 text-5xl row-span-2 col-span-2 flex justify-center items-center">
            <ImMail4 />
          </span>{" "}
          <span className="col-span-6 mt-4">
            Email --<span className="text-sm italic">another option</span>
          </span>
          <span className="col-span-6 text-blue-400">yasdam777@gmail.com</span>
        </div>
        <div className="row-span-2 grid grid-rows-2 grid-cols-8">
          <span className="text-yellow-500 text-5xl row-span-2 col-span-2 flex justify-center items-center">
            <MdPhone />
          </span>{" "}
          <span className="col-span-6 mt-4">Phone number</span>
          <span className="col-span-6 capitalize text-blue-400">
            +251 938 1771 41
          </span>
        </div>
        <div className="row-span-1 flex justify-center py-2 gap-3">
          <NavButton contactType={"contact"} onClick={() => window.open("https://t.me/yas777dam")}>
            <FaInstagram />
          </NavButton>
          <NavButton contactType={"contact"} onClick={() => window.open("https://t.me/yas777dam")}>
            <FaTelegram />
          </NavButton>
          <NavButton contactType={"contact"} onClick={() => window.open("https://t.me/yas777dam")}>
            <FaFacebook />
          </NavButton>
          <NavButton contactType={"contact"} onClick={() => window.open("https://t.me/yas777dam")}>
            <FaTwitter />
          </NavButton>
        </div>
      </div>
    )
}

export default ContactDetail
