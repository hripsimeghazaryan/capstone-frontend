import './App.css';
import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';

import { ThemeContext } from './contexts/theme-context';

function App() {
  // const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="app-display">
      <NavigationBar />
      <main className="app-content centered">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
