import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import useDarkMode from '../../hooks/useDarkMode';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';
import Modal from '../generic/Modal';
import AccountModal from '../composables/AccountModal';

function NavBar() {
  const [colorTheme, setTheme] = useDarkMode();
  const alarms = useAlarmsStore((state) => state.alarms);
  const modal = useSettingsStore((state) => state.modal);
  const setModal = useSettingsStore((state) => state.setModal);
  const [alarmsChanged, setAlarmsChanged] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setAlarmsChanged(true);
    setTimeout(() => {
      setAlarmsChanged(false);
    }, 1000);
  }, [alarms]);

  return (
    <nav className="mb-2 flex flex-col items-center justify-between gap-2 rounded-b-lg rounded-t-lg bg-white px-3 py-2 text-base text-black-200 dark:bg-black-100 sm:grid-cols-6 md:mt-0 md:flex-row md:gap-0 lg:flex">
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-2 dark:text-grey-200 sm:flex-row">
          <p>{t('navBar.title')}</p>
          <p className="hidden sm:block">-</p>
          <p className="text-center text-sm sm:text-left">{t('navBar.description')}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 pb-2 sm:pb-0">
        <div
          className="flex items-center justify-center rounded px-2 text-sm font-semibold dark:text-grey-200"
          style={{ height: '26px' }}
        >
          {!alarmsChanged ? (
            <NotificationsIcon
              className="text-primary-300 dark:text-grey-200"
              style={{ height: '20px' }}
            />
          ) : (
            <NotificationsActiveIcon
              className="new-alarm text-primary-300 dark:text-grey-200"
              style={{ height: '20px' }}
            />
          )}
          <span>
            <span className="text-sm font-bold">x{alarms?.length}</span> {t('navBar.openAlarms')}
          </span>
        </div>
        {modal.status && modal.name === 'account' && (
          <Modal>
            <AccountModal />
          </Modal>
        )}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setModal({ status: true, name: 'account' })}
          onKeyDown={() => setModal({ status: true, name: 'account' })}
        >
          <AccountCircleIcon className="text-secondary text-primary-300 dark:text-grey-200" />
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setTheme(colorTheme)}
          onKeyDown={() => setTheme(colorTheme)}
        >
          {colorTheme === 'light' ? (
            <DarkModeIcon className="text-secondary dark:text-grey-200" />
          ) : (
            <LightModeIcon className="text-primary-300" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
