// import { useProvider } from "../Hooks/useProvider";

import { useForm } from "react-hook-form";

function Contact() {
  // const { theme } = useProvider();
  const { register, handleSubmit } = useForm();

  return (
    <div className="grid justify-cneter gap-8 grid-cols-3 mx-32 my-32">
      <div className="m-1 bg-gray-500/5 rounded-lg"></div>
      <form className="bg-slate-500/0 col-span-2 rounded-lg grid grid-rows-6 grid-cols-2 gap-8">
        <input
          type="text"
          className="bg-slate-500/10 h-16 outline-0 rounded-full px-10 text-xl"
          placeholder="Your name"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          className="bg-slate-500/10 h-16 outline-0 rounded-full px-10 text-xl"
          placeholder="Your email"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          className="bg-slate-400/10 h-16 outline-0 col-span-2 rounded-full px-10 text-xl"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <textarea
          type="text"
          className="bg-slate-400/10 outline-0 row-span-4 col-span-2 rounded-xl px-10 py-10 text-xl"
          placeholder="Message"
          {...register("message", { required: true })}
        />
      </form>
    </div>
  );
}

export default Contact;
