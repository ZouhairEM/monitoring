export default interface Patient {
  name: string;
  room: string;
  dob: string;
  age: number;
  gender: string;
  enrollDate: string;
  diagnosis?: string;
}
