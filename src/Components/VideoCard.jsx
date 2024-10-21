import propType from "prop-types";
import { Link } from "react-router-dom";

function VideoCard({ children }) {
  return (
    <div className="grid gap-x-6 mx-3 lg:mx-0  rounded-2xl overflow-hidden h-fit">
      <div className="h-fit">{children}</div>
      <div className="bg-gray-600/5 h-fit">
        <h2 className="text-lg font-mono mb-2 italic">The Title of the video</h2>
        <p className="text-sm mb-3 font-thin font-serif text-gray-400 italic opacity-90">
          Short description
        </p>
        <p className="text-md mx-1 font-extralight font-sans">
          Unique features of the video and other things
        </p>
        <Link
          to={`https://github.com/yasubdemissie/Haile-Resort-Grand-Hotel`}
          className="text-sm my-6 text-blue-400/25 text-ellipsis flex justify-center items-center hover:text-blue-500/90"
        >
          github Link
        </Link>
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  children: propType.node.isRequired,
};

export default VideoCard;
