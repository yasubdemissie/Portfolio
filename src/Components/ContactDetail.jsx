import Social from "../Ui/Social";
import MoreContact from "../Ui/MoreContact";
import DetailHeader from "../Ui/DetailHeader";

function ContactDetail() {

  return (
    <div className="rounded-lg flex lg:grid flex-wrap m-0 lg:col-span-1 w-dvw  lg:grid-cols-1 grid-rows-auto lg:grid-rows-5">
      <DetailHeader />
      <MoreContact />
      <Social />
    </div>
  );
}

export default ContactDetail;
