import { useTranslation } from 'react-i18next';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import Patient from '../../types/PatientType';
import Doctors from '../../data/doctors';
import useBreakpoint from '../../hooks/useBreakpoint';
import Nurse from '../../assets/img/illustrations/Nurse';

interface PatientBioProps {
  profile: Patient['profile'] | null;
}

function PatientBio({ profile }: PatientBioProps) {
  const { t } = useTranslation();
  const profilePhoto = new URL(
    `../../assets/img/patients/${
      profile ? profile.photo ?? 'placeholder.png' : ''
    }`,
    import.meta.url
  ).href;

  const breakpoint = useBreakpoint();
  const getCorrespondingDoctor = () => {
    if (profile) {
      return Doctors.filter((doctor) => doctor.id === profile.doctor)[0].name;
    }
    return null;
  };

  return (
    <>
      <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
        {t('patientBio.title')}
      </div>
      {profile && (
        <div className="flex flex-col gap-1 p-2 py-3">
          <h2 className="font-extrabold text-primary-200 dark:text-grey">
            {profile.name}
          </h2>
          <div className="profile-block flex justify-center rounded-t-lg px-2">
            <img
              src={profilePhoto}
              alt={profile.name}
              className="photo box-shadow-md h-24 max-h-[300px] min-w-[120px] object-fill"
            />
          </div>
          <div className="mb-2 text-center text-sm md:text-left">
            <div className="grid grid-cols-3 gap-y-2 md:grid-cols-2">
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  {t('patientBio.name')}
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">{profile.name}</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  {t('patientBio.dob')}
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    {profile.date_of_birth}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  {t('patientBio.gender')}
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    {profile.gender === 'Male' ? (
                      <MaleIcon style={{ fontSize: '17px' }} />
                    ) : (
                      <FemaleIcon style={{ fontSize: '17px' }} />
                    )}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  {t('patientBio.age')}
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">{profile.age}</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  {t('patientBio.room')}
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    #{+profile.room < 10 ? `0${profile.room}` : profile.room}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  {t('patientBio.doctor')}
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    {getCorrespondingDoctor()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!profile && (
        <div className="profile-block empty flex h-full flex-col items-center justify-center gap-1 rounded-t-lg p-4">
          <div className="w-10 sm:w-16">
            <Nurse />
          </div>
          <p className="py-4 text-center dark:text-grey">
            {t('patientBio.clickOnAlarm')}{' '}
            {breakpoint === 'sm' || breakpoint === 'md'
              ? t('patientBio.below')
              : t('patientBio.onTheRight')}
            {t('patientBio.patientInfo')}
          </p>
        </div>
      )}
    </>
  );
}

export default PatientBio;
