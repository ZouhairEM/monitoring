import create from 'zustand';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import patients from '../data/patients';
import AlarmEntryType from '../types/AlarmEntryType';
import Patient from '../types/PatientType';

interface AlarmState {
  activeAlarm: number;
  setActive: (by: number) => void;
  setPrevious: () => void;
  setNext: () => void;
  correspondingPatient: null | object;
  patients: Patient[];
  alarms: AlarmEntryType[];
  findPatient: (id: number) => void;
  closeAlarm: (id: number) => void;
  sortByField: (id: string) => void;
  clickedAlarm: any;
}

const useAlarmsStore = create<AlarmState>((set) => ({
  activeAlarm: 0,
  setActive: (id) => set(() => ({ activeAlarm: id })),
  clickedAlarm: null,
  setPrevious: () =>
    set((state) => ({
      activeAlarm: state.activeAlarm - 1,
    })),
  setNext: () =>
    set((state) => ({
      activeAlarm: state.activeAlarm + 1,
    })),
  correspondingPatient: null,
  alarms: [
    {
      id: 1,
      patient_id: 1,
      priority: 1,
      alarm: 'Acoustic',
      name: 'Tyrion Lannister',
      time: '12:01',
      status: 'resolved',
      room: '21',
    },
    {
      id: 2,
      patient_id: 2,
      priority: 2,
      alarm: 'Fire',
      name: 'Danaerys Targaryan',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 3,
      patient_id: 3,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Jon Snow',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 4,
      patient_id: 4,
      priority: 3,
      alarm: 'Patient up',
      name: 'Eddard Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
    {
      id: 5,
      patient_id: 5,
      priority: 1,
      alarm: 'Acoustic',
      name: 'Cercei Lanister',
      time: '12:01',
      status: 'resolved',
      room: '21',
    },
    {
      id: 6,
      patient_id: 6,
      priority: 2,
      alarm: 'Fire',
      name: 'Tywin Lannister',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 7,
      patient_id: 7,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Samwell Tarly',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 8,
      patient_id: 8,
      priority: 3,
      alarm: 'Patient up',
      name: 'Catelyn Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
    {
      id: 9,
      patient_id: 9,
      priority: 1,
      alarm: 'Acoustic',
      name: 'Brandon Stark',
      time: '12:01',
      status: 'resolved',
      room: '21',
    },
    {
      id: 10,
      patient_id: 10,
      priority: 2,
      alarm: 'Fire',
      name: 'Viserys Targaryan',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 11,
      patient_id: 11,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Khal Drogo',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 12,
      patient_id: 12,
      priority: 3,
      alarm: 'Patient up',
      name: 'Sansa Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
    {
      id: 13,
      patient_id: 13,
      priority: 1,
      alarm: 'Acoustic',
      name: 'Stannis Baratheon',
      time: '12:01',
      status: 'resolved',
      room: '21',
    },
    {
      id: 14,
      patient_id: 2,
      priority: 2,
      alarm: 'Fire',
      name: 'Danaerys Targaryan',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 15,
      patient_id: 3,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Jon Snow',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 16,
      patient_id: 4,
      priority: 3,
      alarm: 'Patient up',
      name: 'Eddard Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
    {
      id: 17,
      patient_id: 14,
      priority: 2,
      alarm: 'Fire',
      name: 'Robb Stark',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 18,
      patient_id: 3,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Jon Snow',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 19,
      patient_id: 4,
      priority: 3,
      alarm: 'Patient up',
      name: 'Eddard Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
    {
      id: 21,
      patient_id: 1,
      priority: 1,
      alarm: 'Acoustic',
      name: 'Tyrion Lannister',
      time: '12:01',
      status: 'resolved',
      room: '21',
    },
    {
      id: 22,
      patient_id: 2,
      priority: 2,
      alarm: 'Fire',
      name: 'Danaerys Targaryan',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 23,
      patient_id: 11,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Khal Drogo',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 24,
      patient_id: 4,
      priority: 3,
      alarm: 'Patient up',
      name: 'Eddard Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
    {
      id: 25,
      patient_id: 5,
      priority: 1,
      alarm: 'Acoustic',
      name: 'Cercei Lanister',
      time: '12:01',
      status: 'resolved',
      room: '21',
    },
    {
      id: 26,
      patient_id: 6,
      priority: 2,
      alarm: 'Fire',
      name: 'Tywin Lannister',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 27,
      patient_id: 7,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Samwell Tarly',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 28,
      patient_id: 8,
      priority: 3,
      alarm: 'Patient up',
      name: 'Catelyn Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
    {
      id: 29,
      patient_id: 9,
      priority: 1,
      alarm: 'Acoustic',
      name: 'Brandon Stark',
      time: '12:01',
      status: 'resolved',
      room: '21',
    },
    {
      id: 30,
      patient_id: 10,
      priority: 2,
      alarm: 'Fire',
      name: 'Viserys Targaryan',
      time: '12:02',
      status: 'open',
      room: '36',
    },
    {
      id: 31,
      patient_id: 11,
      priority: 2,
      alarm: 'Faulty Sensor',
      name: 'Khal Drogo',
      time: '12:02',
      status: 'open',
      room: '07',
    },
    {
      id: 32,
      patient_id: 12,
      priority: 3,
      alarm: 'Patient up',
      name: 'Sansa Stark',
      time: '12:05',
      status: 'open',
      room: '14',
    },
  ],
  patients,
  findPatient: (id: number) =>
    set((state: AlarmState) => ({
      correspondingPatient: state.patients.filter(
        (patient: Patient) => patient.profile.id === id
      ),
    })),
  closeAlarm: (id: number) => {
    return set((state: AlarmState) => ({
      alarms: state.alarms.filter((alarm: Alarm) => alarm.id !== id),
      correspondingPatient: null,
    }));
  },
  sortByField: (id: string) => {
    const property: string = id.toString().toLowerCase();
    console.log('store', id);
    console.log('store', property);
    return set((state: AlarmState) => ({
      alarms: state.alarms.sort((a, b) =>
        a[property].localeCompare(b[property])
      ),
    }));
  },
}));

export default useAlarmsStore;
