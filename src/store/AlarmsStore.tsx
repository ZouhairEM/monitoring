import create from 'zustand';
import Patient from '../types/PatientType';

type Alarm = {
  id: number;
  level: number;
  alarm: string;
  patient_name: string;
  patient_id: number;
  time: string;
  status: boolean;
  room: string;
};

interface AlarmState {
  chosenPatient: undefined | object;
  patients: Patient[];
  alarms: Alarm[];
  findPatient: (id: number) => void;
  closeAlarm: (id: number) => void;
}

const useAlarmsStore = create<AlarmState>((set) => ({
  chosenPatient: undefined,
  alarms: [
    {
      id: 1,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Jaime Lanister',
      patient_id: 1,
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 2,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Arya Stark',
      patient_id: 2,
      time: '12:02',
      status: false,
      room: '36',
    },
  ],
  patients: [
    {
      profile: {
        id: 1,
        name: 'Tyrion Lannister',
        room: '1',
        date_of_birth: '11-11-2000',
        age: 20,
        gender: 'male',
        enroll_date: '11-11-2000',
        diagnosis: '',
      },
      emergency_contact: {
        name: 'Jaime Lannister',
        relation: 'Brother',
        address: "King's Landing",
        phone_number: '1234567',
        work_phone_number: '1234568',
      },
      healthcare: {
        plan: 'None',
        provider: 'None',
      },
    },
    {
      profile: {
        id: 2,
        name: 'Arya Stark',
        room: '2',
        date_of_birth: '11-11-2001',
        age: 10,
        gender: 'female',
        enroll_date: '11-11-2001',
        diagnosis: 'tuberculosis',
      },
      emergency_contact: {
        name: 'Sansa Stark',
        relation: 'Sister',
        address: "King's Landing",
        phone_number: '1234567',
        work_phone_number: '1234567',
      },
      healthcare: {
        plan: 'TBC care',
        provider: 'EBA',
      },
    },
  ],
  findPatient: (id: number) =>
    set((state: AlarmState) => ({
      chosenPatient: state.patients.filter(
        (patient: Patient) => patient.profile.id === id
      ),
    })),
  closeAlarm: (id: number) =>
    set((state: AlarmState) => ({
      alarms: state.alarms.filter((alarm: Alarm) => alarm.id !== id),
      chosenPatient: undefined,
    })),
}));

export default useAlarmsStore;
