// import rickJames from '../../assets/img/patients/rickjames.png';
import Patient from '../../types/Patient';

interface Props {
  patient: Patient;
}

function PatientBio({ patient }: Props) {
  return (
    <section>
      <div className="flex flex-col">
        <div className="font-extrabold bg-green dark:bg-black-200 text-white p-2">
          Profile
        </div>
        <div className="text-sm p-2">
          {Object.entries(patient).map((el) => (
            <div key={el[0]} className="grid grid-cols-2 mb-1">
              <div className="text-green dark:text-white font-extrabold uppercase text-xs">
                {el[0]}
              </div>
              <div className="text-black-100 dark:text-white text-xs">
                <span className="p-1 dark:bg-black-100">{el[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PatientBio;
