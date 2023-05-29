import NotificationsIcon from '@mui/icons-material/Notifications';
import Patient from '../../types/PatientType';
import EmptyProfile from '../../assets/img/illustrations/empty-profile.svg';

interface PatientBioProps {
  profile: Patient['profile'];
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
        <div className="section-header font-bold bg-primary-200 dark:bg-black-200 text-white p-2 drop-shadow-md">
          Profile
        </div>
        {profile && (
          <div className="section-header profile-block px-2">
            <div className="flex flex-col gap-1 justify-center items-center p-2">
              <h2 className="font-extrabold text-primary-200 dark:text-white">
                {profile.name}
              </h2>
              <img
                src={profilePhoto}
                alt={profile.name}
                className="photo object-fill h-24 drop-shadow-md"
              />
              <div className="flex justify-around w-full">
                <div className="flex flex-col justify-center items-center bg-white dark:bg-black-200 text-sm text-primary-200 font-semibold dark:text-white">
                  <NotificationsIcon style={{ height: '20px' }} />
                  <span className="font-bold text-lg text-black-100 dark:text-white">
                    Alarm
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="font-bold text-lg text-black-100 dark:text-white">
                    14
                  </span>
                  <span className="font-bold text-lg text-black-100 dark:text-white">
                    Room
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm p-2 mb-2">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-primary-200 dark:text-white font-bold uppercase text-xs">
                  Name
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.name}</span>
                </div>
                <div className="text-primary-200 dark:text-white font-bold uppercase text-xs">
                  Room
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.room}</span>
                </div>
                <div className="text-primary-200 dark:text-white font-bold uppercase text-xs">
                  Date of Birth
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.date_of_birth}
                  </span>
                </div>
                <div className="text-primary-200 dark:text-white font-bold uppercase text-xs">
                  Age
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.age}</span>
                </div>
                <div className="text-primary-200 dark:text-white font-bold uppercase text-xs">
                  Gender
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.gender}
                  </span>
                </div>
                <div className="text-primary-200 dark:text-white font-bold uppercase text-xs">
                  Enrolled since
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.enroll_date}
                  </span>
                </div>
                <div className="text-primary-200 dark:text-white font-bold uppercase text-xs">
                  Diagnosis
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.diagnosis ? profile.diagnosis : 'Undiagnosed'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {!profile && (
          <div className="section-header profile-block empty flex flex-col gap-1 justify-center items-center p-4">
            <img src={EmptyProfile} alt={EmptyProfile} />
            <p className="text-center dark:text-white py-4">
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
