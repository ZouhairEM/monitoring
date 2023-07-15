import { useTranslation } from 'react-i18next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useSettingsStore from '../../stores/SettingsStore';

function AccountModal() {
  const setModal = useSettingsStore((state) => state.setModal);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center gap-2 pb-10">
        <AccountCircleIcon
          className="text-primary-200 dark:text-grey-200"
          style={{ fontSize: '50px' }}
        />
        <h1 className="dark:text-grey-200">John Doe</h1>
        <h4>{t('navBar.modal.job')}</h4>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="dark:text-grey-200">{t('navBar.modal.description')}</p>
        <div className="flex flex-col justify-center gap-2 md:flex-row">
          <button
            type="button"
            onClick={() => setModal({ status: false, name: '' })}
            onKeyDown={() => setModal({ status: false, name: '' })}
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
          >
            {t('navBar.modal.confirm')}
          </button>
          <button
            type="button"
            onClick={() => setModal({ status: false, name: '' })}
            onKeyDown={() => setModal({ status: false, name: '' })}
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
          >
            {t('navBar.modal.cancel')}
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountModal;
