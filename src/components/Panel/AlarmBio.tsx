import AlarmEntry from '../../types/AlarmEntryType';

interface Props {
  entry: AlarmEntry;
}

function AlarmBio({ entry }: Props) {
  return (
    <div className="grid grid-cols-12 mx-2 p-1 dark:bg-black-100 transition duration-200 dark:text-white odd:bg-lightGreen dark:odd:bg-black-300 hover:bg-green hover:text-white text-sm">
      <div>
        <input
          type="checkbox"
          className="accent-green focus:accent-green dark:accent-black-200 dark:focus:accent-black-200"
        />
      </div>
      <div className="col-span-1 text-right">
        <div>{entry.level}</div>
      </div>
      <div className="col-span-2 text-right">
        <span className="bg-green px-5 text-white dark:bg-black-200 dark:text-white rounded">
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
