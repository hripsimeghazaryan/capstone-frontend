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

const routes = [
  {
    path: "/",
    component: <MainPage />
  },
  {
    path: "/register",
    component: <UserTypePage />
  },
  {
    path: "/user-register",
    component: <RegisterPage />
  },
  {
    path: "/admin-register",
    component: <AdminRegisterPage />
  },
  {
    path: "/login",
    component: <LogInPage />
  },
  {
    path: "/user-page",
    component: <HomePage />
  },
  {
    path: "/admin-register",
    component: <AdminPage />
  },
  {
    path: "/user-account",
    component: <AccountPage />
  },
  {
    path: "/admin-account",
    component: <AdminAccountPage />
  },
  {
    path: "/add-job",
    component: <AddJob />
  },
]

function App() {
    return (
    <div className="app-display">
      <NavigationBar />
      <main className="app-content centered">
        <Routes>
          {routes.map(({path, component}, key) => 
            <Route path={path} element={component} key={key} />
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
