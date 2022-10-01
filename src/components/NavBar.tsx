import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useDarkMode from '../hooks/useDarkMode';

const NavBar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="flex justify-between items-center bg-green dark:bg-black text-white sm:grid-cols-6 p-1 px-3 mb-2 transition duration-500">
      <div>Monitoring App</div>
      <div className="flex items-center gap-10">
        <div className="cursor-pointer" onClick={() => setTheme(colorTheme)}>
          {colorTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
        <div className="flex justify-between items-center gap-4 text-sm">
          <div className="flex flex-col text-right">
            <span>Dr. Jon Bon Jovi</span>
            <span>Healthcare Provider</span>
          </div>
          <AccountCircleIcon />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
