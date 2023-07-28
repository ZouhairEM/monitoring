import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../stores/AlarmsStore';
import PatientType from '../../types/PatientType';
import AlarmIcons from '../generic/AlarmIcons';
import alarmTranslations from '../generic/AlarmTranslations';

interface PatientAlarmsOverviewProps {
  matchingPatient: PatientType;
}

function PatientAlarmsOverview({ matchingPatient }: PatientAlarmsOverviewProps) {
  const matchingAlarms = useAlarmsStore((state) =>
    state.alarms.filter((alarm) => alarm.patient_id === matchingPatient.profile.id)
  );
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col gap-2 p-2">
      <div className="dark:texjustify-betweent-grey-200 flex gap-2">
        <p className="capitalize dark:text-grey-200">
          {t('navBar.openAlarms')}: <span className="font-bold">{matchingAlarms.length}</span>
        </p>
      </div>
      <div className="flex h-full max-h-[260px] flex-col justify-between gap-2">
        <div
          className={`flex flex-col gap-1 ${matchingAlarms.length > 6 ? 'overflow-y-scroll' : ''}`}
        >
          {matchingAlarms.map((matchingAlarm) => (
            <div key={matchingAlarm.id}>
              <div className="flex flex-col">
                <span
                  className={`${alarmTranslations(matchingAlarm.alarm)
                    .toLowerCase()
                    .replace(
                      ' ',
                      '-'
                    )}-alarm active-alarm flex justify-center gap-2 rounded p-1 text-white dark:opacity-80 `}
                >
                  <span className="hidden sm:block">
                    <AlarmIcons alarm={matchingAlarm.alarm} />
                  </span>
                  {alarmTranslations(matchingAlarm.alarm)}
                </span>
              </div>
            </div>
          ))}
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
    </div>
  );
}

export default PatientAlarmsOverview;
