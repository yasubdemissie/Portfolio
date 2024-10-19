import { HiArrowRight } from "react-icons/hi2";
import NavButton from "../Ui/NavButton";
import { useNavigate } from "react-router-dom";

function HomeDescription() {
  const navigate = useNavigate();

  return (
    <div className="w-dvw lg:w-1/2 overflow-x-hidden  px-5 space-y-8 h-fit p-4">
      <div className="text-xl lg:text-3xl italic font-thin lg:font-bold">
        <h1 className="text-4xl lg:text-6xl text-yellow-500 text-wrap decoration-yellow-500 capitalize">
          - I am yasub demissie
        </h1>{" "}
        Front-End Web Developer
      </div>
      <p className="text-sm lg:xl font-extralight lg:font-normal">
        Hi, I'm Yasub Demissie Wachifo, a passionate Front-End Web Developer
        with experience in building responsive, user-friendly web applications.
        I specialize in React, creating seamless interfaces that enhance user
        experiences. I love solving challenges and continuously learning to
        improve my craft.
      </p>
      <div className="py-0 pl-3 pr-0 border-[1px] w-fit rounded-full border-yellow-400">
        <span className="mx-1">More about me</span>

        <NavButton activeButton={true} onClick={() => navigate("/about")}>
          <HiArrowRight />
        </NavButton>
      </div>
    </div>
  );
}

export default HomeDescription;
