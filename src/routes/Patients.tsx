import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FindPatient from '../components/patients/FindPatient';
import PatientType from '../types/PatientType';
import PatientBio from '../components/monitoring/PatientBio';
import HealthCareInfo from '../components/monitoring/HealthCareInfo';
import EmergencyContact from '../components/monitoring/EmergencyContact';

function Patients() {
  const { t } = useTranslation();
  const [matchingPatient, setMatchingPatient] = useState<PatientType | null>(
    null
  );

  return (
    <div className="w-full">
      <main className="flex h-[754px] w-full flex-col gap-4 p-[1px] md:mb-0">
        <h1 className="dark:text-grey">{t('patientsPage.title')}</h1>
        <div className="flex h-full flex-col gap-4">
          <div
            className={`grid grid-cols-12 ${
              matchingPatient ? 'h-1/4' : 'h-full'
            }`}
          >
            <FindPatient setMatchingPatient={setMatchingPatient} />
          </div>
          {matchingPatient ? (
            <>
              <section className="-z-10 grid h-2/4 w-full grid-cols-12 gap-4 rounded">
                <div className="col-span-8 bg-white drop-shadow-md dark:bg-black-100">
                  <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
                    Details
                  </div>
                  <div className="grid h-full grid-cols-6">
                    <div className="col-span-3 p-1 px-2">
                      <PatientBio profile={matchingPatient.profile} />
                    </div>
                    <div className="col-span-3 flex flex-col">
                      <div className="my-2">
                        <h5 className="pb-2 text-sm font-bold text-primary-200 dark:text-grey">
                          Healthcare
                        </h5>
                        <HealthCareInfo
                          healthCare={matchingPatient.healthcare}
                          onPatients
                        />
                      </div>
                      <div>
                        <h5 className="pb-2 text-sm font-bold text-primary-200 dark:text-grey">
                          Emergency Contact
                        </h5>
                        <EmergencyContact
                          emergencyContact={matchingPatient.emergency_contact}
                          onPatients
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 rounded bg-white drop-shadow-md dark:bg-black-100">
                  <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
                    Alarm history
                  </div>
                </div>
              </section>
              <div className="col-span-2 h-1/4 rounded bg-white drop-shadow-md dark:bg-black-100">
                <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
                  Notes
                </div>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default Patients;
