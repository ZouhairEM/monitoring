import rickJames from '../../assets/img/patients/rickjames.png';
import Patient from '../../types/Patient';

interface Props {
  patient: Patient;
}

function PatientBio({ patient }: Props) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="font-extrabold bg-green dark:bg-black-200 text-white p-2">
          Profile
        </div>
        <div className="text-sm p-2">
          <div className="grid grid-cols-2">
            <div className="text-green dark:text-white font-extrabold uppercase text-xs">
              Name
            </div>
            <div className="text-black-100 dark:text-white text-xs absolute right-2">
              <img
                src={rickJames}
                alt="Rick James"
                className="rounded-lg h-16 drop-shadow-lg opacity-90"
              />
            </div>
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            <span className="p-1 bg-lightGrey dark:bg-black-100">
              {patient.name}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm p-2">
          <div>
            <div className="text-green dark:text-white font-extrabold uppercase text-xs">
              Date of birth
            </div>
            <div className="text-black-100 dark:text-white text-xs">
              <span className="p-1 bg-lightGrey dark:bg-black-100">
                {patient.dob}
              </span>
            </div>
          </div>
          <div>
            <div className="text-green dark:text-white font-extrabold uppercase text-xs">
              Age
            </div>
            <div className="text-black-100 dark:text-white text-xs">
              <span className="p-1 bg-lightGrey dark:bg-black-100">
                {patient.age}
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-extrabold uppercase text-xs">
            Room
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            <span className="p-1 bg-lightGrey dark:bg-black-100">
              {patient.room}
            </span>
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-extrabold uppercase text-xs">
            Gender
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            <span className="p-1 bg-lightGrey dark:bg-black-100">
              {patient.gender}
            </span>
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-extrabold uppercase text-xs">
            Enrolled since
          </div>
          <div className="text-black-100 dark:text-white text-xs">
            <span className="p-1 bg-lightGrey dark:bg-black-100">
              {patient.enrollDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientBio;
