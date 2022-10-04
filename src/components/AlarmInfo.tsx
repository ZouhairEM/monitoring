import AlarmInfoType from '../types/AlarmInfoType';

interface Props {
  alarm: AlarmInfoType;
}

function AlarmInfo({ alarm }: Props) {
  return (
    <div>
      <div className="text-sm px-1">
        <div className="flex justify-between text-green dark:text-white transition duration-200 font-extrabold uppercase text-sm border-b-2 py-1 mb-2 border-green">
          Alarm info
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {Object.entries(alarm).map((el) => (
          <div key={el[0]} className="grid grid-cols-2 mb-1">
            <div className="text-green dark:text-white font-extrabold uppercase text-xs transition duration-200">
              {el[0]}
            </div>
            <div className="text-black-100 dark:text-white text-xs transition duration-200">
              {el[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlarmInfo;
