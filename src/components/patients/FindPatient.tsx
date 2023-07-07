import { useEffect, useState } from 'react';
import useAlarmsStore from '../../stores/AlarmsStore';
import PatientType from '../../types/PatientType';
import NurseTwo from '../../assets/img/illustrations/NurseTwo';

interface FindPatientProps {
  setMatchingPatient: (foundPatient: PatientType | null) => void;
}
function FindPatient({ setMatchingPatient }: FindPatientProps) {
  const patients = useAlarmsStore((state) => state.patients);
  const [inputQuery, setInputQuery] = useState<string | null>(null);
  const [foundPatient, setFoundPatient] = useState<PatientType[] | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(true); // State to track visibility

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
      regex.test(part) ? (
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

  return (
    <section className="col-span-12 flex w-full flex-col rounded bg-white drop-shadow-md dark:bg-black-100">
      <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
        Database
      </div>
      <input
        id="patient-input"
        placeholder="Find patient by name"
        className="relative m-2 rounded border-2 border-primary-200 p-2 text-sm focus:outline-primary-200 dark:bg-black-100"
        onChange={(e) => setInputQuery(e.target.value)}
        onFocus={() => {
          setIsResultVisible(true);
          setFoundPatient(patients);
        }}
      />
      <div className="flex h-full items-center justify-center ">
        {isResultVisible && foundPatient && (
          <div className="absolute top-24 z-20 w-full bg-white p-2 dark:text-grey">
            {foundPatient?.map((patient) => (
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelection(patient)}
                onKeyDown={() => handleSelection(patient)}
                className="hover:bg-primary-200 hover:text-white dark:hover:bg-primary-300"
                key={patient.profile.id}
              >
                <p>{highlightMatch(patient.profile.name, inputQuery || '')}</p>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col items-center justify-center">
          {!foundPatient && (
            <>
              <div className="w-24">
                <NurseTwo />
              </div>
              <h5 className="my-2">
                Find any patient in the database first, patient will be
                displayed here.
              </h5>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default FindPatient;
