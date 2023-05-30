import Patient from '../../types/PatientType';
import EmptyProfile from '../../assets/img/illustrations/empty-profile.svg';

interface PatientBioProps {
  profile: Patient['profile'] | null;
}

function PatientBio({ profile }: PatientBioProps) {
  const profilePhoto = new URL(
    `../../assets/img/patients/${
      profile ? profile.photo ?? 'placeholder.png' : ''
    }`,
    import.meta.url
  ).href;

  return (
    <section>
      <div className="flex flex-col">
        <div className="section-header bg-primary-200 p-2 text-sm font-bold text-white drop-shadow-md dark:bg-black-200">
          Profile
        </div>
        {profile && (
          <div className="section-header profile-block px-2">
            <div className="flex flex-col items-center justify-center gap-1 py-3 p-2">
              <h2 className="font-extrabold text-primary-200 dark:text-white">
                {profile.name}
              </h2>
              <img
                src={profilePhoto}
                alt={profile.name}
                className="photo h-24 object-fill drop-shadow-md"
              />
            </div>
            <div className="mb-2 p-2 text-sm">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-xs font-bold text-primary-200 dark:text-white">
                  Name
                </div>
                <div className="text-xs text-black-100 dark:text-white">
                  <span className="p-1 dark:bg-black-100">{profile.name}</span>
                </div>
                <div className="text-xs font-bold text-primary-200 dark:text-white">
                  Gender
                </div>
                <div className="text-xs text-black-100 dark:text-white">
                  <span className="p-1 dark:bg-black-100">
                    {profile.gender}
                  </span>
                </div>
                <div className="text-xs font-bold text-primary-200 dark:text-white">
                  Date of Birth
                </div>
                <div className="text-xs text-black-100 dark:text-white">
                  <span className="p-1 dark:bg-black-100">
                    {profile.date_of_birth}
                  </span>
                </div>
                <div className="text-xs font-bold text-primary-200 dark:text-white">
                  Age
                </div>
                <div className="text-xs text-black-100 dark:text-white">
                  <span className="p-1 dark:bg-black-100">{profile.age}</span>
                </div>
                <div className="text-xs font-bold text-primary-200 dark:text-white">
                  Room
                </div>
                <div className="text-xs text-black-100 dark:text-white">
                  <span className="p-1 dark:bg-black-100">{profile.room}</span>
                </div>
                <div className="text-xs font-bold text-primary-200 dark:text-white">
                  Enrolled since
                </div>
                <div className="text-xs text-black-100 dark:text-white">
                  <span className="p-1 dark:bg-black-100">
                    {profile.enroll_date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {!profile && (
          <div className="section-header profile-block empty flex flex-col items-center justify-center gap-1 p-4">
            <img src={EmptyProfile} alt={EmptyProfile} />
            <p className="py-4 text-center dark:text-white">
              Click on any active alarm on the right, patient info will be
              displayed here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PatientBio;
