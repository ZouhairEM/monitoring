import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../stores/AlarmsStore';
import Patients from '../../data/patients';
import AlarmIcons from '../generic/AlarmIcons';

function NewestWidget() {
  const alarms = useAlarmsStore((state) => state.alarms);
  const newestAlarm = alarms[alarms.length - 1];
  const matchingPatient = Patients.filter(
    (patient) => patient.profile.id === newestAlarm.patient_id
  )[0].profile.name;
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="panel-heading">{t('dashboard.modal.newestAlarm')}</div>
        <div className="flex h-full flex-col items-center justify-around text-center">
          <span className="w-4/5 rounded p-1 text-left text-xl dark:text-grey-200">
            <div className="flex items-center gap-4">
              <span
                className={`${newestAlarm.alarm
                  .toLowerCase()
                  .replaceAll(
                    ' ',
                    '-'
                  )}-alarm flex h-8 w-8 items-center justify-center rounded-md text-white dark:bg-black-300`}
              >
                <span>
                  <AlarmIcons alarm={newestAlarm.alarm} />
                </span>
              </span>
              <p className="text-sm">{newestAlarm.alarm}</p>
            </div>
          </span>
          <div className="flex w-4/5 flex-col">
            <span className="grid grid-cols-3 gap-2 text-left">
              <p>{t('patientBio.name')}</p>
              <p className="col-span-2">{`${
                matchingPatient.split(' ').length > 1 ? `${matchingPatient.split(' ')[0][0]}.` : ''
              } ${matchingPatient.split(' ').pop()}`}</p>
            </span>
            <span className="grid grid-cols-3 gap-2 text-left">
              <p>{t('entryTypes.status')}</p>
              <p>{newestAlarm.status}</p>
            </span>
            <span className="grid grid-cols-3 gap-2 text-left">
              <p>{t('entryTypes.time')}</p>
              <p className="col-span-2">{newestAlarm.time.replaceAll('AM' || 'PM', '')}</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button
              type="button"
              tabIndex={0}
              className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
            >
              <p className="text-xs">{t('dashboard.toAlarm')}</p>
              <ArrowForwardIosIcon style={{ height: '16px' }} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewestWidget;
