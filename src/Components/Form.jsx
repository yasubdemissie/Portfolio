import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toast";
import { MdSend } from "react-icons/md";
import { useForm } from "react-hook-form";

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
      className="bg-slate-500/0 col-span-2 rounded-lg grid grid-rows-5 grid-cols-2 gap-x-4 gap-y-10 h-fit"
    >
      <input
        type="text"
        className="bg-slate-500/10 h-16 outline-0 rounded-full px-10 text-md italic"
        placeholder="Your name"
        name="user_name"
        {...register("user_name", { required: true })}
      />
      <input
        type="text"
        className="bg-slate-500/10 h-16 outline-0 rounded-full px-10 text-md"
        placeholder="Your email"
        name="user_email"
        {...register("user_email", { required: true })}
      />
      <input
        type="text"
        className="bg-slate-500/10 h-16 outline-0 col-span-2 rounded-full px-10 text-md"
        placeholder="Subject"
        name="subject"
        {...register("subject", { required: true })}
      />
      <textarea
        type="text"
        className="bg-slate-500/10 outline-0 row-span-3 col-span-2 rounded-xl px-10 py-10 text-md"
        placeholder="Message"
        name="message"
        {...register("message", { required: true })}
      />
      <div className="row-span-1 border-yellow-500 border-[1px] w-fit h-fit pl-2 rounded-full italic">
        <span className="mx-2">Send email </span>
        <button
          className="rounded-full bg-yellow-400 text-black p-3 text-md"
          type="submit"
        >
          <MdSend />
        </button>
      </div>
    </form>
  );
}

export default Form;
