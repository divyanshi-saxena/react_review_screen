import './App.css';
import ReviewPage from './components/ReviewPage';
import Toggle from './components/Toggle';
import useLocalStorage from 'use-local-storage';
import AppContextProvider from './context/app/AppContextProvider';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", preference);
  return (
    <AppContextProvider>
      <div className="App" data-theme={darkMode ? "dark" : ""}>
        <Toggle
          isChecked={darkMode}
          handleChange={() => setDarkMode(!darkMode)}
        />
        <ReviewPage />
      </div>
    </AppContextProvider>
  );
}

export default App;
