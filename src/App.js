import './App.css';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import UserTypePage from './pages/UserTypePage';
import RegisterPage from './pages/UserRegisterPage';
import AdminRegisterPage from './pages/AdminRegisterPage';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import LogInPage from './pages/LogInPage';
import HomePage from './pages/UserPage';
import AccountPage from './pages/AccountPage';
import AdminAccountPage from './pages/AdminAccountPage';
import AddJob from './pages/AddJobPage';

function App() {
    return (
    <div className="app-display">
      <NavigationBar />
      <main className="app-content centered">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<UserTypePage />} />
          <Route path="/user-register" element={<RegisterPage />} />
          <Route path="/admin-register" element={<AdminRegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/user-account" element={<AccountPage />} />
          <Route path="/admin-account" element={<AdminAccountPage />} />
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
