import logo from "../assets/yasLogo.webm";

function Logo() {
  return (
    <div className="mt-0 absolute top-0 left-0 rounded-full border-none">
      <video
        autoPlay
        // loop
        muted
        width={70}
        height={70}
        className="rounded-full bg-transparent border-2 border-white border-none"
      >
        <source src={logo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Logo;