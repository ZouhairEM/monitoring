import NotificationsIcon from '@mui/icons-material/Notifications';
import Patient from '../../types/PatientType';
import TyrionLannister from '../../assets/img/patients/TyrionLannister.jpg';

interface Props {
  profile: Patient['profile'];
}

function PatientBio({ profile }: Props) {
  return (
    <section>
      <div className="flex flex-col">
        <div className="font-bold bg-green dark:bg-black-200 text-white p-2">
          Profile
        </div>
        <div className="flex flex-col gap-1 justify-center items-center p-2">
          <img
            src={TyrionLannister}
            alt=""
            className="rounded-full object-fill h-24"
          />
          <h2 className="font-extrabold text-green dark:text-white">
            Tyrion Lannister
          </h2>
          <div className="flex justify-around w-full">
            <div className="flex flex-col justify-center items-center">
              <NotificationsIcon style={{ height: '15px' }} />
              <span className="font-bold text-xs text-black-100 dark:text-white">
                Alarm
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-sm">14</span>
              <span className="font-bold text-xs text-black-100 dark:text-white">
                Room
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="grid grid-cols-2 mb-1">
            {profile ? (
              <>
                <div className="text-green dark:text-white font-bold uppercase text-xs">
                  Name
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.name}</span>
                </div>
                <div className="text-green dark:text-white font-bold uppercase text-xs">
                  Room
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.room}</span>
                </div>
                <div className="text-green dark:text-white font-bold uppercase text-xs">
                  Date of Birth
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.date_of_birth}
                  </span>
                </div>
                <div className="text-green dark:text-white font-bold uppercase text-xs">
                  Age
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">{profile.age}</span>
                </div>
                <div className="text-green dark:text-white font-bold uppercase text-xs">
                  Gender
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.gender}
                  </span>
                </div>
                <div className="text-green dark:text-white font-bold uppercase text-xs">
                  Enrolled since
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.enroll_date}
                  </span>
                </div>
                <div className="text-green dark:text-white font-bold uppercase text-xs">
                  Diagnosis
                </div>
                <div className="text-black-100 dark:text-white text-xs">
                  <span className="p-1 dark:bg-black-100">
                    {profile.diagnosis ? profile.diagnosis : 'Undiagnosed'}
                  </span>
                </div>
              </>
            ) : (
              <div className="dark:text-white">No alarm has been selected</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientBio;
