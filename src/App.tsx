import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Monitoring from './routes/Monitoring';
import Patients from './routes/Patients';
import useDarkMode from './hooks/useDarkMode';
import useColorTheme from './hooks/useColorTheme';
import SideBar from './components/layout/SideBar';
import Dashboard from './routes/Dashboard';
import GenerateAlarms from './libs/GenerateAlarms';

function App() {
  useDarkMode();
  useColorTheme();
  GenerateAlarms();

  return (
    <div className="relative mx-auto my-0 min-w-[320px] max-w-[1180px] p-2 font-open-sans md:my-4">
      <NavBar />
      <div className="flex flex-col gap-0 sm:gap-2 md:flex-row">
        <SideBar />
        <Routes>
          <Route path="/" element={<Monitoring />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </div>
    </div>
  );
}

function wrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default wrappedApp;
