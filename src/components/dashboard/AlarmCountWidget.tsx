import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';

function AlarmCountWidget() {
  const { t } = useTranslation();

  return (
    <div className="flex h-full justify-between">
      <div className="flex flex-col justify-between">
        <p>{t('dashboard.modal.openAlarms')}</p>
        <h3 className="text-6xl">17</h3>
      </div>
      <div className="flex flex-col justify-end">
        <button
          type="button"
          tabIndex={0}
          className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
        >
          <p className="text-xs">{t('dashboard.toMonitoring')}</p>
          <ArrowForwardIosIcon style={{ height: '16px' }} />
        </button>
      </div>
    </div>
  );
}

export default AlarmCountWidget;
