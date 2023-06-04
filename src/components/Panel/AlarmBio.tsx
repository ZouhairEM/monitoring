import { MutableRefObject, useRef, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckIcon from '@mui/icons-material/Check';
import HearingIcon from '@mui/icons-material/Hearing';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessibleIcon from '@mui/icons-material/Accessible';
import TagIcon from '@mui/icons-material/Tag';
import AlarmEntry from '../../types/AlarmEntryType';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';

interface AlarmBioProps {
  entry: AlarmEntry;
  entryId: number;
  onToggle: (event: number) => void;
  index: number;
}

function AlarmBio({ entry, entryId, index, onToggle }: AlarmBioProps) {
  const [disabled, setDisabled] = useState(false);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const findPatient = useAlarmsStore((state) => state.findPatient);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const setActive = useAlarmsStore((state) => state.setActive);
  const setIndex = useSettingsStore((state) => state.setIndex);
  const makeActivePatient = (id: number) => {
    if (id !== activeAlarm) {
      onToggle(entryId);
      findPatient(id);
      setActive(entryId);
      setIndex(index);
    } else {
      setDisabled(true);
    }
  };

  const handlePriority = () => {
    if (entry.priority === 1) {
      return (
        <>
          <div className="w-1/3 rounded bg-primary-200 opacity-90  dark:bg-primary-300" />
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300"
            />
          ))}
        </>
      );
    }
    if (entry.priority === 2) {
      return (
        <>
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300" />
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300"
            />
          ))}
        </>
      );
    }
    if (entry.priority === 3) {
      return (
        <>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300"
            />
          ))}

          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
          <div className="w-1/3 rounded bg-primary-200 opacity-20 dark:bg-primary-300" />
        </>
      );
    }
    if (entry.priority === 4) {
      return (
        <>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1/3 rounded bg-primary-200 opacity-90 dark:bg-primary-300"
            />
          ))}
          <div className="w-1/3 rounded bg-primary-200 opacity-10 dark:bg-primary-300" />
        </>
      );
    }
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
  };

  const handleIcon = () => {
    if (entry.alarm === 'Acoustic') {
      return <HearingIcon style={{ height: '18px' }} />;
    }
    if (entry.alarm === 'Fire') {
      return <LocalFireDepartmentIcon style={{ height: '18px' }} />;
    }
    if (entry.alarm === 'Help') {
      return <RecordVoiceOverIcon style={{ height: '18px' }} />;
    }
    if (entry.alarm === 'Patient up') {
      return <AccessibleIcon style={{ height: '18px' }} />;
    }
    return <HearingIcon />;
  };

  return (
    <div
      onClick={() => makeActivePatient(entry.patient_id)}
      onKeyDown={() => makeActivePatient(entry.patient_id)}
      role="button"
      tabIndex={0}
      className={`row alarm-bio grid grid-cols-9 gap-4 px-4 py-2 text-sm hover:bg-primary-100 dark:bg-black-100 dark:text-grey ${
        entry.id === activeAlarm && !disabled ? 'active' : ''
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <input
          type="checkbox"
          ref={inputRef}
          className="accent-primary-200 focus:accent-primary-200 dark:accent-black-200 dark:focus:accent-black-200"
          checked={entry.id === activeAlarm && !disabled}
          readOnly
        />
        <div className="flex items-center">
          <TagIcon style={{ fontSize: '14px' }} />
          {entryId < 10 ? `0${entryId}` : entryId}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-full w-full gap-0.5">{handlePriority()}</div>
      </div>
      <div className="col-span-2 flex justify-end text-right text-sm">
        <span
          className={`${entry.alarm
            .toLowerCase()
            .replace(
              ' ',
              '-'
            )}-alarm active-alarm flex justify-center gap-2 rounded p-1 text-white dark:opacity-80 `}
        >
          <span>{handleIcon()}</span>
          {entry.alarm}
        </span>
      </div>
      <div className="col-span-2 flex flex-col justify-center text-right">
        {entry.name}
      </div>
      <div className="flex flex-col justify-center text-right">
        {entry.time}
      </div>
      <div className="flex flex-col items-end justify-center">
        {entry.status === 'resolved' ? (
          <span className="flex items-center gap-1">
            <CheckIcon
              className="dark:text-grey"
              style={{ height: '15px', opacity: '0.9' }}
            />
            <p>Done</p>
          </span>
        ) : (
          <span className="flex items-center justify-end gap-1">
            <NotificationsActiveIcon
              style={{
                height: '15px',
                opacity: '0.9',
              }}
            />
            Open
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <div className="flex items-center">
          <TagIcon style={{ fontSize: '14px' }} />
          {entryId < 10 ? `0${entryId}` : entryId}
        </div>
      </div>
    </div>
  );
}

export default AlarmBio;
