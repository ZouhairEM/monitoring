import { useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useDarkMode from '../hooks/useDarkMode';
import useAlarmsStore from '../stores/AlarmsStore';
import useSettingsStore from '../stores/SettingsStore';
import Modal from '../composables/Modal';

function ModalContent() {
  return <div>Modal Content</div>;
}

function NavBar() {
  const [colorTheme, setTheme] = useDarkMode();
  const alarms = useAlarmsStore((state) => state.alarms);
  const hasTotalChanged = useAlarmsStore((state) => state.hasTotalChanged);
  const modal = useSettingsStore((state) => state.modal);
  const setModal = useSettingsStore((state) => state.setModal);

  useEffect(() => {
    if (hasTotalChanged) {
      setTimeout(() => {
        useAlarmsStore.setState((state) => ({
          ...state,
          hasTotalChanged: false,
        }));
      }, 200);
    }
  }, [hasTotalChanged]);

  return (
    <nav className="section-header section-footer mb-2 flex flex-col items-center justify-between gap-2 bg-primary-300 px-3 py-2 text-base text-white dark:bg-black-100 sm:grid-cols-6 md:mt-0 md:flex-row md:gap-0 lg:flex">
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-2 dark:text-grey sm:flex-row">
          <p>Monitor App</p>
          <p className="hidden sm:block">-</p>
          <p className="text-center text-sm sm:text-left">
            A <i>simulated </i>
            dashboard for healthcare workers to monitor patient activity
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-2 pb-2 sm:flex-row sm:gap-6 sm:pb-0">
        <div
          className="flex items-center justify-center rounded  bg-white px-2 text-sm font-semibold text-primary-200 dark:bg-black-200 dark:text-grey"
          style={{ height: '26px' }}
        >
          <NotificationsIcon
            style={{ height: `${hasTotalChanged ? '32px' : '20px'}` }}
          />
          <span>
            <span className="text-sm font-bold">x{alarms?.length}</span> Active
            Alarms
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <div className="flex gap-2 dark:text-grey  sm:gap-4">
            <span>John Doe</span>
            <span>|</span>
            <span>Healthcare Provider</span>
          </div>
          {modal && (
            <Modal>
              <ModalContent />
            </Modal>
          )}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setModal(true)}
            onKeyDown={() => setModal(true)}
          >
            <AccountCircleIcon className="dark:text-grey" />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setTheme(colorTheme)}
            onKeyDown={() => setTheme(colorTheme)}
          >
            {colorTheme === 'light' ? (
              <DarkModeIcon className="dark:text-grey" />
            ) : (
              <LightModeIcon />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
