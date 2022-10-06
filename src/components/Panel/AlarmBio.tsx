import HearingIcon from '@mui/icons-material/Hearing';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import AlarmEntry from '../../types/AlarmEntryType';

interface Props {
  entry: AlarmEntry;
}

function AlarmBio({ entry }: Props) {
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
    <div className="grid grid-cols-12 mx-2 p-2 dark:bg-black-100 transition duration-200 dark:text-white odd:bg-lightGreen dark:odd:bg-black-300 hover:bg-green hover:text-white text-sm">
      <div>
        <input
          type="checkbox"
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
      <div className="col-span-2 text-right">{entry.patient}</div>
      <div className="col-span-2 text-right">{entry.time}</div>
      <div className="col-span-2 text-right">
        {entry.status ? 'resolved' : 'open'}
      </div>
      <div className="col-span-2 text-right">{entry.room}</div>
    </div>
  );
}

export default AlarmBio;
