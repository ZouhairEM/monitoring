import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  useEffect(() => {
    let timeOut: NodeJS.Timeout;

    if (timer) {
      timeOut = setTimeout(() => setToast(false), 7500);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [timer, setToast]);

  return (
    <div
      className={`${
        toast ? 'toast' : ''
      } fixed inset-x-0 bottom-12 z-20 mx-auto w-2/3 rounded border border-grey-200 bg-primary-200 p-4 text-white shadow-2xl dark:bg-primary-300 dark:text-grey-200 sm:w-3/5 md:inset-x-auto md:right-16 md:mx-0 md:w-auto`}
    >
      <div className="relative flex gap-3">
        {renderTypeIcon(icon)}
        <div className="flex w-10/12 flex-col gap-1">
          <div>{children}</div>
          <p className="flex gap-1 text-center">
            <span>{t('toast.didntMeanTo')}</span>
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
              <span className="font-bold underline">{t('toast.undo')}</span>
            </span>
          </p>
        </div>
        <CloseIcon
          role="button"
          tabIndex={0}
          onClick={() => setToast(false)}
          onKeyDown={() => setToast(false)}
          className="absolute right-0 top-0 cursor-pointer rounded-full bg-primary-300 p-1 dark:bg-primary-200 dark:text-white"
        />
      </div>
    </div>
  );
}

export default Toast;
