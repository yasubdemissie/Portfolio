import { useEffect, useState } from "react";
import { useProvider } from "../Hooks/useProvider";

function HomeImage() {

    const { theme } = useProvider();
    const images = {
      "light-theme": "/yasubBlack.jpg",
      "dark-theme": "/yasubWhite.jpg",
    };
    const [src, setSrc] = useState(() => images[theme]);
  
    useEffect(() => setSrc(images[theme]), [theme]);

  return (
    <div className=" m-auto rounded-lg overflow-hidden 
    border-r-transparent border-t-transparent h-[500px] w-[500px]
     border-l-yellow-600 border-b-yellow-600 border-[30px] p-0
     ">
      <img
        height={500}
        width={500}
        className="rounded-xl h-full w-full scale-90 hover:scale-100 transition-transform duration-700 ease-in-out"
        src={src}
        alt="Yasub's image"
      />
    </div>
  );
}

export default HomeImage;
