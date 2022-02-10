import { Calculator } from "./components/Calculator";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
      <ThemeSwitcher />
      <Calculator />
    </div>
  );
}

export default App;
