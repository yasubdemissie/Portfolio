import { HiArrowRight } from "react-icons/hi2";
import NavButton from "../Ui/other/NavButton";

function HomeDescription() {
  return (
    <div className="w-1/2 px-5 space-y-8">
      <div className="text-4xl italic font-bold">
        <h1 className="text-8xl text-yellow-500 text-wrap decoration-yellow-500 capitalize">
          - I am yasub demissie
        </h1>{" "}
        Full stack Web Developer
      </div>
      <p className="">
        I am building my Portifolio website. I dont at the end what could it
        look like but I will try my best to make as perfect as possible. Are you
        with me til the end? If you say yes, I am very thankful for that.
        Believe one day I will return the favor,
      </p>
      <div className="py-0 pl-3 pr-0 border-[1px] w-fit rounded-full border-yellow-400">
        more about me{" "}
        <NavButton activeButton={true}>
          <HiArrowRight />
        </NavButton>
      </div>
    </div>
  );
}

export default HomeDescription;
