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
    <nav className="section-header section-footer mb-2 flex items-center justify-between bg-primary-300 px-6 py-2 text-base text-white dark:bg-black-100 sm:grid-cols-6">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <p>Monitor App</p>
          <p>-</p>
          <p className="text-sm">
            A <i>simulated </i>
            dashboard for healthcare workers to monitor patient activity
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center rounded bg-white px-2 text-sm font-semibold text-primary-200 dark:bg-black-200 dark:text-white">
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
        <div className="flex items-center justify-between gap-4 text-sm">
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
