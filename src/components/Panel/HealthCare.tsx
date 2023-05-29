import { useState } from 'react';
import Patient from '../../types/PatientType';

interface HealthCareInfoProps {
  healthCare: Patient['healthcare'];
}

function HealthCareInfo({ healthCare }: HealthCareInfoProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-2 px-1 text-sm">
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          onKeyDown={() => setIsCollapsed(!isCollapsed)}
          role="button"
          tabIndex={0}
          className={`${
            !isCollapsed ? 'mb-4' : ''
          } flex justify-between border-b-2 border-primary-200 py-1 text-sm font-bold text-primary-200 transition duration-200 dark:border-black-200 dark:text-white`}
        >
          Healthcare Info
          {!isCollapsed && (
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
          {isCollapsed && (
            <svg
              className="h-5 w-5"
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
          (healthCare ? (
            <>
              {Object.entries(healthCare).map(([name, value]) => (
                <div key={name} className="mb-1 grid grid-cols-2">
                  <div className="text-xs font-bold capitalize text-primary-200 transition duration-200 dark:text-white">
                    {name}
                  </div>
                  <div className="text-xs text-black-100 transition duration-200 dark:text-white">
                    {value}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="dark:text-white">No alarm has been selected</div>
          ))}
      </div>
    </div>
  );
}

export default HealthCareInfo;
