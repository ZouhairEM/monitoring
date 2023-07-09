import { useTranslation } from 'react-i18next';
import FindPatient from '../components/patients/FindPatient';
import PatientBio from '../components/monitoring/PatientBio';
import HealthCareInfo from '../components/monitoring/HealthCareInfo';
import EmergencyContact from '../components/monitoring/EmergencyContact';
import usePatientsStore from '../stores/PatientsStore';
import Notes from '../components/patients/Notes';

function Patients() {
  const { t } = useTranslation();
  const matchingPatient = usePatientsStore((state) => state.matchingPatient);

  return (
    <div className="w-full">
      <main className="flex h-[754px] w-full flex-col gap-4 p-[1px] md:mb-0">
        <h1 className="dark:text-grey">{t('patientsPage.title')}</h1>
        <div className="flex h-full flex-col gap-4">
          <div
            className={`grid grid-cols-12 ${
              matchingPatient ? 'h-1/6' : 'h-full'
            }`}
          >
            <FindPatient />
          </div>
          {matchingPatient ? (
            <>
              <section className="-z-10 grid h-auto w-full grid-cols-12 gap-4 rounded sm:h-3/6">
                <div className="col-span-12 bg-white drop-shadow-md dark:bg-black-100 sm:col-span-9">
                  <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
                    {t('patientsPage.details')}
                  </div>
                  <div className="grid grid-cols-6">
                    <div className="col-span-6 p-1 px-2 sm:col-span-3">
                      <PatientBio profile={matchingPatient.profile} />
                    </div>
                    <div className="col-span-6 flex flex-col sm:col-span-3">
                      <div className="my-2">
                        <h5 className="pb-2 text-center text-sm font-bold text-primary-200 dark:text-grey sm:text-left">
                          Healthcare
                        </h5>
                        <HealthCareInfo
                          healthCare={matchingPatient.healthcare}
                          onPatients
                        />
                      </div>
                      <div>
                        <h5 className="pb-2 text-center text-sm font-bold text-primary-200 dark:text-grey sm:text-left">
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
                <div className="col-span-12 rounded bg-white drop-shadow-md dark:bg-black-100 sm:col-span-3">
                  <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
                    {t('patientsPage.alarmHistory')}
                  </div>
                  <p className="p-2">Under construction</p>
                </div>
              </section>
              <div className="col-span-12 h-auto rounded bg-white drop-shadow-md dark:bg-black-100 sm:col-span-2 sm:h-2/6">
                <div className="box-shadow-md h-auto rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey sm:h-1/5">
                  {t('patientsPage.notes')}
                </div>
                <section className="h-auto sm:h-4/5">
                  <Notes />
                </section>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default Patients;
