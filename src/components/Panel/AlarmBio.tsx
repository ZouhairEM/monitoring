import { MutableRefObject, useRef, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HearingIcon from '@mui/icons-material/Hearing';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import AlarmEntry from '../../types/AlarmEntryType';
import useAlarmsStore from '../../store/AlarmsStore';

interface IProps {
  entry: AlarmEntry;
  onToggle: (event: number) => void;
}

function AlarmBio({ entry, onToggle }: IProps) {
  const [disabled, setDisabled] = useState(false);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const findPatient = useAlarmsStore((state) => state.findPatient);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const setActive = useAlarmsStore((state) => state.setActive);
  const makeActivePatient = (id: number) => {
    if (id !== activeAlarm) {
      onToggle(id);
      findPatient(id);
      setActive(id);
    } else {
      setDisabled(true);
    }
  };

  const handleClass = (alarm: string) => {
    return alarm.toLowerCase().replace(' ', '-');
  };

  const handleIcon = () => {
    if (entry.alarm === 'Acoustic') {
      return <HearingIcon style={{ height: '15px' }} />;
    }
    if (entry.alarm === 'Fire') {
      return <LocalFireDepartmentIcon style={{ height: '15px' }} />;
    }
    if (entry.alarm === 'Faulty Sensor') {
      return <BrokenImageIcon style={{ height: '15px' }} />;
    }
    if (entry.alarm === 'Patient up') {
      return <RunCircleIcon style={{ height: '15px' }} />;
    }
    return <HearingIcon />;
  };

  return (
    <div
      onClick={() => makeActivePatient(entry.patient_id)}
      onKeyDown={() => makeActivePatient(entry.patient_id)}
      role="button"
      tabIndex={0}
      className={`grid grid-cols-12 p-2 py-3 hover:bg-green hover:text-white text-sm ${
        entry.id === activeAlarm && !disabled ? 'active' : ''
      }`}
    >
      <div>
        <input
          type="checkbox"
          ref={inputRef}
          className="accent-green focus:accent-green dark:accent-black-200 dark:focus:accent-black-200"
          checked={entry.id === activeAlarm && !disabled}
          readOnly
        />
      </div>
      <div className="col-span-1 text-right">
        <div>{entry.level}</div>
      </div>
      <div className="col-span-2 text-right text-sm">
        <span
          className={`${handleClass(
            entry.alarm
          )}-alarm p-1 text-white dark:bg-black-200 dark:text-white rounded`}
        >
          <span>{handleIcon()}</span>
          {entry.alarm}
        </span>
      </div>
      <div className="col-span-2 text-right">{entry.patient_name}</div>
      <div className="col-span-2 text-right">{entry.time}</div>
      <div className="col-span-2">
        {entry.status ? (
          <span className="flex gap-1 justify-end items-center">
            <CheckCircleIcon style={{ height: '15px', opacity: '0.9' }} />
            Resolved
          </span>
        ) : (
          <span className="flex gap-1 justify-end items-center">
            <NotificationsActiveIcon
              style={{ height: '15px', opacity: '0.9' }}
            />
            Open
          </span>
        )}
      </div>
      <div className="col-span-2 text-right">{entry.room}</div>
    </div>
  );
}

export default AlarmBio;
