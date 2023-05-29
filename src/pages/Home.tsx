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
  const [currentPage, setCurrentPage] = useState(1);
  const alarms: AlarmEntryType[] = useAlarmsStore((state) => state.alarms);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const [clickedAlarm, setClickedAlarm] = useState(activeAlarm);

  const patient = useAlarmsStore<PatientType[] | []>(
    (state) => state.correspondingPatient as any
  );
  const sortByField = useAlarmsStore((state) => state.sortByField);
  const [, setSort] = useState(false);
  const [alarmsPerPage, setAlarmsPerPage] = useState(12);
  const lastIndex = currentPage * alarmsPerPage;
  const alarmsIndex = lastIndex - alarmsPerPage;
  const maxPage = Math.ceil(alarms.length / alarmsPerPage);
  const pageNums = [];
  const currentAlarms = [];

  const handleToggle = (id: number) => {
    setVisibleControlPanel(!visibleControlPanel);
    setClickedAlarm(id);
  };

  useEffect(() => {
    if (visibleControlPanel) {
      setAlarmsPerPage(12);
    } else {
      setAlarmsPerPage(15);
    }
  }, [visibleControlPanel]);

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
          <h5 className="rounded bg-primary-200 px-3 py-1 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200">
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
        index={i}
        entry={entry}
        onToggle={handleToggle}
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
    <div className="flex gap-2">
      <div className="section-header section-footer bg-primary-200 dark:bg-black-100">
        <SideBar />
      </div>
      <main className="grid w-full grid-cols-9 gap-2">
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
            className="noscrollbar flex flex-col gap-1 overflow-y-scroll px-2"
            style={{ maxHeight: 430 }}
          >
            {patient &&
              patient.map((patientInfo: PatientType) => (
                <HealthCare
                  healthCare={patientInfo.healthcare}
                  key={patientInfo.healthcare.plan}
                />
              ))}
            {patient &&
              patient.map((patientInfo: PatientType) => (
                <EmergencyContact
                  emergencyContact={patientInfo.emergency_contact}
                  key={patientInfo.emergency_contact.name}
                />
              ))}
          </div>
        </section>
        <div className="col-span-7 flex flex-col justify-between gap-2">
          <div className="section-header section-footer flex h-full flex-col bg-white drop-shadow-md">
            <div
              className={`section-header mb-2 grid grid-cols-3 gap-2 bg-primary-200 px-4 py-2 text-sm font-medium text-white drop-shadow-md dark:bg-black-200 sm:grid-cols-12 ${
                visibleControlPanel ? 'pr-4' : ''
              }`}
            >
              {entryTypes.map((entryType) => (
                <div
                  className={`flex items-center justify-end gap-2 font-bold 
                    ${entryType === 'Priority' ? 'col-span-2' : ''} 
                    ${entryType === 'Alarm' ? 'col-span-3' : ''} 
                    ${entryType === 'Patient' ? 'col-span-3' : ''} 
                    ${entryType === 'Status' ? 'col-span-2' : ''}
                  `}
                  key={entryType}
                  onClick={() => handleSortByField(entryType)}
                  onKeyDown={() => handleSortByField(entryType)}
                  role="button"
                  tabIndex={0}
                >
                  {entryType}
                  <svg
                    className="h-4 w-4"
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
            <div className="flex h-full flex-col justify-between dark:bg-black-100 dark:text-white">
              <div
                className={`alarm-grid ${
                  visibleControlPanel ? 'responsive-client-list' : ''
                }`}
              >
                {currentAlarms}
              </div>
              <div className="m-2 flex">{pageNums}</div>
            </div>
          </div>
          <div
            className={`section-header section-footer bg-white drop-shadow-md ${
              visibleControlPanel ? 'block' : 'hidden'
            }`}
          >
            <ControlPanel
              clickedAlarm={clickedAlarm}
              setClickedAlarm={setClickedAlarm}
              onToggle={handleToggle}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
