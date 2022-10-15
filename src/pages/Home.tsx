import { useState, useEffect } from 'react';
import useAlarmsStore from '../store/AlarmsStore';
import SideBar from '../components/SideBar';
import PatientBio from '../components/Panel/PatientBio';
import AlarmBio from '../components/Panel/AlarmBio';
import HealthCare from '../components/Panel/HealthCare';
import EmergencyContact from '../components/Panel/EmergencyContact';
import ControlPanel from '../components/Panel/ControlPanel';
import AlarmEntryType from '../types/AlarmEntryType';
import PatientType from '../types/PatientType';

function Home() {
  const [visibleControlPanel, setVisibleControlPanel] = useState(false);
  const [clickedAlarm, setClickedAlarm] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);
  const [alarmsPerPage] = useState(17);
  const alarms: AlarmEntryType[] = useAlarmsStore((state) => state.alarms);
  const patient: any = useAlarmsStore((state) => state.chosenPatient);
  const lastIndex = currentPage * alarmsPerPage;
  const alarmsIndex = lastIndex - alarmsPerPage;
  const maxPage = Math.ceil(alarms.length / alarmsPerPage);
  const pageNums = [];
  const currentAlarms = [];
  const parentMethod = (id: number) => {
    setVisibleControlPanel(!visibleControlPanel);
    setClickedAlarm(id);
  };

  const changePage = (e: { currentTarget: { id: string | number } }) => {
    setCurrentPage(+e.currentTarget.id);
  };

  useEffect(() => {
    if (currentPage > 1) {
      if (currentPage > maxPage) {
        setCurrentPage(maxPage);
      }
    }
  }, [alarms.length, currentPage, maxPage, alarmsPerPage]);

  if (maxPage > 1) {
    for (let i = 1; i <= maxPage; i += 1) {
      pageNums.push(
        <div
          key={i.toString()}
          id={i.toString()}
          className="m-1"
          onClick={changePage}
          onKeyDown={changePage}
          role="button"
          tabIndex={0}
        >
          <h5 className="font-medium text-center rounded px-3 py-1 bg-green dark:bg-black-200 text-white hover:bg-darkGreen">
            {i}
          </h5>
        </div>
      );
    }
  }

  for (let i = alarmsIndex; i < currentPage * alarmsPerPage; i += 1) {
    const entry = alarms[i];
    if (!entry) break;
    currentAlarms.push(
      <AlarmBio
        key={entry.id}
        entry={entry}
        onToggle={parentMethod}
        visibleControlPanel={visibleControlPanel}
      />
    );
  }

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
      <main className="grid grid-cols-9 gap-4 mx-2 dark:bg-black-200 w-full">
        <div className="col-span-3 bg-white dark:bg-black-100 drop-shadow-md border-2 border-green">
          {patient ? (
            patient.map((patientObj: PatientType) => (
              <PatientBio
                profile={patientObj.profile}
                key={patientObj.profile.name}
              />
            ))
          ) : (
            <PatientBio profile={patient} />
          )}
          <div
            className="flex flex-col gap-1 overflow-y-scroll noscrollbar"
            style={{ maxHeight: 430 }}
          >
            {patient ? (
              patient.map((patientObj: PatientType) => (
                <HealthCare
                  healthCare={patientObj.healthcare}
                  key={patientObj.healthcare.plan}
                />
              ))
            ) : (
              <HealthCare healthCare={patient} />
            )}
            {patient ? (
              patient.map((patientObj: PatientType) => (
                <EmergencyContact
                  emergencyContact={patientObj.emergency_contact}
                  key={patientObj.emergency_contact.name}
                />
              ))
            ) : (
              <EmergencyContact emergencyContact={patient} />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 col-span-6 dark:bg-black-100">
          <div className="flex flex-col h-full border-2 border-green">
            <div className="grid grid-cols-3 sm:grid-cols-12 gap-2 bg-green dark:bg-black-200 text-white font-medium p-2">
              {entryTypes.map((entryType) => (
                <div
                  className={` col-span-2 flex justify-between`}
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
            <div className="flex flex-col h-full justify-between">
              <div>{currentAlarms}</div>
              <div className="flex">{pageNums}</div>
            </div>
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
