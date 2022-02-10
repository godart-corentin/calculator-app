import { Calculator } from "./components/Calculator";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-300 dark:bg-gray-700">
      <ThemeSwitcher />
      <Calculator />
    </div>
  );
}

export default App;
