import { HiLocationMarker } from "react-icons/hi";
import { ImMail4 } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import DetailSection from "./DetailSection";

const data = [
  {
    name: "Address",
    icon: <HiLocationMarker />,
    description: "AASTU, Addis Ababa -- Ethiopia",
  },
  { name: "Email", icon: <ImMail4 />, description: "yasdam777@gmail.com" },
  { name: "Mobile number", icon: <MdPhone />, description: "+251 938 1771 41" },
];

function MoreContact() {
  return (
    <>
      {data.map((item) => (
        <DetailSection
          key={item.name}
          icon={item.icon}
          title={item.name}
          description={item.description}
        />
      ))}
    </>
  );
}

export default MoreContact;
