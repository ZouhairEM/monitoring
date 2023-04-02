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
  const alarms: AlarmEntryType[] = useAlarmsStore((state) => state.alarms);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const patient: any = useAlarmsStore((state) => state.correspondingPatient);
  const sortByField = useAlarmsStore((state) => state.sortByField);
  const [, setSort] = useState(false);
  const [alarmsPerPage, setAlarmsPerPage] = useState(15);
  const lastIndex = currentPage * alarmsPerPage;
  const alarmsIndex = lastIndex - alarmsPerPage;
  const maxPage = Math.ceil(alarms.length / alarmsPerPage);
  const pageNums = [];
  const currentAlarms = [];

  const handleToggle = (id: number) => {
    setVisibleControlPanel(!visibleControlPanel);
    if (visibleControlPanel) {
      setAlarmsPerPage(10);
    } else {
      setAlarmsPerPage(13);
    }
    setClickedAlarm(id);
  };

  const handleSortByField = (id: string) => {
    sortByField(id);
    setSort(true);
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
          <h5 className="font-medium text-center rounded px-3 py-1 bg-green dark:bg-black-200 text-white hover:bg-darkPrimary">
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
      <AlarmBio key={entry.id} entry={entry} onToggle={handleToggle} />
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
    <div className="flex gap-2">
      <div className="section-header section-footer bg-green dark:bg-black-100">
        <SideBar />
      </div>
      <main className="grid grid-cols-9 gap-2 dark:bg-black-200 w-full">
        <section className="section-header section-footer col-span-2 bg-white drop-shadow-md dark:bg-black-100">
          {patient ? (
            patient.map((patientInfo: PatientType) => (
              <PatientBio
                profile={patientInfo.profile}
                key={patientInfo.profile.name}
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
              patient.map((patientInfo: PatientType) => (
                <HealthCare
                  healthCare={patientInfo.healthcare}
                  key={patientInfo.healthcare.plan}
                />
              ))
            ) : (
              <HealthCare healthCare={patient} />
            )}
            {patient ? (
              patient.map((patientInfo: PatientType) => (
                <EmergencyContact
                  emergencyContact={patientInfo.emergency_contact}
                  key={patientInfo.emergency_contact.name}
                />
              ))
            ) : (
              <EmergencyContact emergencyContact={patient} />
            )}
          </div>
        </section>
        <div className="flex flex-col justify-between gap-2 col-span-7 dark:bg-black-100">
          <div className="section-header section-footer flex flex-col h-full bg-white drop-shadow-md">
            <div
              className={`section-header grid grid-cols-3 sm:grid-cols-12 bg-green dark:bg-black-200 text-white font-medium p-2 ${
                visibleControlPanel ? 'pr-4' : ''
              }`}
            >
              {entryTypes.map((entryType, i) => (
                <div
                  className={`col-span-2 flex gap-4 justify-end items-center font-bold pl-4 ${
                    i === 0 ? 'pl-6' : ''
                  }`}
                  key={entryType}
                  onClick={() => handleSortByField(entryType)}
                  onKeyDown={() => handleSortByField(entryType)}
                  role="button"
                  tabIndex={0}
                >
                  {entryType}
                  <svg
                    className="w-4 h-4"
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
              <div
                className={`${
                  visibleControlPanel ? 'responsive-client-list' : ''
                }`}
              >
                {currentAlarms}
              </div>
              <div className="flex">{pageNums}</div>
            </div>
          </div>
          <div
            className={`section-header section-footer bg-white drop-shadow-md ${
              visibleControlPanel ? 'block' : 'hidden'
            }`}
          >
            <ControlPanel clickedAlarm={clickedAlarm} onToggle={handleToggle} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
