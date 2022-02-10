import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
      <ThemeSwitcher />
      <h1 className="dark:text-white">
        Hello world ! <FontAwesomeIcon icon="hand" />
      </h1>
    </div>
  );
}

export default App;
