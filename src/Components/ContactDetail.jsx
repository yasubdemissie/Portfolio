import Social from "../Ui/Social";
import MoreContact from "../Ui/MoreContact";
import DetailHeader from "../Ui/DetailHeader";

function ContactDetail() {
  return (
    <>
      <div className="rounded-lg flex relative lg:grid flex-wrap m-0 h-fit w-dvw lg:w-1/3 lg:pl-10 lg:grid-cols-1 grid-rows-auto">
        <DetailHeader />
        <MoreContact />
        <Social />
      </div>
    </>
  );
}

export default ContactDetail;
