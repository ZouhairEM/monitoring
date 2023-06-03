import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import useDarkMode from './hooks/useDarkMode';

function App() {
  useDarkMode();
  return (
    <div className="container font-open-sans">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
