export default interface AlarmEntryType {
  id: number;
  level: number;
  alarm: string;
  patient: string;
  time: string;
  status: boolean;
  room: string;
}
