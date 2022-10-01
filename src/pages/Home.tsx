import SideBar from '../components/SideBar';
import PatientPanel from '../components/PatientPanel';
import AlarmBio from '../components/AlarmBio';

function Home() {
  type AlarmEntry = {
    level?: number;
    alarm?: string;
    patient?: string;
    time?: string;
    status?: boolean;
    room?: string;
  };

  const singleAlarmEntry: AlarmEntry = {
    level: 1,
  };

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

  return (
    <main className="grid grid-cols-10 gap-2 mx-2 dark:bg-black-200 transition duration-500">
      <div className="col-span-1 bg-green dark:bg-black-100 h-full  transition duration-500">
        <SideBar />
      </div>
      <div className="col-span-2 h-full bg-white dark:bg-black-200 drop-shadow-md transition duration-500">
        <PatientPanel />
      </div>
      <div className="col-span-7 bg-white drop-shadow-lg">
        <div className="grid grid-cols-3 sm:grid-cols-6 text-left bg-grey p-2">
          <div>Priority</div>
          <div>Alarm</div>
          <div>Patient</div>
          <div>Time</div>
          <div>Status</div>
          <div>Room</div>
        </div>
        {entries.map((entry) => (
          <AlarmBio entry={entry} key={entry.level} />
        ))}
      </div>
    </main>
  );
}

export default Home;
