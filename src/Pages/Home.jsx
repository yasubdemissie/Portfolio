import HomeDescription from "../Components/HomeDescription";
import HomeImage from "../Components/HomeImage";


function Home() {
  return (
    <div className="min-h-dvh flex flex-wrap w-fit lg:mx-auto pt-10 justify-center items-center">
      <HomeImage />
      <HomeDescription />
    </div>
  );
}

export default Home;
