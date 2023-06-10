import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';

interface ControlPanelProps {
  onSelectAlarm: (event: number) => void;
  setClickedAlarm: (event: number) => void;
}

function ControlPanel({ setClickedAlarm, onSelectAlarm }: ControlPanelProps) {
  const alarms = useAlarmsStore((state) => state.alarms);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const currentIndex = useSettingsStore((state) => state.currentIndex);
  const setActualAlarms = useAlarmsStore((state) => state.setActualAlarms);
  const closeAlarm = useAlarmsStore((state) => state.closeAlarm);
  const overrideActive = useAlarmsStore((state) => state.setActive);
  const setPrevious = useAlarmsStore((state) => state.setPrevious);
  const setNext = useAlarmsStore((state) => state.setNext);
  const setIndex = useSettingsStore((state) => state.setIndex);
  const findPatient = useAlarmsStore((state) => state.findPatient);
  const setLegalClick = useSettingsStore((state) => state.setLegalClick);
  const setToast = useSettingsStore((state) => state.setToast);
  const [availableAlarmsById, setAvailableAlarmsById] = useState<number[]>([]);
  const timer = useSettingsStore((state) => state.resetTimer);

  useEffect(() => {
    if (alarms.length !== 0) {
      const AlarmIds = alarms.map((alarm) => alarm.id);
      setAvailableAlarmsById(AlarmIds);
      setActualAlarms(AlarmIds);
    }
  }, [alarms, setActualAlarms]);

  const handleCloseAlarmSelection = (activeAlarmID: number) => {
    sessionStorage.setItem('alarms', alarms.length.toString());
    closeAlarm(activeAlarmID);
    onSelectAlarm(activeAlarmID);
    setIndex(0);
    timer();
    setToast(false);
    setTimeout(() => setToast(true), 0);

    setAvailableAlarmsById((prevAvailableAlarmsById) => {
      const availableAlarms = prevAvailableAlarmsById.filter(
        (alarmId) => +alarmId !== +activeAlarmID
      );
      return [...availableAlarms];
    });
  };

  const handleAlarmShuffle = (direction: string) => {
    let current = 1;
    let conditionalIndex = 1;
    let closestElement: number | undefined;
    setLegalClick(true);

    if (direction === 'prev') {
      current = activeAlarm - 1;
      [closestElement] = availableAlarmsById
        .filter((element) => element < current)
        .sort((a, b) => b - a);
      setPrevious();
      if (currentIndex) {
        conditionalIndex = currentIndex - 1;
      }
    } else if (direction === 'next') {
      current = activeAlarm + 1;
      if (currentIndex) {
        conditionalIndex = currentIndex + 1;
      }
      closestElement = availableAlarmsById.find((id) => id > activeAlarm + 1);
      setNext();
    }

    if (closestElement && current && conditionalIndex) {
      if (availableAlarmsById.includes(current)) {
        overrideActive(current);
        findPatient(current);
        setClickedAlarm(current);
        setIndex(conditionalIndex);
      } else {
        overrideActive(closestElement);
        findPatient(closestElement);
        setClickedAlarm(current);
        setIndex(conditionalIndex);
      }
    }
  };

  return (
    <section className="section-header dark:bg-black-100">
      <div className="section-header box-shadow-md bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
        Control Options
      </div>
      <div className="section-header flex flex-col gap-2 p-2 py-3 text-sm sm:flex-row">
        <button
          type="button"
          onClick={() => handleCloseAlarmSelection(activeAlarm)}
          onKeyDown={() => handleCloseAlarmSelection(activeAlarm)}
          tabIndex={0}
          className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
        >
          Close
          <CloseIcon style={{ height: '16px' }} />
        </button>
        <div className="grid grid-cols-2 justify-center gap-2 sm:flex">
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
            onClick={() => {
              if (activeAlarm >= 2) {
                handleAlarmShuffle('prev');
              }
            }}
            onKeyDown={() => {
              if (activeAlarm >= 2) {
                handleAlarmShuffle('prev');
              }
            }}
          >
            Previous
            <ArrowBackIosNewIcon style={{ height: '13px' }} />
          </button>
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
            onClick={() => {
              if (
                activeAlarm !==
                availableAlarmsById?.[availableAlarmsById.length - 1]
              ) {
                handleAlarmShuffle('next');
              }
            }}
            onKeyDown={() => {
              if (
                activeAlarm !==
                availableAlarmsById?.[availableAlarmsById.length - 1]
              ) {
                handleAlarmShuffle('next');
              }
            }}
          >
            <ArrowForwardIosIcon style={{ height: '13px' }} />
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
