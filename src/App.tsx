import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
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
