import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useDarkMode from '../hooks/useDarkMode';
import useAlarmsStore from '../store/AlarmsStore';

function NavBar() {
  const [colorTheme, setTheme] = useDarkMode();
  const alarms = useAlarmsStore((state) => state.alarms);

  return (
    <nav className="section-header section-footer flex justify-between items-center bg-primary-300 dark:bg-black-100 text-white text-base sm:grid-cols-6 py-2 px-6 mb-2">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <p>Monitor App</p>
          <p>-</p>
          <p className="text-sm">
            A <i>simulated </i>
            interface for healthcare workers to monitor patient health activity
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex justify-center items-center bg-white dark:bg-black-200 text-sm text-primary-200 font-semibold dark:text-white rounded px-2">
          <NotificationsIcon style={{ height: '20px' }} />
          <span>
            <span className="text-lg font-bold">x{alarms?.length}</span> Alarms
          </span>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setTheme(colorTheme)}
          onKeyDown={() => setTheme(colorTheme)}
        >
          {colorTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
        <div className="flex justify-between items-center gap-4 text-sm">
          <div className="flex gap-4">
            <span>John Doe</span>
            <span>|</span>
            <span>Healthcare Provider</span>
          </div>
          <AccountCircleIcon />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
