import { useState } from 'react';
import SideBar from '../components/SideBar';
import PatientBio from '../components/Panel/PatientBio';
import AlarmBio from '../components/Panel/AlarmBio';
import AlarmInfo from '../components/Panel/AlarmInfo';
import HealthCare from '../components/Panel/HealthCare';
import EmergencyContact from '../components/Panel/EmergencyContact';
import ControlPanel from '../components/Panel/ControlPanel';
import useAlarmsStore from '../store/AlarmsStore';
import Patient from '../types/Patient';
import AlarmInfoType from '../types/AlarmInfoType';
import AlarmEntryType from '../types/AlarmEntryType';
import HealthCareType from '../types/HealthCareType';
import EmergencyContactType from '../types/EmergencyContactType';

function Home() {
  const [visibleControlPanel, setVisibleControlPanel] = useState(false);
  const [clickedAlarm, setClickedAlarm] = useState(null);
  const alarms: AlarmEntryType[] = useAlarmsStore((state) => state.alarms);
  const parentMethod = (id) => {
    setVisibleControlPanel(true);
    setClickedAlarm(id);
  };
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
  const healthCareInfo: HealthCareType[] = [
    {
      healthcare:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse excepturi quia nobis eius rem fugit minus, minima, asperiores sit ad maxime accusantium praesentium facilis suscipit animi? Provident soluta nobis et!',
    },
  ];

  const patients: Patient[] = [
    {
      name: 'Tyrion Lanister',
      room: '21',
      dob: '12/12/2000',
      age: 22,
      gender: 'Male',
      enrollDate: '12/01/2020',
    },
  ];

  const emergencyContact: EmergencyContactType[] = [
    {
      name: 'John James',
      relation: 'Brother',
      Address: '12/12/1950',
      phoneNumber: 12345,
      workPhoneNum: 12345,
    },
  ];

  const entryTypes: string[] = [
    'Priority',
    'Alarm',
    'Patient',
    'Time',
    'Status',
    'Room',
  ];

  return (
    <div className="flex">
      <div className="bg-green dark:bg-black-100">
        <SideBar />
      </div>
      <main className="grid grid-cols-9 gap-4 mx-2 dark:bg-black-200">
        <div className="col-span-3 bg-white dark:bg-black-100 drop-shadow-md border border-2 border-green">
          {patients.map((patient) => (
            <PatientBio patient={patient} key={patient.name} />
          ))}
          <div
            className="flex flex-col gap-1 overflow-y-scroll noscrollbar"
            style={{ maxHeight: 430 }}
          >
            {alarmInfo.map((alarm) => (
              <AlarmInfo alarm={alarm} key={alarm.name} />
            ))}
            {healthCareInfo.map((healthCare) => (
              <HealthCare healthCare={healthCare} key={healthCare.healthcare} />
            ))}
            {emergencyContact.map((contact) => (
              <EmergencyContact emergencyContact={contact} key={contact.name} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 col-span-6 dark:bg-black-100">
          <div className="h-full border border-2 border-green">
            <div className="grid grid-cols-3 sm:grid-cols-12 bg-green dark:bg-black-200 text-white font-medium p-2">
              {entryTypes.map((entryType, i) => (
                <div
                  className={`${
                    i === 0 ? 'col-span-1' : 'col-span-2'
                  } flex gap-2 justify-end`}
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
            {alarms.map((entry) => (
              <AlarmBio key={entry.id} entry={entry} onToggle={parentMethod} />
            ))}
          </div>
          <div className={`${visibleControlPanel ? 'block' : 'hidden'}`}>
            <ControlPanel clickedAlarm={clickedAlarm} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
