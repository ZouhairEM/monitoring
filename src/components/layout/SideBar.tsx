import { useState } from 'react';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CameraIcon from '@mui/icons-material/Camera';

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <aside className="section-header section-footer sidebar hidden bg-primary-200 dark:bg-black-100 lg:block">
      <div className="bg-primary flex h-full flex-col justify-between pb-2 text-sm font-semibold text-white">
        <div>
          <button
            type="button"
            tabIndex={0}
            className="mb-3 flex items-center gap-x-2 rounded-t-lg bg-primary-300 px-4 pb-1 pt-2 dark:bg-black-100"
          >
            <CameraIcon />
            {isCollapsed && <div className="dark:text-grey">Monitoring</div>}
          </button>
          <button
            type="button"
            tabIndex={0}
            className="mb-3 flex items-center gap-x-2 px-4 py-1"
          >
            <Grid3x3Icon className="dark:text-grey" />
            {isCollapsed && <div className="dark:text-grey">Dashboard</div>}
          </button>
          <button
            className="flex items-center gap-x-2 px-4 py-1"
            type="button"
            tabIndex={0}
          >
            <HistoryToggleOffIcon className="dark:text-grey" />
            {isCollapsed && <div className="dark:text-grey">History</div>}
          </button>
        </div>
        <div
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          onKeyDown={() => setIsCollapsed(!isCollapsed)}
          role="button"
          tabIndex={0}
          className="flex items-center justify-start gap-x-2 rounded-t-lg  px-4 pb-1 pt-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!isCollapsed && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            )}
            {isCollapsed && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            )}
          </svg>
          {isCollapsed && <div className=" dark:text-grey">Collapse</div>}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
