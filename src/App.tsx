import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import useDarkMode from './hooks/useDarkMode';
import useColorTheme from './hooks/useColorTheme';
import SideBar from './components/layout/SideBar';
import Dashboard from './routes/Dashboard';

function App() {
  useDarkMode();
  useColorTheme();

  return (
    <div className="relative mx-auto my-0 min-w-[320px] max-w-[1180px] p-2 font-open-sans md:my-4">
      <NavBar />
      <div className="flex flex-col gap-0 sm:gap-2 md:flex-row">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
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
