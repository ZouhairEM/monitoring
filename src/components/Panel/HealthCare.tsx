import { useState } from 'react';
import HealthCareType from '../../types/HealthCareType';

interface Props {
  healthCare: HealthCareType;
}

function HealthCareInfo({ healthCare }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <div className="text-sm px-1">
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          onKeyDown={() => setIsCollapsed(!isCollapsed)}
          role="button"
          tabIndex={0}
          className="flex justify-between text-green dark:text-white transition duration-200 font-extrabold uppercase text-sm border-b-2 py-1 mb-2 border-green dark:border-black-200"
        >
          Healthcare plan
          {!isCollapsed && (
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
          )}
          {isCollapsed && (
            <svg
              className="w-5 h-5"
              fill="none"
              role="button"
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
          Object.values(healthCare).map((el) => (
            <div key={el} className="mb-1">
              <div className="text-black-100 dark:text-white text-xs transition duration-200">
                {el}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HealthCareInfo;
