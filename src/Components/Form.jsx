import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdSend } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Form() {
  const form = useRef();
  const { register, reset, handleSubmit } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm("service_9tkz54m", "template_ry6w7sr", form.current, {
        publicKey: "xj3VNFFC5ywHusEy7",
      })
      .then(
        () => {
          toast.success("SUCCESS!");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };

  function submitForm() {
    sendEmail();
    reset();
  }

  return (
    
    <form
      ref={form}
      onSubmit={handleSubmit(submitForm)}
      className="w-dvw lg:w-3/5 px-1 mb-10 mx-auto lg:pr-10 rounded-lg grid grid-rows-7 lg:grid-rows-5 grid-cols-2 gap-1 lg:gap-2"
    >
      <input
        type="text"
        className="bg-slate-500/10  col-span-2 w-[95%] lg:w-[90%] lg:col-span-1 h-8 lg:h-16 outline-0 rounded-full px-3 lg:px-10 text-md italic"
        placeholder="Your name"
        name="user_name"
        {...register("user_name", { required: true })}
      />
      <input
        type="text"
        className="bg-slate-500/10  w-[95%] lg:w-[90%] col-span-2 lg:col-span-1  h-8 lg:h-16 outline-0 rounded-full px-3 lg:px-10 text-md"
        placeholder="Your email"
        name="user_email"
        {...register("user_email", { required: true })}
      />
      <input
        type="text"
        className="bg-slate-500/10  w-[95%] h-8 lg:h-16 outline-0 col-span-2 rounded-full px-3 lg:px-10 text-md"
        placeholder="Subject"
        name="subject"
        {...register("subject", { required: true })}
      />
      <textarea
        type="text"
        className="bg-slate-500/10  w-[95%] outline-0 row-span-4 lg:row-span-3 col-span-2 rounded-xl p-3 lg:p-10 text-md"
        placeholder="Message"
        name="message"
        {...register("message", { required: true })}
      />
      <div className="row-span-1 border-yellow-500 border-[1px] text-sm lg:text-md w-fit h-fit pl-2 rounded-full italic mb-3">
        <span className="mx-2">Send email </span>
        <button
          className="rounded-full bg-yellow-400 text-black p-3 text-sm lg:text-md"
          type="submit"
        >
          <MdSend />
        </button>
      </div>
    </form>
  );
}

export default Form;
