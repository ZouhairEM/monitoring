import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import useAlarmsStore from '../../stores/AlarmsStore';
import PatientType from '../../types/PatientType';
import usePatientsStore from '../../stores/PatientsStore';
import NurseTwo from '../../assets/img/illustrations/NurseTwo';

function FindPatient() {
  const patients = useAlarmsStore((state) => state.patients);
  const [inputQuery, setInputQuery] = useState<string | null>(null);
  const [foundPatient, setFoundPatient] = useState<PatientType[] | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(true);
  const matchingPatient = usePatientsStore((state) => state.matchingPatient);
  const setMatchingPatient = usePatientsStore(
    (state) => state.setMatchingPatient
  );
  const target = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (inputQuery) {
      const queriedPatient = patients.filter((patient) =>
        patient.profile.name.toLowerCase().includes(inputQuery.toLowerCase())
      );
      setFoundPatient(queriedPatient);
    } else {
      setFoundPatient(null);
    }
  }, [patients, inputQuery]);

  const highlightMatch = (text: string, query: string) => {
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) && inputQuery !== null ? (
        <span
          className="underline decoration-primary-200 decoration-double"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleSelection = (patient: PatientType) => {
    if (foundPatient) {
      setMatchingPatient(patient);
      setIsResultVisible(false);
    }
  };

  const handleCloseInput = () => {
    if (target?.current) {
      target.current.value = '';
    }
    setMatchingPatient(null);
  };

  return (
    <section className="col-span-12 flex w-full flex-col rounded bg-white drop-shadow-md dark:bg-black-100">
      <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
        {t('patientsPage.database')}
      </div>
      <div
        className={`flex flex-col ${
          matchingPatient ? 'h-full justify-center' : 'mt-2'
        }`}
      >
        <div className="relative m-2 rounded">
          <input
            ref={target}
            placeholder={`${
              matchingPatient
                ? matchingPatient.profile.name
                : t('patientsPage.findByName')
            }`}
            className={`z-10 w-full rounded border-2 border-primary-200 p-2 text-sm outline-none dark:bg-black-100 ${
              isResultVisible ? 'isResultVisible' : ''
            }`}
            onChange={(e) => setInputQuery(e.target.value)}
            onFocus={() => {
              setIsResultVisible(true);
              setFoundPatient(patients);
            }}
          />
          {matchingPatient && (
            <button
              type="submit"
              onClick={() => handleCloseInput()}
              onKeyDown={() => handleCloseInput()}
              tabIndex={0}
            >
              <CloseIcon className="absolute right-2 top-2 dark:text-grey" />
            </button>
          )}

          <div
            className={`flex h-full items-center justify-center ${
              isResultVisible ? 'block' : 'hidden'
            }`}
          >
            {isResultVisible && foundPatient && (
              <div className="0 absolute top-8 z-20 w-full rounded rounded-t-none border-2 border-t-0 border-primary-200 bg-white p-2 dark:bg-black-100 dark:text-grey">
                {foundPatient?.map((patient) => (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleSelection(patient)}
                    onKeyDown={() => handleSelection(patient)}
                    className="hover:bg-primary-200 hover:text-white dark:hover:bg-primary-300"
                    key={patient.profile.id}
                  >
                    <p>
                      {highlightMatch(patient.profile.name, inputQuery || '')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {!matchingPatient && (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="w-24">
            <NurseTwo />
          </div>
          <h5 className="my-2 text-center">
            {t('patientsPage.findPatientDescription')}
          </h5>
        </div>
      )}
    </section>
  );
}

export default FindPatient;
