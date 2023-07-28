/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { t } from 'i18next';
import AlarmEntryType from '../types/AlarmEntryType';
import useAlarmsStore from '../stores/AlarmsStore';
import AlarmTypes from '../data/alarmtypes';

function GenerateAlarms() {
  const alarms: AlarmEntryType[] = useAlarmsStore((state) => state.alarms);
  const setReactiveAlarms = useAlarmsStore((state) => state.setReactiveAlarms);

  class RandomAlarmGenerator implements AlarmEntryType {
    id: number;
    patient_id: number;
    alarm: string;
    time: string;
    status: string;

    constructor(id: number, patient_id: number, alarm: string, time: string, status: string) {
      this.id = id;
      this.patient_id = patient_id;
      this.alarm = alarm;
      this.time = time;
      this.status = status;
    }
  }

  const availablePatientIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const availableStatuses = [t('availableStatus.open'), t('availableStatus.done')];
  const availableAlarmTypes = Object.values(AlarmTypes);

  const generatePatientID = (): number =>
    availablePatientIDs[Math.floor(Math.random() * availablePatientIDs.length)];
  const generateHighestAlarmID = (): number => Math.max(...alarms.map((alarm) => alarm.id), 0) + 1;
  const generateAlarmType = (): string =>
    availableAlarmTypes[Math.floor(Math.random() * availableAlarmTypes.length)];
  const generateStatus = (): string =>
    availableStatuses[Math.floor(Math.random() * availableStatuses.length)];
  const timeStamp = new Date().toLocaleTimeString().replace(/:\d+ /, ' ');

  useEffect(() => {
    const interval = setInterval(() => {
      const generateAlarm: AlarmEntryType = new RandomAlarmGenerator(
        generateHighestAlarmID(),
        generatePatientID(),
        generateAlarmType(),
        timeStamp,
        generateStatus()
      );
      if (alarms?.length < 100) {
        setReactiveAlarms(generateAlarm);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [
    RandomAlarmGenerator,
    generateAlarmType,
    generateHighestAlarmID,
    generatePatientID,
    generateStatus,
    setReactiveAlarms,
    timeStamp,
  ]);
}

export default GenerateAlarms;
