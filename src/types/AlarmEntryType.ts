export default interface AlarmEntryType {
  id: number;
  level: number;
  alarm: string;
  patient_name: string;
  patient_id: number;
  time: string;
  status: boolean;
  room: string;
}
