import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import useAlarmsStore from '../../stores/AlarmsStore';
import PatientType from '../../types/PatientType';
import usePatientsStore from '../../stores/PatientsStore';
import NurseTwo from '../../assets/img/illustrations/NurseTwo';
import useSettingsStore from '../../stores/SettingsStore';

function FindPatient() {
  const patients = useAlarmsStore((state) => state.patients);
  const [inputQuery, setInputQuery] = useState<string>('');
  const [foundPatient, setFoundPatient] = useState<PatientType[] | null>(null);
  const matchingPatient = usePatientsStore((state) => state.matchingPatient);
  const setMatchingPatient = usePatientsStore((state) => state.setMatchingPatient);
  const isResultVisible = useSettingsStore((state) => state.isResultVisible);
  const target = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();
  const setIsResultVisible = useSettingsStore((state) => state.setIsResultVisible);

  useEffect(() => {
    if (inputQuery.length > 1) {
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
    return parts.map((part) =>
      regex.test(part) && inputQuery !== '' && inputQuery.length > 1 && !matchingPatient ? (
        <span className="underline decoration-primary-200 decoration-double" key={part}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const selectPatient = (patient: PatientType) => {
    if (foundPatient) {
      setMatchingPatient(patient);
      setIsResultVisible(false);
    }
  };

  const closeInput = () => {
    if (target?.current) {
      target.current.value = '';
    }
    setInputQuery('');
    setMatchingPatient(null);
    setIsResultVisible(false);
  };

  return (
    <section className="col-span-12 flex w-full flex-col rounded rounded-t-lg bg-white drop-shadow-md dark:bg-black-100">
      <div className="panel-heading">{t('patientsPage.database')}</div>
      <div className={`flex flex-col ${matchingPatient ? 'h-full justify-center' : 'mt-2'}`}>
        <div className="relative m-2 rounded">
          <input
            ref={target}
            placeholder={`${
              matchingPatient ? matchingPatient.profile.name : t('patientsPage.findByName')
            }`}
            value={matchingPatient?.profile.name ?? inputQuery}
            className="w-full rounded border-2 border-primary-200 p-2 text-sm outline-none dark:bg-black-100 dark:text-grey-200"
            onChange={(e) => {
              setMatchingPatient(null);
              return setInputQuery(e.target.value);
            }}
            onFocus={() => {
              setIsResultVisible(true);
              setFoundPatient(patients);
            }}
          />
          {matchingPatient && (
            <button
              type="submit"
              onClick={() => closeInput()}
              onKeyDown={() => closeInput()}
              tabIndex={0}
            >
              <CloseIcon className="absolute right-2 top-2 dark:text-grey-200" />
            </button>
          )}

          <div
            className={`flex h-full items-center justify-center ${
              isResultVisible ? 'block' : 'hidden'
            }`}
          >
            {isResultVisible && foundPatient && (
              <div className="0 absolute top-7 z-20 w-full rounded rounded-t-none border-2 border-t-0 border-primary-200 bg-white p-2 dark:bg-black-100 dark:text-grey-200">
                {foundPatient?.map((patient) => (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => selectPatient(patient)}
                    onKeyDown={() => selectPatient(patient)}
                    className="hover:bg-primary-200 hover:text-white dark:hover:bg-primary-300"
                    key={patient.profile.id}
                  >
                    <p>{highlightMatch(patient.profile.name, inputQuery || '')}</p>
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
          <h5 className="my-2 w-2/3 text-center">
            {inputQuery && foundPatient?.length === 0
              ? t('patientsPage.noPatientFoundDescription')
              : t('patientsPage.findPatientDescription')}
          </h5>
        </div>
      )}
    </section>
  );
}

export default FindPatient;
