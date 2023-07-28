import { useTranslation } from 'react-i18next';
import FindPatient from '../components/patients/FindPatient';
import PatientBio from '../components/monitoring/PatientBio';
import HealthCareInfo from '../components/monitoring/HealthCareInfo';
import EmergencyContact from '../components/monitoring/EmergencyContact';
import usePatientsStore from '../stores/PatientsStore';
import Notes from '../components/patients/Notes';
import PatientAlarmsOverview from '../components/patients/PatientAlarmsOverview';
import useSettingsStore from '../stores/SettingsStore';

function Patients() {
  const { t } = useTranslation();
  const matchingPatient = usePatientsStore((state) => state.matchingPatient);
  const isResultVisible = useSettingsStore((state) => state.isResultVisible);

  return (
    <main className="flex h-[754px] w-full flex-col gap-2 p-[1px] md:mb-0">
      <h1 className="dark:text-grey-200">{t('patientsPage.title')}</h1>
      <div className="flex h-full flex-col gap-4">
        <div className={`grid grid-cols-12 ${matchingPatient ? 'h-1/6' : 'h-full'}`}>
          <FindPatient />
        </div>
        {matchingPatient ? (
          <>
            <section
              className={`${
                isResultVisible ? '-z-10' : ''
              } grid h-auto w-full grid-cols-12 gap-4 rounded sm:h-3/6`}
            >
              <div className="col-span-12 rounded rounded-t-lg bg-white drop-shadow-md dark:bg-black-100 sm:col-span-9">
                <div className="panel-heading">{t('patientsPage.details')}</div>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 p-1 px-2 sm:col-span-5">
                    <PatientBio profile={matchingPatient.profile} />
                  </div>
                  <div className="col-span-12 flex flex-col gap-4 sm:col-span-7 sm:justify-evenly sm:gap-0">
                    <div className="text-center">
                      <hr className="mx-auto my-2 block w-11/12 opacity-30 sm:hidden" />
                      <h5 className="pb-2 text-center text-sm font-bold text-primary-200 dark:text-grey-200 sm:pb-4 sm:text-left">
                        Healthcare
                      </h5>
                      <HealthCareInfo healthCare={matchingPatient.healthcare} onPatients />
                    </div>
                    <div>
                      <hr className="mx-auto my-2 block w-11/12 opacity-30 sm:hidden" />
                      <h5 className="pb-2 text-center text-sm font-bold text-primary-200 dark:text-grey-200 sm:pb-4 sm:text-left">
                        Emergency contact
                      </h5>
                      <EmergencyContact
                        emergencyContact={matchingPatient.emergency_contact}
                        onPatients
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 flex flex-col rounded rounded-t-lg bg-white drop-shadow-md dark:bg-black-100 sm:col-span-3">
                <div className="panel-heading">
                  {`${
                    matchingPatient.profile.name.split(' ')[0].slice(-1) === 's'
                      ? `${matchingPatient.profile.name.split(' ')[0].slice(0, -1)}s'`
                      : `${matchingPatient.profile.name.split(' ')[0]}s`
                  } ${t('patientsPage.currentAlarms')}`}
                </div>
                <PatientAlarmsOverview matchingPatient={matchingPatient} />
              </div>
            </section>
            <div className="col-span-12 h-auto rounded rounded-t-lg bg-white drop-shadow-md dark:bg-black-100 sm:col-span-2 sm:h-2/6">
              <div className="panel-heading">{t('patientsPage.notes')}</div>
              <section className="h-auto sm:h-4/5">
                <Notes />
              </section>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}

export default Patients;
