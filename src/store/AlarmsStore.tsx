import create from 'zustand';

type Alarm = {
  id: number;
  level: number;
  alarm: string;
  patient: string;
  time: string;
  status: boolean;
  room: string;
};

interface AlarmState {
  alarms: Alarm[];
  closeAlarm: (id: number) => void;
}

const useAlarmsStore = create<AlarmState>((set) => ({
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
    {
      id: 5,
      level: 1,
      alarm: 'Acoustic',
      patient: 'Cercei Lanister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 6,
      level: 2,
      alarm: 'Fire',
      patient: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 7,
      level: 2,
      alarm: 'Faulty Sensor',
      patient: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 8,
      level: 3,
      alarm: 'Patient up',
      patient: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 9,
      level: 1,
      alarm: 'Acoustic',
      patient: 'Jaime Lanister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 10,
      level: 2,
      alarm: 'Fire',
      patient: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 11,
      level: 2,
      alarm: 'Faulty Sensor',
      patient: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 12,
      level: 3,
      alarm: 'Patient up',
      patient: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 13,
      level: 1,
      alarm: 'Acoustic',
      patient: 'Jaime Lanister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 14,
      level: 2,
      alarm: 'Fire',
      patient: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 15,
      level: 2,
      alarm: 'Faulty Sensor',
      patient: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 16,
      level: 3,
      alarm: 'Patient up',
      patient: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 17,
      level: 2,
      alarm: 'Fire',
      patient: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 18,
      level: 2,
      alarm: 'Faulty Sensor',
      patient: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 19,
      level: 3,
      alarm: 'Patient up',
      patient: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
  ],
  closeAlarm: (id: number) =>
    set((state: AlarmState) => ({
      alarms: state.alarms.filter((alarm: Alarm) => alarm.id !== id),
    })),
}));

export default useAlarmsStore;
