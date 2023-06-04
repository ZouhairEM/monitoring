export default interface AlarmEntryType {
  id: number;
  priority: number;
  alarm: string;
  patient_id: number;
  time: string;
  status: string;
}
