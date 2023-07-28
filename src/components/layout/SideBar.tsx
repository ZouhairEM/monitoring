import { useEffect, useState } from 'react';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import useBreakpoint from '../../hooks/useBreakpoint';

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (breakpoint === 'lg') {
      setIsCollapsed(false);
    }
  }, [breakpoint]);

  return (
    <aside className="mb-2 rounded-b-lg rounded-t-lg bg-primary-200 py-[1px] dark:bg-black-100 sm:mb-0 lg:block">
      <div className="flex h-full flex-col justify-between pb-0 text-sm font-semibold text-white md:pb-2">
        <div className="flex justify-evenly md:flex-col">
          <Link to="/">
            <button
              type="button"
              tabIndex={0}
              className="mb-0 flex items-center gap-x-2 rounded-t-lg px-4 pb-1 pt-1 text-left dark:bg-black-100 md:mb-3 md:pt-2"
            >
              <VisibilityIcon
                className={`dark:text-grey ${
                  pathname === '/' ? 'text-black-300 dark:text-primary-200' : ''
                }`}
              />
              {isCollapsed && (
                <div
                  className={`hidden ${
                    pathname === '/' ? 'text-black-300 dark:text-primary-200' : ''
                  } dark:text-grey md:block`}
                >
                  {t('sidebar.monitoring')}
                </div>
              )}
            </button>
          </Link>
          <Link to="/dashboard">
            <button
              type="button"
              tabIndex={0}
              className="mb-0 flex items-center gap-x-2 px-4 py-1 text-left md:mb-3"
            >
              <Grid3x3Icon
                className={`dark:text-grey ${
                  pathname === '/dashboard' ? 'text-black-300 dark:text-primary-200' : ''
                }`}
              />
              {isCollapsed && (
                <div
                  className={`dark:text-grey hidden ${
                    pathname === '/dashboard' ? 'text-black-300 dark:text-primary-200' : ''
                  }  md:block`}
                >
                  {t('sidebar.dashboard')}
                </div>
              )}
            </button>
          </Link>
          <Link to="/patients">
            <button
              className="flex items-center gap-x-2 px-4 py-1 text-left"
              type="button"
              tabIndex={0}
            >
              <PeopleIcon
                className={`dark:text-grey ${
                  pathname === '/patients' ? 'text-black-300 dark:text-primary-200' : ''
                }`}
              />
              {isCollapsed && (
                <div
                  className={`dark:text-grey hidden ${
                    pathname === '/patients' ? 'text-black-300 dark:text-primary-200' : ''
                  }  md:block`}
                >
                  {t('sidebar.patients')}
                </div>
              )}
            </button>
          </Link>
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
          {isCollapsed && <div className="dark:text-grey">{t('sidebar.collapse')}</div>}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
