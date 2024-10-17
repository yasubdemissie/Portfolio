import propType from "prop-types";

function VideoCard({ children }) {
  return (
    <div className="grid grid-rows-8 rounded-2xl overflow-hidden h-fit">
      <div className="bg-red-600/5 row-span-5 min-h-[315px] h-fit">
        {children}
      </div>
      <div className="bg-blue-600/5 row-span-3 h-fit">
        <h2 className="text-xl">The Title of the video</h2>
        <p className="text-md font-thin text-gray-400 italic opacity-90">Short description</p>
        <p className="text-lg mx-3 font-thin font-sans">Unique features of the video and other things</p>
        <footer className="text-sm my-6">Something is cooking here</footer>
      </div>
    </div>
  );
}

export default VideoCard;
