import create from 'zustand';
import patients from '../data/patients';
import alarms from '../data/alarms';
import AlarmEntryType from '../types/AlarmEntryType';
import PatientType from '../types/PatientType';

interface AlarmState {
  correspondingPatient: PatientType[] | null;
  patients: PatientType[];
  alarms: AlarmEntryType[];
  actualAlarms: number[] | [];
  activeAlarm: number;
  closedAlarm: AlarmEntryType | AlarmEntryType[] | null;
  clickedAlarm: AlarmEntryType | null;
  hasTotalChanged: boolean;
  closedAlarmIndex: number;
  findPatient: (id: number) => void;
  setActualAlarms: (value: number[]) => void;
  setActive: (by: number) => void;
  setReactiveAlarms: (value: AlarmEntryType) => void;
  setPrevious: () => void;
  setNext: () => void;
  closeAlarm: (id: number) => void;
  setUndo: () => void;
}

const useAlarmsStore = create<AlarmState>((set) => ({
  correspondingPatient: null,
  patients,
  alarms,
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
  findPatient: (id: number) =>
    set((state: AlarmState) => ({
      correspondingPatient: state.patients.filter(
        (patient: PatientType) =>
          patient.profile.id ===
          state.alarms.filter((alarm: AlarmEntryType) => alarm.id === id)[0]
            .patient_id
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
      closedAlarm: state.alarms[state.activeAlarm],
    })),
  setUndo: () => {
    set((state) => {
      const newAlarms = [...state.alarms];
      newAlarms.splice(state.closedAlarmIndex, 0, ...state.closedAlarm);
      return { alarms: newAlarms };
    });
  },
  closeAlarm: (id: number) =>
    set((state: AlarmState) => ({
      closedAlarmIndex: state.alarms.indexOf(
        state.alarms.filter((alarm: AlarmEntryType) => alarm.id === id)[0]
      ),
      closedAlarm: state.alarms.filter(
        (alarm: AlarmEntryType) => alarm.id === id
      ),
      alarms: state.alarms.filter((alarm: AlarmEntryType) => alarm.id !== id),
      hasTotalChanged: true,
      correspondingPatient: null,
      activeAlarm: 0,
    })),
}));

export default useAlarmsStore;
