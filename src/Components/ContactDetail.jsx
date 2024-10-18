import Social from "../Ui/Social";
import MoreContact from "../Ui/MoreContact";
import DetailHeader from "../Ui/DetailHeader";

function ContactDetail() {

  return (
    <div className="m-1 rounded-lg grid grid-cols-1 grid-rows-11">
      <DetailHeader />
      <MoreContact />
      <Social />
    </div>
  );
}

export default ContactDetail;
