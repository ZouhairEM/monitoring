import create from 'zustand';
// import AlarmType from '../types/AlarmEntryType';

const useAlarmsStore = create((set) => ({
  alarms: [
    {
      id: 1,
      level: 1,
      alarm: 'Acoustic',
      patient: 'Jaime Lanister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 2,
      level: 2,
      alarm: 'Fire',
      patient: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 3,
      level: 2,
      alarm: 'Faulty Sensor',
      patient: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 4,
      level: 3,
      alarm: 'Patient up',
      patient: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
  ],
  closeAlarm: (id) =>
    set((state) => ({
      alarms: state.alarms.filter((alarm) => alarm.id !== id),
    })),
}));

export default useAlarmsStore;
