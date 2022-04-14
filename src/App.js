import './App.css';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
// import EducationInfo from './components/EducationInfo';
// import SkillsInfo from './components/SkillsInfo';

import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';

import Account from './components/Account';

//add /:id to HomePage

function App() {
  return (
    <div className="app-display">
      <NavigationBar />
      <main className="main-content top-margin">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register/*" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
