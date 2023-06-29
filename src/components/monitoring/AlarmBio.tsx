import { useTranslation } from 'react-i18next';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckIcon from '@mui/icons-material/Check';
import HearingIcon from '@mui/icons-material/Hearing';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessibleIcon from '@mui/icons-material/Accessible';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TagIcon from '@mui/icons-material/Tag';
import AlarmEntry from '../../types/AlarmEntryType';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';
import AlarmTypes from '../../data/alarmtypes';

interface AlarmBioProps {
  entry: AlarmEntry;
  entryId: number;
  onToggle: (event: number) => void;
  index: number;
}

function AlarmBio({ entry, entryId, index, onToggle }: AlarmBioProps) {
  const [mappedPatient, setMappedPatient] = useState<string | null>(null);
  const [mappedPatientRoom, setMappedPatientRoom] = useState<
    string | number | null
  >(null);
  const [disabled] = useState(false);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const findPatient = useAlarmsStore((state) => state.findPatient);
  const setActive = useAlarmsStore((state) => state.setActive);
  const setIndex = useSettingsStore((state) => state.setIndex);
  const patients = useAlarmsStore((state) => state.patients);
  const alarms = useAlarmsStore((state) => state.alarms);
  const { t } = useTranslation();

  const handleAlarmTranslation = () => {
    if (entry.alarm === AlarmTypes.One) {
      return t('alarmTypes.fireHazard');
    }
    if (entry.alarm === AlarmTypes.Two) {
      return t('alarmTypes.loudNoise');
    }
    if (entry.alarm === AlarmTypes.Three) {
      return t('alarmTypes.helpCall');
    }
    if (entry.alarm === AlarmTypes.Four) {
      return t('alarmTypes.patientUp');
    }
    return t('alarmTypes.heartMonitor');
  };

  useEffect(() => {
    setMappedPatient(
      patients.filter(
        (patient) =>
          patient.profile.id ===
          alarms.filter((alarm) => alarm.id === entry.id)[0].patient_id
      )[0].profile.name
    );
    setMappedPatientRoom(
      patients.filter(
        (patient) =>
          patient.profile.id ===
          alarms.filter((alarm) => alarm.id === entry.id)[0].patient_id
      )[0].profile.room
    );
  }, [alarms, entry.id, mappedPatient, mappedPatientRoom, patients]);

  const makeActivePatient = (id: number) => {
    onToggle(entryId);
    findPatient(id);
    setActive(entryId);
    setIndex(index);
  };

  const handlePriority = () => {
    if (entry.alarm === AlarmTypes.One) {
      return (
        <>
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Two) {
      return (
        <>
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Three) {
      return (
        <>
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Four) {
      return (
        <>
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Five) {
      return (
        <>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300"
            />
          ))}
        </>
      );
    }
    return null;
  };

  const handleIcon = () => {
    if (entry.alarm === AlarmTypes.One) {
      return <LocalFireDepartmentIcon style={{ height: '17px' }} />;
    }
    if (entry.alarm === AlarmTypes.Two) {
      return <HearingIcon style={{ height: '18px' }} />;
    }
    if (entry.alarm === AlarmTypes.Three) {
      return <RecordVoiceOverIcon style={{ height: '18px' }} />;
    }
    if (entry.alarm === AlarmTypes.Four) {
      return <AccessibleIcon style={{ height: '18px' }} />;
    }
    if (entry.alarm === AlarmTypes.Five) {
      return <MonitorHeartIcon style={{ height: '18px' }} />;
    }
    return <HearingIcon />;
  };

  return (
    <div
      onClick={() => makeActivePatient(entry.patient_id)}
      onKeyDown={() => makeActivePatient(entry.patient_id)}
      role="button"
      tabIndex={0}
      className={`alarm-bio grid w-[660px] grid-cols-9 px-4 py-2 text-sm hover:bg-primary-100 dark:bg-black-100 dark:text-grey sm:w-full md:w-[710px] lg:w-full ${
        entry.id === activeAlarm && !disabled ? 'active' : ''
      }`}
    >
      <div className="flex flex-row items-center justify-around">
        <input
          type="checkbox"
          ref={inputRef}
          className="accent-primary-200 focus:accent-primary-200 dark:accent-black-200 dark:focus:accent-black-200"
          checked={entry.id === activeAlarm && !disabled}
          readOnly
        />
        <div className="flex items-center px-3">
          {entryId < 10 ? `#0${entryId}` : entryId}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-full w-full gap-0.5">{handlePriority()}</div>
      </div>
      <div className="col-span-2 flex justify-end text-right text-sm">
        <span
          className={`${handleAlarmTranslation()
            .toLowerCase()
            .replace(
              ' ',
              '-'
            )}-alarm active-alarm flex justify-center gap-2 rounded p-1 text-white dark:opacity-80 `}
        >
          <span className="hidden sm:block">{handleIcon()}</span>
          {handleAlarmTranslation()}
        </span>
      </div>
      <div className="col-span-2 flex flex-col justify-center text-right">
        {mappedPatient}
      </div>
      <div className="flex flex-col justify-center text-right">
        {entry.time}
      </div>
      <div className="flex flex-col items-end justify-center">
        {entry.status === 'Done' ? (
          <span className="flex items-center gap-1">
            <CheckIcon
              className="dark:text-grey"
              style={{ height: '15px', opacity: '0.9' }}
            />
            <span>
              {entry.status === t('availableStatus.open') ? (
                <p className="hidden sm:block">{t('availableStatus.open')}</p>
              ) : (
                <p className="hidden sm:block">{t('availableStatus.done')}</p>
              )}
            </span>
          </span>
        ) : (
          <span className="flex items-center justify-end gap-1">
            <NotificationsActiveIcon
              style={{
                height: '15px',
                opacity: '0.9',
              }}
            />
            {entry.status === 'Done' ? (
              <p className="hidden sm:block">{t('availableStatus.done')}</p>
            ) : (
              <p className="hidden sm:block">{t('availableStatus.open')}</p>
            )}
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <div className="flex items-center">
          <TagIcon style={{ fontSize: '14px' }} />
          {mappedPatientRoom && +mappedPatientRoom < 10
            ? `0${mappedPatientRoom}`
            : mappedPatientRoom}
        </div>
      </div>
    </div>
  );
}

export default AlarmBio;
