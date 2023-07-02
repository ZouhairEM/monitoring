import { useEffect, useState } from 'react';
import useAlarmsStore from '../../stores/AlarmsStore';
import PatientType from '../../types/PatientType';

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

  const handleSelection = (patient: any) => {
    if (foundPatient) {
      setMatchingPatient(patient);
      setIsResultVisible(false);
      console.log(patient);
    }
  };

  return (
    <section className="col-span-12 my-2 flex w-full flex-col rounded bg-white p-2 drop-shadow-md">
      <h2>Find patient!</h2>
      <input
        id="patient-input"
        placeholder="Find patient by name"
        className="relative rounded border-2 border-primary-300 p-2 capitalize"
        onChange={(e) => setInputQuery(e.target.value)}
        onFocus={() => {
          setIsResultVisible(true);
          setFoundPatient(patients);
        }}
      />
      {isResultVisible && (
        <div className="absolute top-24 w-full bg-white p-2 dark:text-grey">
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
    </section>
  );
}

export default FindPatient;
