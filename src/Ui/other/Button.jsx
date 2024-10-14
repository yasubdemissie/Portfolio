import { useProvider } from "../../Hooks/useProvider";

function Button({ children }) {
  const { changeTheme } = useProvider();

  return (
    <button onClick={changeTheme} className="rounded-md bg-blue-400 px-3 py-1">{children}</button>
  );
}

export default Button;
