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
  clickedAlarm: AlarmEntryType | null;
  hasTotalChanged: boolean;
  findPatient: (id: number) => void;
  setActualAlarms: (value: number[]) => void;
  setActive: (by: number) => void;
  setPrevious: () => void;
  setNext: () => void;
  closeAlarm: (id: number) => void;
}

const useAlarmsStore = create<AlarmState>((set) => ({
  correspondingPatient: null,
  patients,
  alarms,
  actualAlarms: [],
  activeAlarm: 0,
  clickedAlarm: null,
  hasTotalChanged: false,
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
  closeAlarm: (id: number) => {
    return set((state: AlarmState) => ({
      alarms: state.alarms.filter((alarm: AlarmEntryType) => alarm.id !== id),
      hasTotalChanged: true,
      correspondingPatient: null,
      activeAlarm: 0,
    }));
  },
}));

export default useAlarmsStore;
