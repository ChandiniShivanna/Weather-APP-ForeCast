import { DarkModeSwitch } from "react-toggle-dark-mode";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-end mb-5">
      <DarkModeSwitch checked={darkMode} onChange={setDarkMode} size={30} />
    </div>
  );
}

export default ThemeToggle;
