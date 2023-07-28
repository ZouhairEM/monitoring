import { useTranslation } from 'react-i18next';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';
import Doctors from '../../data/doctors';

function FollowUpModal() {
  const setModal = useSettingsStore((state) => state.setModal);
  const profile = useAlarmsStore((state) => state.correspondingPatient);
  const location = new URL(`../../assets/img/illustrations/map.png`, import.meta.url).href;
  const { t } = useTranslation();

  const getCorrespondingDoctor = () => {
    if (profile) {
      return Doctors.filter((doctor) => doctor.id === profile[0].profile.doctor)[0].name;
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col gap-2 dark:text-grey-200">
        <h2>{t('controlPanel.modal.title')}</h2>
        {profile && (
          <>
            <p>
              {t('controlPanel.modal.patientName')}: {profile[0].profile.name}{' '}
            </p>
            <p>
              {t('controlPanel.modal.room')}: #
              {profile[0].profile.room < 10
                ? `0${profile[0].profile.room}`
                : profile[0].profile.room}{' '}
            </p>
          </>
        )}
        <img src={location} alt="map" className="w-[400px]" />
      </div>
      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setModal({ status: false, name: '' })}
          onKeyDown={() => setModal({ status: false, name: '' })}
          tabIndex={0}
          className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
        >
          {t('controlPanel.modal.call')} {getCorrespondingDoctor()}
        </button>
        <button
          type="button"
          onClick={() => setModal({ status: false, name: '' })}
          onKeyDown={() => setModal({ status: false, name: '' })}
          tabIndex={0}
          className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300"
        >
          {t('controlPanel.modal.cancel')}
        </button>
      </div>
    </div>
  );
}

export default FollowUpModal;
