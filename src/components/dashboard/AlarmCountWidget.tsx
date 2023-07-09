import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useAlarmsStore from '../../stores/AlarmsStore';

function AlarmCountWidget() {
  const alarms = useAlarmsStore((state) => state.alarms);
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="panel-heading">{t('dashboard.modal.openAlarms')}</div>
        <h3 className="flex h-full items-center justify-center text-center text-6xl">
          {alarms?.length}
        </h3>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
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
