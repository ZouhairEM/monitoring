import Patient from '../../types/PatientType';
import EmptyProfile from '../../assets/img/illustrations/EmptyProfile';

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
        <div className="section-header bg-primary-200 p-2 text-sm font-bold text-white drop-shadow-md dark:bg-black-200 dark:text-grey">
          Profile
        </div>
        {profile && (
          <div className="section-header profile-block px-2">
            <div className="flex flex-col items-center justify-start gap-1 p-2 py-3">
              <h2 className="font-extrabold text-primary-200 dark:text-grey">
                {profile.name}
              </h2>
              <img
                src={profilePhoto}
                alt={profile.name}
                className="photo h-24 object-fill drop-shadow-md"
              />
            </div>
            <div className="mb-2 p-2 text-center text-sm sm:text-left">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-xs font-bold text-primary-200 dark:text-grey">
                    Name
                  </div>
                  <div className="text-xs text-black-100 dark:text-grey">
                    <span className="dark:bg-black-100">{profile.name}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary-200 dark:text-grey">
                    Date of Birth
                  </div>
                  <div className="text-xs text-black-100 dark:text-grey">
                    <span className="dark:bg-black-100">
                      {profile.date_of_birth}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary-200 dark:text-grey">
                    Gender
                  </div>
                  <div className="text-xs text-black-100 dark:text-grey">
                    <span className="dark:bg-black-100">{profile.gender}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary-200 dark:text-grey">
                    Age
                  </div>
                  <div className="text-xs text-black-100 dark:text-grey">
                    <span className="dark:bg-black-100">{profile.age}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary-200 dark:text-grey">
                    Room
                  </div>
                  <div className="text-xs text-black-100 dark:text-grey">
                    <span className="dark:bg-black-100">
                      #{+profile.room < 10 ? `0${profile.room}` : profile.room}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary-200 dark:text-grey">
                    Enrolled
                  </div>
                  <div className="text-xs text-black-100 dark:text-grey">
                    <span className="p-1 dark:bg-black-100">
                      {profile.enroll_date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!profile && (
          <div className="section-header profile-block empty flex flex-col items-center justify-center gap-1 p-4">
            <EmptyProfile />
            <p className="py-4 text-center dark:text-grey">
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
