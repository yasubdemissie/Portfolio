import VideoCard from "../Components/VideoCard";

function Portifolio() {
  return (
    <div className="w-dvw flex flex-wrap justify-start lg:gap-x-10 gap-y-10 mt-16 mx-2 lg:mx-auto lg:ml-3 h-fit ">
      <VideoCard>
        <iframe
          className="w-full lg:w-full h-56 mx-auto"
          // height="215"
          src="https://www.youtube.com/embed/jZ14165-GfU?si=ce4O_MfX4Blo24QD" // https://www.youtube.com/watch?v=HDcjKbfk5eI&t=10s
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </VideoCard>
      {/* <VideoCard>
        <iframe
          className="w-full h-56"
          // height="315"
          src="https://www.youtube.com/embed/3oFk6h-W6wc?si=2fjFwIwAfIuPbzq-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VideoCard> */}
      <VideoCard>
        <iframe
          className="w-full h-56"
          // height="315"
          src="https://www.youtube.com/embed/ziw4CyytCKA?si=S8lcWScKNe71MdCE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VideoCard>
      <VideoCard>
        <iframe
          className="w-full h-56"
          // height="315"
          src="https://www.youtube.com/embed/BB1ibZI1-p4?si=zC907HBjmUDqbJ_a"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullscreen
        ></iframe>
      </VideoCard>
      <VideoCard>
        <iframe
          className="w-full h-56"
          // height="315"
          src="https://www.youtube.com/embed/Piq3Qfw-r1s?si=9grvN5TRpiPhSWXk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullscreen
        ></iframe>
      </VideoCard>
      <VideoCard>
        <iframe
          className="w-full h-56"
          // height="315"
          src="https://www.youtube.com/embed/HzPvL0SNaFc?si=CZ_VvipnkGkoW2Zq"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen="true"
        ></iframe>
      </VideoCard>
    </div>
  );
}

export default Portifolio;
