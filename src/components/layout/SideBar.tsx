import { useState } from 'react';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className="sidebar mb-2 rounded-b-lg rounded-t-lg bg-primary-200 dark:bg-black-100 sm:mb-0 lg:block">
      <div className="bg-primary flex h-full flex-col justify-between pb-0 text-sm font-semibold text-white md:pb-2">
        <div className="flex justify-evenly md:flex-col">
          <button
            type="button"
            tabIndex={0}
            className="mb-0 flex items-center gap-x-2 rounded-t-lg px-4 pb-1 pt-2 dark:bg-black-100 md:mb-3"
          >
            <VisibilityIcon className="text-primary-300 dark:text-grey" />
            {isCollapsed && (
              <div className="hidden text-primary-300 dark:text-grey md:block">
                Monitoring
              </div>
            )}
          </button>
          <button
            type="button"
            tabIndex={0}
            className="mb-0 flex items-center gap-x-2 px-4 py-1 md:mb-3"
          >
            <Grid3x3Icon className="dark:text-grey" />
            {isCollapsed && (
              <div className="hidden dark:text-grey md:block">Dashboard</div>
            )}
          </button>
          <button
            className="flex items-center gap-x-2 px-4 py-1"
            type="button"
            tabIndex={0}
          >
            <HistoryToggleOffIcon className="dark:text-grey" />
            {isCollapsed && (
              <div className="hidden dark:text-grey md:block">History</div>
            )}
          </button>
        </div>
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          onKeyDown={() => setIsCollapsed(!isCollapsed)}
          role="button"
          tabIndex={0}
          className="hidden items-center justify-start gap-x-2 rounded-t-lg px-4 pb-1 pt-2 md:flex"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!isCollapsed ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            )}
          </svg>
          {isCollapsed && <div className="dark:text-grey">Collapse</div>}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;