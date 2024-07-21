import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-primary dark:text-white"
        >
          Rick and Morty
        </Link>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
