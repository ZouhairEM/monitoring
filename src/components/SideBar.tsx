import { useState } from 'react';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CameraIcon from '@mui/icons-material/Camera';

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <section className="bg-primary flex h-full flex-col justify-between pb-2 text-sm font-semibold text-white">
      <div>
        <div className="mb-3 flex items-center gap-x-2 rounded-t-lg bg-primary-300 px-4 pb-1 pt-2">
          <CameraIcon />
          {isCollapsed && <div>Monitoring</div>}
        </div>
        <div className="mb-3 flex items-center gap-x-2 px-4 py-1">
          <Grid3x3Icon />
          {isCollapsed && <div>Dashboard</div>}
        </div>
        <div className="flex items-center gap-x-2 px-4 py-1">
          <HistoryToggleOffIcon />
          {isCollapsed && <div>History</div>}
        </div>
      </div>
      <div
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        onKeyDown={() => setIsCollapsed(!isCollapsed)}
        role="button"
        tabIndex={0}
        className={`flex ${
          isCollapsed ? 'justify-end px-2' : 'justify-center'
        }`}
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
      </div>
    </section>
  );
}

export default SideBar;
