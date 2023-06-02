import { useEffect, useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../store/AlarmsStore';

interface ControlPanelProps {
  onSelectAlarm: (event: number) => void;
  setClickedAlarm: (event: number) => void;
}

function ControlPanel({ setClickedAlarm, onSelectAlarm }: ControlPanelProps) {
  const alarms = useAlarmsStore((state) => state.alarms);
  const setActualAlarms = useAlarmsStore((state) => state.setActualAlarms);
  const closeAlarm = useAlarmsStore((state) => state.closeAlarm);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const overrideActive = useAlarmsStore((state) => state.setActive);
  const setPrevious = useAlarmsStore((state) => state.setPrevious);
  const setNext = useAlarmsStore((state) => state.setNext);
  const currentIndex = useAlarmsStore((state) => state.currentIndex);
  const setIndex = useAlarmsStore((state) => state.setIndex);
  const findPatient = useAlarmsStore((state) => state.findPatient);
  const setLegalClick = useAlarmsStore((state) => state.setLegalClick);

  const [availableAlarmsById, setAvailableAlarmsById] = useState<number[]>([]);

  useEffect(() => {
    if (alarms.length !== 0) {
      const AlarmIds = alarms.map((alarm) => alarm.id);
      setAvailableAlarmsById(AlarmIds);
      setActualAlarms(AlarmIds);
    }
  }, [alarms]);

  const handleCloseAlarmSelection = (activeAlarmID: number) => {
    sessionStorage.setItem('alarms', alarms.length.toString());
    closeAlarm(activeAlarmID);
    onSelectAlarm(activeAlarmID);
    setIndex(0);
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
      // eslint-disable-next-line prefer-destructuring
      closestElement = availableAlarmsById
        .filter((element) => element < current)
        .sort((a, b) => b - a)[0];
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
      <div className="section-header bg-primary-200 p-2 text-sm font-bold text-white drop-shadow-md dark:bg-black-200">
        Control Options
      </div>
      <div className="section-header flex gap-2 p-2 py-3 text-sm">
        <button
          type="button"
          onClick={() => handleCloseAlarmSelection(activeAlarm)}
          onKeyDown={() => handleCloseAlarmSelection(activeAlarm)}
          tabIndex={0}
          className="flex items-center justify-center gap-2 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200"
        >
          Close alarm
          <CloseIcon style={{ height: '16px' }} />
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-2 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200"
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
            Previous alarm
            <ArrowBackIosNewIcon style={{ height: '16px' }} />
          </button>
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-2 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200"
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
            <ArrowForwardIosIcon style={{ height: '16px' }} />
            Next alarm
          </button>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
