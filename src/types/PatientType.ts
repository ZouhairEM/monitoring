export default interface PatientType {
  profile: {
    id: number;
    name: string;
    photo?: string;
    room: number;
    date_of_birth: string;
    age: number;
    gender: string;
    doctor: number;
  };
  emergency_contact: {
    name: string;
    relation: string;
    address: string;
    private_phone: string;
    work_phone: string;
  };
  healthcare: {
    plan: string;
    provider: string;
    diagnosis: string;
  };
}
