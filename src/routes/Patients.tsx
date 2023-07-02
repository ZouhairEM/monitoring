import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NurseTwo from '../assets/img/illustrations/NurseTwo';
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
        <div className="h-full items-center justify-center">
          <div className="grid h-1/4 grid-cols-12 gap-2">
            <FindPatient setMatchingPatient={setMatchingPatient} />
          </div>
          <div>
            {matchingPatient ? (
              <section className="grid w-full grid-cols-12 gap-2 rounded drop-shadow-md">
                <div className="col-span-8 bg-white">
                  <div className="grid grid-cols-6">
                    <div className="col-span-3">
                      <PatientBio profile={matchingPatient.profile} />
                    </div>
                    <div className="col-span-3 mt-5 flex flex-col justify-end gap-2">
                      <h5 className="text-sm font-bold text-primary-200 dark:text-grey">
                        Healthcare
                      </h5>
                      <HealthCareInfo
                        healthCare={matchingPatient.healthcare}
                        onPatients
                      />
                      <h5 className="mt-2 text-sm font-bold text-primary-200 dark:text-grey">
                        Emergency Contact
                      </h5>
                      <EmergencyContact
                        emergencyContact={matchingPatient.emergency_contact}
                        onPatients
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-4 rounded bg-white p-2 drop-shadow-md">
                  <h4>Alarm history</h4>
                </div>
              </section>
            ) : (
              <div className="w-24">
                <NurseTwo />
              </div>
            )}
          </div>
          <div className="col-span-2 mt-2 h-1/4 rounded bg-white p-2 drop-shadow-md">
            <h4>Notes</h4>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Patients;
