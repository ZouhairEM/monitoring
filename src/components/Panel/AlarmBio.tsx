import { MutableRefObject, useRef, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HearingIcon from '@mui/icons-material/Hearing';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import AlarmEntry from '../../types/AlarmEntryType';
import useAlarmsStore from '../../store/AlarmsStore';

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
  const setIndex = useAlarmsStore((state) => state.setIndex);
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
        <svg
          version="1.0"
          className="priority"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.000000 512.000000"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M3764 4471 c-48 -12 -133 -62 -160 -94 -14 -17 -37 -53 -52 -81 l-27
      -51 0 -1685 0 -1685 27 -51 c40 -76 70 -107 140 -145 l63 -34 245 0 245 0 52
      27 c66 35 116 85 151 151 l27 52 0 1685 0 1685 -27 52 c-35 66 -85 116 -151
      150 -52 28 -53 28 -277 30 -124 1 -239 -2 -256 -6z"
            />
          </g>
        </svg>
      );
    }
    if (entry.priority === 2) {
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className="priority"
          viewBox="0 0 512.000000 512.000000"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M3764 4471 c-48 -12 -133 -62 -160 -94 -14 -17 -37 -53 -52 -81 l-27
      -51 0 -1685 0 -1685 27 -51 c40 -76 70 -107 140 -145 l63 -34 245 0 245 0 52
      27 c66 35 116 85 151 151 l27 52 0 1685 0 1685 -27 52 c-35 66 -85 116 -151
      150 -52 28 -53 28 -277 30 -124 1 -239 -2 -256 -6z"
            />
            <path
              d="M2325 3511 c-91 -23 -173 -90 -215 -176 l-25 -50 0 -1205 0 -1205 34
      -63 c38 -70 69 -100 145 -140 l51 -27 245 0 245 0 51 27 c76 40 107 70 145
      140 l34 63 0 1205 0 1205 -27 51 c-40 76 -70 107 -140 145 l-63 34 -225 2
      c-124 1 -238 -2 -255 -6z"
            />
          </g>
        </svg>
      );
    }
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        className="priority"
        viewBox="0 0 512.000000 512.000000"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M3764 4471 c-48 -12 -133 -62 -160 -94 -14 -17 -37 -53 -52 -81 l-27
      -51 0 -1685 0 -1685 27 -51 c40 -76 70 -107 140 -145 l63 -34 245 0 245 0 52
      27 c66 35 116 85 151 151 l27 52 0 1685 0 1685 -27 52 c-35 66 -85 116 -151
      150 -52 28 -53 28 -277 30 -124 1 -239 -2 -256 -6z"
          />
          <path
            d="M2325 3511 c-91 -23 -173 -90 -215 -176 l-25 -50 0 -1205 0 -1205 34
      -63 c38 -70 69 -100 145 -140 l51 -27 245 0 245 0 51 27 c76 40 107 70 145
      140 l34 63 0 1205 0 1205 -27 51 c-40 76 -70 107 -140 145 l-63 34 -225 2
      c-124 1 -238 -2 -255 -6z"
          />
          <path
            d="M884 2551 c-48 -12 -133 -62 -160 -94 -14 -17 -37 -53 -52 -81 l-27
      -51 0 -725 0 -725 27 -51 c40 -76 70 -107 140 -145 l63 -34 245 0 245 0 63 34
      c70 38 100 69 140 145 l27 51 0 725 0 725 -34 63 c-37 69 -80 109 -151 144
      -42 21 -59 23 -270 25 -124 1 -239 -2 -256 -6z"
          />
        </g>
      </svg>
    );
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
      className={`row alarm-bio grid grid-cols-12 gap-2 px-4 py-2 text-sm hover:bg-primary-100 dark:bg-black-100 dark:text-grey ${
        entry.id === activeAlarm && !disabled ? 'active' : ''
      }`}
    >
      <div className="flex gap-6">
        <div>#{entryId < 10 ? `0${entryId}` : entryId}</div>
        <input
          type="checkbox"
          ref={inputRef}
          className="accent-primary-200 focus:accent-primary-200 dark:accent-black-200 dark:focus:accent-black-200"
          checked={entry.id === activeAlarm && !disabled}
          readOnly
        />
      </div>
      <div className="flex justify-end px-1">
        <div className="flex w-4 items-center justify-center">
          {handlePriority()}
        </div>
      </div>
      <div className="col-span-3 text-right text-sm flex justify-end">
        <span
          className={`${entry.alarm
            .toLowerCase()
            .replace(
              ' ',
              '-'
            )}-alarm flex justify-end w-4/6 active-alarm rounded p-1 text-white dark:bg-black-200 dark:text-grey`}
        >
          <span>{handleIcon()}</span>
          {entry.alarm}
        </span>
      </div>
      <div className="col-span-3 text-right">{entry.name}</div>
      <div className="text-right">{entry.time}</div>
      <div className="col-span-2">
        {entry.status === 'resolved' ? (
          <span className="flex items-center justify-end gap-1">
            <CheckCircleIcon
              className="dark:text-grey"
              style={{ height: '15px', opacity: '0.9' }}
            />
            Resolved
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
      <div className="text-right">#{entry.room}</div>
    </div>
  );
}

export default AlarmBio;
