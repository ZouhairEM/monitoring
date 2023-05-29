import { useState } from 'react';
import AlarmInfoType from '../../types/AlarmInfoType';

interface AlarmInfoProps {
  alarm: AlarmInfoType;
}

function AlarmInfo({ alarm }: AlarmInfoProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <div className="px-1 text-sm">
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          onKeyDown={() => setIsCollapsed(!isCollapsed)}
          role="button"
          tabIndex={0}
          className="mb-2 flex justify-between border-b-2 border-primary-200 py-1 text-sm font-bold uppercase text-primary-200 transition duration-200 dark:border-black-200 dark:text-white"
        >
          Alarm info
          {alarm && !isCollapsed && (
            <svg
              className="h-5 w-5"
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
          )}
          {alarm && isCollapsed && (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          )}
        </div>

        {isCollapsed &&
          alarm &&
          Object.entries(alarm).map(([name, value]) => (
            <div key={name} className="mb-1 grid grid-cols-2">
              <div className="text-xs font-bold uppercase text-primary-200 transition duration-200 dark:text-white">
                {name}
              </div>
              <div className="text-xs text-black-100 transition duration-200 dark:text-white">
                {value}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AlarmInfo;
