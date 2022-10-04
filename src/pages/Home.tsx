import SideBar from '../components/SideBar';
import PatientBio from '../components/PatientBio';
import AlarmBio from '../components/AlarmBio';
import AlarmInfo from '../components/AlarmInfo';
import Patient from '../types/Patient';
import AlarmInfoType from '../types/AlarmInfoType';
import AlarmEntryType from '../types/AlarmEntryType';

function Home() {
  const alarmInfo: AlarmInfoType[] = [
    {
      level: 1,
      name: 'placeholder',
      room: '21',
      dob: '1950',
      age: 72,
      gender: 'male',
      enrollDate: '2022',
    },
  ];
  const entries: AlarmEntryType[] = [
    {
      id: 1,
      level: 1,
      alarm: 'acoustic',
      patient: 'Jack Sparrow',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 2,
      level: 2,
      alarm: 'acoustic',
      patient: 'Edward Scissorhands',
      time: '12:02',
      status: false,
      room: '11',
    },
    {
      id: 3,
      level: 2,
      alarm: 'acoustic',
      patient: 'Johnny B. Goode',
      time: '12:02',
      status: false,
      room: '11',
    },
  ];

  const patients: Patient[] = [
    {
      name: 'Rick James',
      room: '14',
      dob: '12/12/1950',
      age: 71,
      gender: 'Male',
      enrollDate: '12/01/2020',
    },
  ];

  const entryTypes: string[] = [
    'Priority level',
    'Type of Alarm',
    'Patient',
    'Time',
    'Status',
    'Room',
  ];

  return (
    <main className="grid grid-cols-10 gap-2 mx-2 dark:bg-black-200">
      <div className="col-span-1 bg-green dark:bg-black-100 h-full ">
        <SideBar />
      </div>
      <div className="col-span-2 h-full bg-white dark:bg-black-100 drop-shadow-md">
        {patients.map((patient) => (
          <PatientBio patient={patient} key={patient.name} />
        ))}
        {alarmInfo.map((alarm) => (
          <AlarmInfo alarm={alarm} key={alarm.name} />
        ))}
      </div>
      <div className="col-span-7 bg-white dark:bg-black-100 drop-shadow-lg">
        <div className="grid grid-cols-3 sm:grid-cols-6 text-left gap-2 bg-green dark:bg-black-200 text-white font-medium p-2">
          {entryTypes.map((entryType) => (
            <div
              className="flex justify-between items-center text-right"
              key={entryType}
            >
              {entryType}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          ))}
        </div>
        {entries.map((entry) => (
          <AlarmBio key={entry.level} entry={entry} />
        ))}
      </div>
    </main>
  );
}

export default Home;
