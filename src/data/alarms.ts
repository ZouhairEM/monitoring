import AlarmEntryType from '../types/AlarmEntryType';

class RandomAlarmGenerator implements AlarmEntryType {
  id: number;

  patient_id: number;

  priority: number;

  alarm: string;

  time: string;

  status: string;

  constructor(
    id: number,
    patient_id: number,
    priority: number,
    alarm: string,
    time: string,
    status: string
  ) {
    this.id = id;
    this.patient_id = patient_id;
    this.priority = priority;
    this.alarm = alarm;
    this.time = time;
    this.status = status;
  }
}

const Alarms: AlarmEntryType[] = [
  {
    id: 1,
    patient_id: 1,
    priority: 5,
    alarm: 'Acoustic',
    time: '12:01',
    status: 'Done',
  },
  {
    id: 2,
    patient_id: 2,
    priority: 2,
    alarm: 'Fire',
    time: '12:02',
    status: 'Open',
  },
  {
    id: 3,
    patient_id: 3,
    priority: 2,
    alarm: 'Help',
    time: '12:02',
    status: 'Open',
  },
  {
    id: 4,
    patient_id: 4,
    priority: 1,
    alarm: 'Patient up',
    time: '12:05',
    status: 'Open',
  },
  {
    id: 5,
    patient_id: 5,
    priority: 5,
    alarm: 'Acoustic',
    time: '12:01',
    status: 'Done',
  },
  {
    id: 6,
    patient_id: 6,
    priority: 2,
    alarm: 'Fire',
    time: '12:02',
    status: 'Open',
  },
  {
    id: 7,
    patient_id: 7,
    priority: 2,
    alarm: 'Help',
    time: '12:02',
    status: 'Open',
  },
  {
    id: 8,
    patient_id: 8,
    priority: 3,
    alarm: 'Patient up',
    time: '12:05',
    status: 'Open',
  },
  {
    id: 9,
    patient_id: 9,
    priority: 1,
    alarm: 'Acoustic',
    time: '12:01',
    status: 'Done',
  },
  {
    id: 10,
    patient_id: 10,
    priority: 2,
    alarm: 'Fire',
    time: '12:02',
    status: 'Open',
  },
  {
    id: 11,
    patient_id: 11,
    priority: 2,
    alarm: 'Help',
    time: '12:02',
    status: 'Open',
  },
  {
    id: 12,
    patient_id: 12,
    priority: 3,
    alarm: 'Patient up',
    time: '12:05',
    status: 'Open',
  },
  {
    id: 13,
    patient_id: 13,
    priority: 4,
    alarm: 'Acoustic',
    time: '12:01',
    status: 'Done',
  },
  {
    id: 14,
    patient_id: 14,
    priority: 2,
    alarm: 'Fire',
    time: '12:02',
    status: 'Open',
  },
];

const availablePatientIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const availableStatuses = ['Open', 'Done'];
const availableAlarmTypes = ['Acoustic', 'Fire', 'Patient up', 'Help'];

const generatePatientID = (): number =>
  availablePatientIDs[Math.floor(Math.random() * availablePatientIDs.length)];
const generatePriority = (): number => Math.floor(Math.random() * 5);
const generateHighestAlarmID = (): number =>
  Math.max(...Alarms.map((alarm) => alarm.id), 0) + 1;
const generateAlarmType = (): string =>
  availableAlarmTypes[Math.floor(Math.random() * availableAlarmTypes.length)];
const generateStatus = (): string =>
  availableStatuses[Math.floor(Math.random() * availableStatuses.length)];

for (let i = 1; i < 20; i += 1) {
  const generateAlarm: AlarmEntryType = new RandomAlarmGenerator(
    generateHighestAlarmID(),
    generatePatientID(),
    generatePriority(),
    generateAlarmType(),
    '12:02',
    generateStatus()
  );
  Alarms.push(generateAlarm);
}

export default Alarms;
