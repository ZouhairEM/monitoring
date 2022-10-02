interface PatientBioData {
  name: string;
  room: string;
  age: number;
  gender: string;
  enrollDate: string;
  diagnosis?: string;
}

function PatientBio(props: any) {
  const { patient } = props;
  return (
    <div>
      <div className="flex flex-col">
        <div className="font-extrabold bg-green dark:bg-black-100 text-white p-2">
          Profile
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-extrabold uppercase text-xs">
            Name
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            {patient.name}
          </div>
        </div>
        <div className="flex gap-8 text-sm p-2">
          <div>
            <div className="text-green dark:text-white font-extrabold uppercase text-xs">
              Date of birth
            </div>
            <div className="text-black-100 dark:text-white text-xs">
              {patient.dob}
            </div>
          </div>
          <div>
            <div className="text-green dark:text-white font-extrabold uppercase text-xs">
              Age
            </div>
            <div className="text-black-100 dark:text-white text-xs">
              {patient.age}
            </div>
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-extrabold uppercase text-xs">
            Room
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            {patient.room}
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-extrabold uppercase text-xs">
            Gender
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            {patient.gender}
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-extrabold uppercase text-xs">
            Enrolled since
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            {patient.enrollDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientBio;
