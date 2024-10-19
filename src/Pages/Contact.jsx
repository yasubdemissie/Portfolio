// import { useProvider } from "../Hooks/useProvider";
import ContactDetail from "../Components/ContactDetail";
import Form from "../Components/Form";

function Contact() {
  return (
    <>
      <div className="grid justify-cneter gap-y-10 overflow-x-hidden w-dvw lg:gap-4 lg:grid-cols-3 mt-16">
        <ContactDetail />
        <Form />
      </div>
    </>
  );
}

export default Contact;
