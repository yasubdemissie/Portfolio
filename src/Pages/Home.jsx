import HomeDescription from "../Components/HomeDescription";
import HomeImage from "../Components/HomeImage";


function Home() {
  return (
    <div className="flex justify-center items-center">
      <HomeImage />
      <HomeDescription />
    </div>
  );
}

export default Home;
