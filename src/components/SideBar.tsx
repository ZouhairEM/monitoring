import { useState } from 'react';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CameraIcon from '@mui/icons-material/Camera';

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <section className="flex justify-between flex-col py-2 px-4 font-semibold text-white text-sm h-full bg-primary">
      <div>
        <div className="flex items-center gap-x-2 mb-4">
          <CameraIcon />
          {isCollapsed && <div>Monitoring</div>}
        </div>
        <div className="flex items-center gap-x-2 mb-4">
          <Grid3x3Icon />
          {isCollapsed && <div>Dashboard</div>}
        </div>
        <div className="flex items-center gap-x-2">
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
        className="flex justify-end items-end"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isCollapsed && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          )}
          {!isCollapsed && (
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
