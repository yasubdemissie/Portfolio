import { useProvider } from "../Hooks/useProvider";

function Button({ children }) {
  const { changeTheme } = useProvider();

  return (
    <button onClick={changeTheme} title="Button" className="rounded-md mt-1 font-extrabold text-2xl transition-all duration-700">{children}</button>
  );
}

export default Button;
