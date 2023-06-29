import { useTranslation } from 'react-i18next';
import DashboardIcon from '@mui/icons-material/Dashboard';
import useSettingsStore from '../../stores/SettingsStore';

function SettingsWidget() {
  const { t } = useTranslation();
  const setModal = useSettingsStore((state) => state.setModal);
  const handleFollowUp = () => {
    setModal({ status: true, name: 'settings' });
  };

  return (
    <div className="flex h-full justify-between">
      <button
        type="button"
        tabIndex={0}
        onClick={() => handleFollowUp()}
        onKeyDown={() => handleFollowUp()}
        className="flex w-full flex-col justify-between"
      >
        <p>{t('dashboard.modal.title')}</p>
        <span className="flex h-full w-full items-center justify-center">
          <DashboardIcon
            className="text-primary-200 dark:text-primary-300"
            style={{ fontSize: '60px' }}
          />
        </span>
      </button>
    </div>
  );
}

export default SettingsWidget;
