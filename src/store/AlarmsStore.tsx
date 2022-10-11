import create from 'zustand';

type Alarm = {
  id: number;
  level: number;
  alarm: string;
  patient: string;
  time: string;
  status: boolean;
  room: string;
  // filter/*  */(arg0: (alarm: AlarmState) => boolean): Alarm | undefined;
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
  ],
  closeAlarm: (id: number) =>
    set((state: AlarmState) => ({
      alarms: state.alarms.filter((alarm: Alarm) => alarm.id !== id),
    })),
}));

export default useAlarmsStore;
