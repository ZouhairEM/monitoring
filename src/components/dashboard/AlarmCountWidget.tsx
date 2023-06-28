import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useAlarmsStore from '../../stores/AlarmsStore';

function AlarmCountWidget() {
  const alarms = useAlarmsStore((state) => state.alarms);
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col justify-between gap-2">
        <p>{t('dashboard.modal.openAlarms')}</p>
        <h3 className="text-center text-6xl">{alarms?.length}</h3>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
          >
            <p className="text-xs">{t('dashboard.toMonitoring')}</p>
            <ArrowForwardIosIcon style={{ height: '16px' }} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AlarmCountWidget;
