import HomeDescription from "../Components/HomeDescription";
import HomeImage from "../Components/HomeImage";


function Home() {
  return (
    <main className="min-h-dvh flex flex-wrap w-fit lg:mx-auto pt-10 justify-center items-center">
      <HomeImage />
      <HomeDescription />
    </main>
  );
}

export default Home;
