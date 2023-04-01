export default interface PatientType {
  profile: {
    id: number;
    name: string;
    photo: string;
    room: string;
    date_of_birth: string;
    age: number;
    gender: string;
    enroll_date: string;
    diagnosis: string;
  };
  emergency_contact: {
    name: string;
    relation: string;
    address: string;
    phone_number: string;
    work_phone_number: string;
  };
  healthcare: {
    plan: string;
    provider: string;
  };
}
