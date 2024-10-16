// import { useProvider } from "../Hooks/useProvider";
import ContactDetail from "../Components/ContactDetail";
import Form from "../Components/Form";

function Contact() {
  return (
    <div className="grid justify-cneter gap-8 grid-cols-3 mx-32 my-32">
      <ContactDetail />
      <Form />
    </div>
  );
}

export default Contact;
