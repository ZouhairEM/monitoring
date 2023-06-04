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
  sortByField: (id: string) => void;
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
  sortByField: (id: string) => {
    const property: keyof AlarmEntryType =
      id.toLowerCase() as keyof AlarmEntryType;
    return set((state: AlarmState) => ({
      alarms: state.alarms.sort((a: AlarmEntryType, b: AlarmEntryType) => {
        const valueA = a[property];
        const valueB = b[property];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return valueA.localeCompare(valueB);
        }

        return valueA - valueB;
      }),
    }));
  },
}));

export default useAlarmsStore;
