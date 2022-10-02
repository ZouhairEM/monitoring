import SideBar from '../components/SideBar';
import PatientBio from '../components/PatientBio';
import AlarmBio from '../components/AlarmBio';
import AlarmInfo from '../components/AlarmInfo';

function Home() {
  type AlarmEntry = {
    level?: number;
    alarm?: string;
    patient?: string;
    time?: string;
    status?: boolean;
    room?: string;
  };

  const alarmInfo: any[] = [
    {
      level: 1,
      alarm: 'acoustic',
      patient: 'Placeholder person',
      time: '12:01',
      status: true,
      room: '21',
    },
  ];

  const entries: any[] = [
    {
      level: 1,
      alarm: 'acoustic',
      patient: 'Placeholder person',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      level: 2,
      alarm: 'acoustic',
      patient: 'Placeholder person',
      time: '12:02',
      status: false,
      room: '11',
    },
    {
      level: 2,
      alarm: 'acoustic',
      patient: 'Placeholder person',
      time: '12:02',
      status: false,
      room: '11',
    },
  ];

  const patientGuy: any[] = [
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
    <main className="grid grid-cols-10 gap-2 mx-2 dark:bg-black-200 transition duration-500">
      <div className="col-span-1 bg-green dark:bg-black-100 h-full  transition duration-500">
        <SideBar />
      </div>
      <div className="col-span-2 h-full bg-white dark:bg-black-200 drop-shadow-md transition duration-500">
        {patientGuy.map((patient) => (
          <PatientBio patient={patient} key={patient.name} />
        ))}
        {alarmInfo.map((alarm) => (
          <AlarmInfo alarm={alarm} key={alarm.id} />
        ))}
      </div>
      <div className="col-span-7 bg-white drop-shadow-lg">
        <div className="grid grid-cols-3 sm:grid-cols-6 text-left gap-4 bg-green text-white font-medium p-2">
          {entryTypes.map((entryType) => (
            <div className="flex justify-between items-center" key={entryType}>
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
