// import { useProvider } from "../Hooks/useProvider";
import ContactDetail from "../Components/ContactDetail";
import Form from "../Components/Form";

function Contact() {
  return (
    <>
      <div className="flex justify-start gap-y-10 overflow-x-hidden w-dvw lg:gap-4 mt-16">
        <ContactDetail />
        <Form />
      </div>
    </>
  );
}

export default Contact;
