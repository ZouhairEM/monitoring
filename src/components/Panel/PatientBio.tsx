import Patient from '../../types/PatientType';

interface Props {
  profile: Patient['profile'];
}

function PatientBio({ profile }: Props) {
  return (
    <section>
      <div className="flex flex-col">
        <div className="font-extrabold bg-green dark:bg-black-200 text-white p-2">
          Profile
        </div>
        <div className="text-sm p-2">
          <div className="grid grid-cols-2 mb-1">
            {profile !== undefined ? (
              <>
                <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                  Name
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.name}</span>
                </div>
                <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                  Room
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.room}</span>
                </div>
                <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                  Date of Birth
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.date_of_birth}
                  </span>
                </div>
                <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                  Age
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.age}</span>
                </div>
                <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                  Gender
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.gender}
                  </span>
                </div>
                <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                  Enrolled since
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.enroll_date}
                  </span>
                </div>
                <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                  Diagnosis
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.diagnosis ? profile.diagnosis : 'Undiagnosed'}
                  </span>
                </div>
              </>
            ) : (
              <>None selected</>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientBio;
