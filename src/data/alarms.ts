import AlarmEntryType from '../types/AlarmEntryType';
import AlarmTypes from './alarmtypes';

const currentTime = new Date().toLocaleTimeString().replace(/:\d+ /, ' ');
const Alarms: AlarmEntryType[] = [
  {
    id: 1,
    patient_id: 1,
    alarm: AlarmTypes.Two,
    time: currentTime,
    status: 'Done',
  },
  {
    id: 2,
    patient_id: 2,
    alarm: AlarmTypes.Five,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 3,
    patient_id: 3,
    alarm: AlarmTypes.Three,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 4,
    patient_id: 4,
    alarm: AlarmTypes.One,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 5,
    patient_id: 5,
    alarm: AlarmTypes.Four,
    time: currentTime,
    status: 'Done',
  },
  {
    id: 6,
    patient_id: 6,
    alarm: AlarmTypes.Two,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 7,
    patient_id: 7,
    alarm: AlarmTypes.Three,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 8,
    patient_id: 8,
    alarm: AlarmTypes.One,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 9,
    patient_id: 9,
    alarm: AlarmTypes.Four,
    time: currentTime,
    status: 'Done',
  },
  {
    id: 10,
    patient_id: 10,
    alarm: AlarmTypes.Five,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 11,
    patient_id: 11,
    alarm: AlarmTypes.Three,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 12,
    patient_id: 12,
    alarm: AlarmTypes.One,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 13,
    patient_id: 13,
    alarm: AlarmTypes.Two,
    time: currentTime,
    status: 'Done',
  },
  {
    id: 14,
    patient_id: 14,
    alarm: AlarmTypes.Five,
    time: currentTime,
    status: 'Open',
  },
  {
    id: 15,
    patient_id: 13,
    alarm: AlarmTypes.Two,
    time: currentTime,
    status: 'Done',
  },
  {
    id: 16,
    patient_id: 14,
    alarm: AlarmTypes.Five,
    time: currentTime,
    status: 'Open',
  },
];

export default Alarms;
