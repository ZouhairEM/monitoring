import create from 'zustand';
import patients from '../data/patients';
import alarms from '../data/alarms';
import AlarmEntryType from '../types/AlarmEntryType';
import PatientType from '../types/PatientType';

interface AlarmState {
  correspondingPatient: PatientType[] | null;
  patients: PatientType[];
  alarms: AlarmEntryType[];
  sortedAlarms: AlarmEntryType[] | [];
  actualAlarms: number[] | [];
  activeAlarm: number;
  closedAlarm: AlarmEntryType[] | null;
  clickedAlarm: AlarmEntryType | null;
  hasTotalChanged: boolean;
  closedAlarmIndex: number;
  findAdjacentPatient: (id: number) => void;
  findPatient: (id: number) => void;
  setActualAlarms: (value: number[]) => void;
  setActive: (by: number) => void;
  setReactiveAlarms: (value: AlarmEntryType) => void;
  setPrevious: () => void;
  setNext: () => void;
  closeAlarm: (id: number) => void;
  setUndo: () => void;
  setSortedAlarms: (id: string) => void;
}

const useAlarmsStore = create<AlarmState>((set) => ({
  correspondingPatient: null,
  patients,
  alarms,
  sortedAlarms: [...alarms],
  actualAlarms: [],
  activeAlarm: 0,
  clickedAlarm: null,
  closedAlarm: null,
  closedAlarmIndex: 0,
  hasTotalChanged: false,
  setReactiveAlarms: (alarm: AlarmEntryType) =>
    set((state) => ({
      alarms: [...state.alarms, alarm],
    })),
  findAdjacentPatient: (id: number) =>
    set((state: AlarmState) => ({
      correspondingPatient: state.patients.filter(
        (patient: PatientType) =>
          patient.profile.id ===
          state.alarms.filter((alarm: AlarmEntryType) => alarm.id === id)[0].patient_id
      ),
    })),
  findPatient: (id: number) =>
    set((state: AlarmState) => ({
      correspondingPatient: state.patients.filter(
        (patient: PatientType) => patient.profile.id === id
      ),
    })),
  setActualAlarms: (value) => set(() => ({ actualAlarms: value })),
  setActive: (id) => set(() => ({ activeAlarm: id })),
  setPrevious: () =>
    set((state) => ({
      activeAlarm: state.activeAlarm - 1,
    })),
  setNext: () =>
    set((state) => ({
      activeAlarm: state.activeAlarm + 1,
    })),
  setClosedAlarm: () =>
    set((state: AlarmState) => ({
      closedAlarm: state.alarms[state.activeAlarm] ? [state.alarms[state.activeAlarm]] : null,
    })),
  setUndo: () => {
    set((state) => {
      const newAlarms = [...state.alarms];
      if (state.closedAlarm !== null) {
        newAlarms.splice(state.closedAlarmIndex, 0, ...state.closedAlarm);
      }
      return { alarms: newAlarms };
    });
  },
  closeAlarm: (id: number) =>
    set((state: AlarmState) => ({
      closedAlarmIndex: state.alarms.indexOf(
        state.alarms.filter((alarm: AlarmEntryType) => alarm.id === id)[0]
      ),
      closedAlarm: state.alarms.filter((alarm: AlarmEntryType) => alarm.id === id),
      alarms: state.alarms.filter((alarm: AlarmEntryType) => alarm.id !== id),
      hasTotalChanged: true,
      correspondingPatient: null,
      activeAlarm: 0,
    })),
  setSortedAlarms: (id: string) =>
    set((state: AlarmState) => {
      const sortedAlarms = [...state.alarms];

      if (id === 'room') {
        sortedAlarms.sort((alarmA: AlarmEntryType, alarmB: AlarmEntryType) => {
          const patientA = state.patients.find(
            (patient: PatientType) => patient.profile.id === alarmA.patient_id
          );
          const patientB = state.patients.find(
            (patient: PatientType) => patient.profile.id === alarmB.patient_id
          );

          if (patientA && patientB) {
            return patientA.profile.room - patientB.profile.room;
          }
          return 0;
        });
      } else {
        sortedAlarms.sort((alarmA: AlarmEntryType, alarmB: AlarmEntryType) => {
          const valueA = alarmA[id as keyof AlarmEntryType];
          const valueB = alarmB[id as keyof AlarmEntryType];

          if (typeof valueA === 'string' && typeof valueB === 'string') {
            return valueA.localeCompare(valueB);
          }

          if (typeof valueA === 'number' && typeof valueB === 'number') {
            return valueA - valueB;
          }
          return 0;
        });
      }

      return { alarms: sortedAlarms, sortedAlarms };
    }),
}));

export default useAlarmsStore;
