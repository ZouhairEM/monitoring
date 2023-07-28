/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';

interface ControlPanelProps {
  onSelectAlarm: (event: number) => void;
  setClickedAlarm: (event: number) => void;
}

function ControlPanel({ setClickedAlarm, onSelectAlarm }: ControlPanelProps) {
  const alarmsStore = useAlarmsStore((state) => state);
  const settingsStore = useSettingsStore((state) => state);
  const overrideSetActive = useAlarmsStore((state) => state.setActive);
  const [availableAlarmsById, setAvailableAlarmsById] = useState<number[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (alarmsStore.alarms.length !== 0) {
      const AlarmIds = alarmsStore.alarms.map((alarm) => alarm.id);
      setAvailableAlarmsById(AlarmIds);
      alarmsStore.setActualAlarms(AlarmIds);
    }
  }, [alarmsStore.alarms, alarmsStore.setActualAlarms]);

  const closeAlarmSelection = (activeAlarmID: number) => {
    sessionStorage.setItem('alarms', alarmsStore.alarms.length.toString());
    alarmsStore.closeAlarm(activeAlarmID);
    onSelectAlarm(activeAlarmID);
    settingsStore.setIndex(0);
    settingsStore.resetTimer();
    settingsStore.setToast(false);
    setTimeout(() => settingsStore.setToast(true), 0);

    setAvailableAlarmsById((prevAvailableAlarmsById) => {
      const availableAlarms = prevAvailableAlarmsById.filter(
        (alarmId) => +alarmId !== +activeAlarmID
      );
      return [...availableAlarms];
    });
  };

  const shuffleAlarm = (direction: string) => {
    let current = 1;
    let conditionalIndex = 1;
    let closestElement: number | undefined;
    settingsStore.setLegalClick(true);

    if (direction === 'prev') {
      current = alarmsStore.activeAlarm - 1;
      [closestElement] = availableAlarmsById
        .filter((element) => element < current)
        .sort((a, b) => b - a);
      alarmsStore.setPrevious();
      if (settingsStore.currentIndex) {
        conditionalIndex = settingsStore.currentIndex - 1;
      }
    } else if (direction === 'next') {
      current = alarmsStore.activeAlarm + 1;
      if (settingsStore.currentIndex) {
        conditionalIndex = settingsStore.currentIndex + 1;
      }
      closestElement = availableAlarmsById.find((id) => id > alarmsStore.activeAlarm + 1);
      alarmsStore.setNext();
    }

    if (closestElement && current && conditionalIndex) {
      if (availableAlarmsById.includes(current)) {
        overrideSetActive(current);
        alarmsStore.findAdjacentPatient(current);
        setClickedAlarm(current);
        settingsStore.setIndex(conditionalIndex);
      } else {
        overrideSetActive(closestElement);
        alarmsStore.findAdjacentPatient(closestElement);
        setClickedAlarm(current);
        settingsStore.setIndex(conditionalIndex);
      }
    }

    if (!closestElement && direction === 'prev') {
      overrideSetActive(1);
      alarmsStore.findAdjacentPatient(1);
      setClickedAlarm(1);
      settingsStore.setIndex(1);
    } else if (!closestElement && direction === 'next') {
      const lastAlarmIndex = availableAlarmsById?.[availableAlarmsById.length - 1];
      overrideSetActive(lastAlarmIndex);
      alarmsStore.findAdjacentPatient(lastAlarmIndex);
      setClickedAlarm(lastAlarmIndex);
      settingsStore.setIndex(lastAlarmIndex);
    }
  };

  return (
    <section className="rounded-t-lg dark:bg-black-100">
      <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey-200">
        {t('controlPanel.title')}
      </div>
      <div className="flex flex-col gap-2 rounded-t-lg p-2 py-3 text-sm sm:flex-row">
        <div className="grid grid-cols-2 justify-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => settingsStore.setModal({ status: true, name: 'followup' })}
            onKeyDown={() => settingsStore.setModal({ status: true, name: 'followup' })}
            tabIndex={0}
            className="flex items-center justify-center rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
          >
            {t('controlPanel.followUp')}
            <PriorityHighIcon style={{ height: '16px' }} />
          </button>
          <button
            type="button"
            onClick={() => closeAlarmSelection(alarmsStore.activeAlarm)}
            onKeyDown={() => closeAlarmSelection(alarmsStore.activeAlarm)}
            tabIndex={0}
            className="flex items-center justify-center rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
          >
            {t('controlPanel.closeAlarm')}
            <CloseIcon style={{ height: '16px' }} />
          </button>
        </div>

        <div className="grid grid-cols-2 justify-center gap-2 sm:flex">
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
            onClick={() => {
              if (alarmsStore.activeAlarm >= 2) {
                shuffleAlarm('prev');
              }
            }}
            onKeyDown={() => {
              if (alarmsStore.activeAlarm >= 2) {
                shuffleAlarm('prev');
              }
            }}
          >
            <p className="hidden sm:block">{t('controlPanel.previousAlarm')}</p>
            <ArrowBackIosNewIcon style={{ height: '13px' }} />
          </button>
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
            onClick={() => {
              if (
                alarmsStore.activeAlarm !== availableAlarmsById?.[availableAlarmsById.length - 1]
              ) {
                shuffleAlarm('next');
              }
            }}
            onKeyDown={() => {
              if (
                alarmsStore.activeAlarm !== availableAlarmsById?.[availableAlarmsById.length - 1]
              ) {
                shuffleAlarm('next');
              }
            }}
          >
            <ArrowForwardIosIcon style={{ height: '13px' }} />
            <p className="hidden sm:block">{t('controlPanel.nextAlarm')}</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
