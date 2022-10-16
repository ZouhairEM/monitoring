import { MutableRefObject, useRef, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HearingIcon from '@mui/icons-material/Hearing';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import AlarmEntry from '../../types/AlarmEntryType';
import useAlarmsStore from '../../store/AlarmsStore';

interface Props {
  entry: AlarmEntry;
  onToggle: (event: number) => void;
}

function AlarmBio({ entry, onToggle }: Props) {
  const [active, setActive] = useState(Number);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const findPatient = useAlarmsStore((state) => state.findPatient);

  const makeActivePatient = (id: number) => {
    onToggle(id);
    setActive(id);
    findPatient(id);
    inputRef.current.checked = true;
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
        active
          ? ' odd:bg-darkGreen even:bg-darkGreen dark:odd:bg-darkGreen dark:even:bg-darkGreen text-white'
          : 'dark:bg-black-100 transition duration-200 dark:text-white odd:bg-lightGreen dark:odd:bg-black-200'
      }`}
    >
      <div>
        <input
          type="checkbox"
          ref={inputRef}
          className="accent-green focus:accent-green dark:accent-black-200 dark:focus:accent-black-200"
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
