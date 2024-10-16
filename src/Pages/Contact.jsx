// import { useProvider } from "../Hooks/useProvider";
import ContactDetail from "../Components/ContactDetail";
import Form from "../Components/Form";

function Contact() {
  return (
    <div className="personal_css grid justify-cneter gap-4 grid-cols-3 mx-32 my-16">
      <ContactDetail />
      <Form />
    </div>
  );
}

export default Contact;
