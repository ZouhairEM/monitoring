import { useTranslation } from 'react-i18next';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckIcon from '@mui/icons-material/Check';
import TagIcon from '@mui/icons-material/Tag';
import AlarmEntry from '../../types/AlarmEntryType';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';
import AlarmTypes from '../../data/alarmtypes';
import AlarmIcons from '../generic/AlarmIcons';
import alarmTranslations from '../generic/AlarmTranslations';

interface AlarmBioProps {
  entry: AlarmEntry;
  entryId: number;
  onToggle: (event: number) => void;
  index: number;
}

function AlarmBio({ entry, entryId, index, onToggle }: AlarmBioProps) {
  const alarmsStore = useAlarmsStore((state) => state);
  const setIndex = useSettingsStore((state) => state.setIndex);
  const [mappedPatient, setMappedPatient] = useState<string | null>(null);
  const [mappedPatientRoom, setMappedPatientRoom] = useState<string | number | null>(null);
  const [disabled] = useState(false);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const { t } = useTranslation();

  useEffect(() => {
    setMappedPatient(
      alarmsStore.patients.filter(
        (patient) =>
          patient.profile.id ===
          alarmsStore.alarms.filter((alarm) => alarm.id === entry.id)[0].patient_id
      )[0].profile.name
    );
    setMappedPatientRoom(
      alarmsStore.patients.filter(
        (patient) =>
          patient.profile.id ===
          alarmsStore.alarms.filter((alarm) => alarm.id === entry.id)[0].patient_id
      )[0].profile.room
    );
  }, [alarmsStore.alarms, entry.id, mappedPatient, mappedPatientRoom, alarmsStore.patients]);

  const makeActivePatient = () => {
    onToggle(entryId);
    alarmsStore.findPatient(entry.patient_id);
    alarmsStore.setActive(entryId);
    setIndex(index);
  };

  const renderPriority = () => {
    if (entry.alarm === AlarmTypes.One) {
      return (
        <>
          <div className="priority" />
          <div className="priority" />
          <div className="priority" />
          <div className="priority" />
          <div className="priority" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Two) {
      return (
        <>
          <div className="priority" />
          <div className="priority" />
          <div className="no-priority" />
          <div className="no-priority" />
          <div className="no-priority" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Three) {
      return (
        <>
          <div className="priority" />
          <div className="priority" />
          <div className="priority" />
          <div className="no-priority" />
          <div className="no-priority" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Four) {
      return (
        <>
          <div className="priority" />
          <div className="no-priority" />
          <div className="no-priority" />
          <div className="no-priority" />
          <div className="no-priority" />
        </>
      );
    }
    if (entry.alarm === AlarmTypes.Five) {
      return (
        <>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="priority" />
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <div
      onClick={() => makeActivePatient()}
      onKeyDown={() => makeActivePatient()}
      role="button"
      tabIndex={0}
      className={`alarm-bio dark:text-grey grid w-[660px] grid-cols-9 px-4 py-2 text-sm hover:bg-primary-100 dark:bg-black-100 sm:w-full md:w-[710px] lg:w-full ${
        entry.id === alarmsStore.activeAlarm && !disabled ? 'active' : ''
      }`}
    >
      <div className="flex flex-row items-center justify-around">
        <input
          type="checkbox"
          ref={inputRef}
          className="accent-primary-200 focus:accent-primary-200 dark:accent-black-200 dark:focus:accent-black-200"
          checked={entry.id === alarmsStore.activeAlarm && !disabled}
          readOnly
        />
        <div className="flex items-center px-3">#{entryId < 10 ? `0${entryId}` : entryId}</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-full w-full gap-0.5">{renderPriority()}</div>
      </div>
      <div className="col-span-2 flex justify-end text-right text-sm">
        <span
          className={`${alarmTranslations(entry.alarm)
            .toLowerCase()
            .replace(
              ' ',
              '-'
            )}-alarm active-alarm flex justify-center gap-2 rounded p-1 text-white dark:opacity-80 `}
        >
          <span className="hidden sm:block">
            <AlarmIcons alarm={entry.alarm} />
          </span>
          {alarmTranslations(entry.alarm)}
        </span>
      </div>
      <div className="col-span-2 flex flex-col justify-center text-right">{mappedPatient}</div>
      <div className="flex flex-col justify-center text-right">{entry.time}</div>
      <div className="flex flex-col items-end justify-center">
        {entry.status === 'Done' ? (
          <span className="flex items-center gap-1">
            <CheckIcon className="opacity-90 dark:text-primary-200" style={{ height: '15px' }} />
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
              className="opacity-90 dark:text-primary-200"
              style={{
                height: '15px',
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
