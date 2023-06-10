import { useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import useSettingsStore from '../../stores/SettingsStore';
import useAlarmsStore from '../../stores/AlarmsStore';

interface ToastProps {
  children: React.ReactNode;
  icon: string;
  timer: boolean;
}

const renderTypeIcon = (icon: string) => {
  if (icon === 'close') {
    return <InfoIcon />;
  }
  return <CheckIcon />;
};

function Toast({ children, icon, timer }: ToastProps) {
  const toast = useSettingsStore((state) => state.toast);
  const setToast = useSettingsStore((state) => state.setToast);
  const setUndo = useAlarmsStore((state) => state.setUndo);

  useEffect(() => {
    let timeOut: NodeJS.Timeout;

    if (timer) {
      timeOut = setTimeout(() => setToast(false), 5000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [timer, setToast]);

  return (
    <div
      className={`${
        toast ? 'toast' : ''
      } fixed bottom-12 right-16 z-20 rounded  border border-grey bg-primary-200 p-5 text-white shadow-2xl dark:bg-primary-300 dark:text-grey`}
    >
      <div className="flex gap-4">
        {renderTypeIcon(icon)}
        <div className="flex flex-col gap-2">
          <div>{children}</div>
          <p className="flex gap-2 text-center">
            Didn&apos;t mean to?
            <span>-</span>
            <span
              tabIndex={0}
              role="button"
              onClick={() => {
                setToast(false);
                return setUndo();
              }}
              onKeyDown={() => {
                setToast(false);
                return setUndo();
              }}
            >
              <b>Undo</b>
            </span>
          </p>
        </div>
        <CloseIcon
          role="button"
          tabIndex={0}
          onClick={() => setToast(false)}
          onKeyDown={() => setToast(false)}
          className="cursor-pointer dark:text-white"
        />
      </div>
    </div>
  );
}

export default Toast;
