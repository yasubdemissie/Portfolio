import { useProvider } from "../Hooks/useProvider";

function Button({ children }) {
  const { changeTheme } = useProvider();

  return (
    <button onClick={changeTheme} className="rounded-md mt-5 font-extrabold text-2xl transition-all duration-700">{children}</button>
  );
}

export default Button;
