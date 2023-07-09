import { useTranslation } from 'react-i18next';
import useAlarmsStore from '../../stores/AlarmsStore';

function TotalCountWidget() {
  const alarms = useAlarmsStore((state) => state.alarms);
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="panel-heading">{t('dashboard.modal.totalAlarms')}</div>
        <h3 className="flex h-full items-center justify-center text-center text-6xl">
          {alarms.length + 133}
        </h3>
      </div>
      <div className="flex justify-center">
        <p>{t('dashboard.thisWeek')}</p>
      </div>
    </div>
  );
}

export default TotalCountWidget;
