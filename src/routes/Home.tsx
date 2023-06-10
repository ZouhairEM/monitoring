/* eslint-disable react/no-this-in-sfc */
import { useState, useEffect, useReducer, Dispatch } from 'react';
import TagIcon from '@mui/icons-material/Tag';
import useAlarmsStore from '../stores/AlarmsStore';
import useSettingsStore from '../stores/SettingsStore';
import SideBar from '../components/layout/SideBar';
import PatientBio from '../components/home/PatientBio';
import AlarmBio from '../components/home/AlarmBio';
import HealthCare from '../components/home/HealthCare';
import EmergencyContact from '../components/home/EmergencyContact';
import ControlPanel from '../components/home/ControlPanel';
import AlarmEntryType from '../types/AlarmEntryType';
import PatientType from '../types/PatientType';
import Toast from '../components/generic/Toast';

function Home() {
  const alarms: AlarmEntryType[] = useAlarmsStore((state) => state.alarms);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const legalClick = useSettingsStore((state) => state.legalClick);
  const actualAlarms: number[] = useAlarmsStore((state) => state.actualAlarms);
  const currentIndex: number | null = useSettingsStore(
    (state) => state.currentIndex
  );
  const setReactiveAlarms = useAlarmsStore((state) => state.setReactiveAlarms);
  const toast = useSettingsStore((state) => state.toast);
  const closedAlarm = useAlarmsStore((state) => state.closedAlarm);
  const timer = useSettingsStore((state) => state.timer);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  class RandomAlarmGenerator implements AlarmEntryType {
    id: number;

    patient_id: number;

    alarm: string;

    time: string;

    status: string;

    constructor(
      id: number,
      patient_id: number,
      alarm: string,
      time: string,
      status: string
    ) {
      this.id = id;
      this.patient_id = patient_id;
      this.alarm = alarm;
      this.time = time;
      this.status = status;
    }
  }

  const availablePatientIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const availableStatuses = ['Open', 'Done'];
  const availableAlarmTypes = [
    'Loud noise',
    'Fire hazard',
    'Patient up',
    'Help call',
    'Heart monitor',
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generatePatientID = (): number =>
    availablePatientIDs[Math.floor(Math.random() * availablePatientIDs.length)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateHighestAlarmID = (): number =>
    Math.max(...alarms.map((alarm) => alarm.id), 0) + 1;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateAlarmType = (): string =>
    availableAlarmTypes[Math.floor(Math.random() * availableAlarmTypes.length)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateStatus = (): string =>
    availableStatuses[Math.floor(Math.random() * availableStatuses.length)];

  const setLegalClick = useSettingsStore((state) => state.setLegalClick);
  const [, setClickedAlarm] = useState(activeAlarm);

  useEffect(() => {
    const interval = setInterval(() => {
      const generateAlarm: AlarmEntryType = new RandomAlarmGenerator(
        generateHighestAlarmID(),
        generatePatientID(),
        generateAlarmType(),
        '12:02',
        generateStatus()
      );
      setReactiveAlarms(generateAlarm);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [
    RandomAlarmGenerator,
    generateAlarmType,
    generateHighestAlarmID,
    generatePatientID,
    generateStatus,
    setReactiveAlarms,
  ]);

  type State = {
    isPanelVisible: boolean;
    isActive: number;
    currentPage: number;
    alarmsPerPage: number;
  };

  type Action =
    | { type: 'visibility_control_panel'; setPanel: boolean }
    | { type: 'is_active'; setActive: number }
    | { type: 'set_current_page'; setCurrentPage: number }
    | { type: 'alarms_per_page'; setAlarmsPerPage: number };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'visibility_control_panel': {
        return {
          ...state,
          isPanelVisible: action.setPanel,
        };
      }
      case 'is_active': {
        return {
          ...state,
          isActive: action.setActive,
        };
      }
      case 'set_current_page': {
        return {
          ...state,
          currentPage: action.setCurrentPage,
        };
      }
      case 'alarms_per_page': {
        return {
          ...state,
          alarmsPerPage: action.setAlarmsPerPage,
        };
      }
      default:
        return state;
    }
  }

  const initialState: State = {
    isPanelVisible: false,
    isActive: 1,
    currentPage: 1,
    alarmsPerPage: 12,
  };
  const [state, dispatch]: [State, Dispatch<Action>] = useReducer(
    reducer,
    initialState
  );

  const patient = useAlarmsStore<PatientType[] | null>(
    (zustandState) => zustandState.correspondingPatient
  );

  const lastIndex = state.currentPage * state.alarmsPerPage;
  const alarmsIndex = lastIndex - state.alarmsPerPage;
  const maxPages = Math.ceil(actualAlarms.length / state.alarmsPerPage);
  const pageNums = [];
  const currentAlarms = [];

  const handleSelectAlarm = (id: number) => {
    setClickedAlarm(id + 1);
    dispatch({ type: 'visibility_control_panel', setPanel: true });

    if (!state.isPanelVisible) {
      if (
        (id + 1 < lastIndex && id + 1 >= lastIndex - 1) ||
        id + 1 === lastIndex
      ) {
        dispatch({
          type: 'set_current_page',
          setCurrentPage: state.currentPage + 1,
        });
        dispatch({ type: 'is_active', setActive: state.isActive + 1 });
      }
    }
  };

  useEffect(() => {
    if (!patient) {
      dispatch({ type: 'visibility_control_panel', setPanel: false });
    }
    if (state?.isPanelVisible) {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 12 });
      if (state.currentPage === maxPages) {
        dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 12 });
      }
    } else {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 14 });
    }
  }, [state?.isPanelVisible, patient, state.currentPage, maxPages, lastIndex]);

  useEffect(() => {
    if (
      legalClick &&
      currentIndex &&
      currentIndex + 1 > lastIndex &&
      currentIndex + 1 <= actualAlarms?.length
    ) {
      dispatch({
        type: 'set_current_page',
        setCurrentPage: state.currentPage + 1,
      });
      dispatch({ type: 'is_active', setActive: state.isActive + 1 });
    }

    if (
      legalClick &&
      currentIndex &&
      lastIndex - state.alarmsPerPage >= currentIndex + 1
    ) {
      dispatch({
        type: 'set_current_page',
        setCurrentPage: state.currentPage - 1,
      });
      dispatch({ type: 'is_active', setActive: state.isActive - 1 });
    }
  }, [
    alarms,
    legalClick,
    currentIndex,
    state.currentPage,
    state.alarmsPerPage,
    alarmsIndex,
    actualAlarms?.length,
    state.isActive,
    lastIndex,
  ]);

  const changePage = (e: { currentTarget: { id: string | number } }) => {
    setLegalClick(false);
    dispatch({ type: 'is_active', setActive: +e.currentTarget.id });
    dispatch({ type: 'set_current_page', setCurrentPage: +e.currentTarget.id });
  };

  useEffect(() => {
    if (state?.currentPage > 1) {
      if (state?.currentPage > maxPages) {
        dispatch({ type: 'set_current_page', setCurrentPage: maxPages });
      }
    }
  }, [alarms.length, state?.currentPage, maxPages, state?.alarmsPerPage]);
  if (maxPages > 1) {
    for (let index = 1; index <= maxPages; index += 1) {
      pageNums.push(
        <div
          key={index.toString()}
          id={index.toString()}
          className="m-1"
          onClick={changePage}
          onKeyDown={changePage}
          role="button"
          tabIndex={0}
        >
          <h5
            className={`rounded bg-primary-200 px-3 py-1 text-center font-medium text-white  hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300
            ${
              index === state?.isActive
                ? 'bg-primary-300 dark:bg-primary-300 dark:text-white'
                : ''
            }`}
          >
            {index}
          </h5>
        </div>
      );
    }
  }

  for (
    let i = alarmsIndex;
    i < state.currentPage * state.alarmsPerPage;
    i += 1
  ) {
    const entry = alarms[i];
    if (!entry) break;

    currentAlarms.push(
      <AlarmBio
        key={entry.id}
        entryId={entry.id}
        entry={entry}
        index={i}
        onToggle={handleSelectAlarm}
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
    <div className="flex flex-col gap-2 sm:flex-row">
      <SideBar />
      <main className="grid w-full grid-cols-9 gap-2">
        <section className="section-header section-footer box-shadow-md col-span-12 bg-white dark:bg-black-100 md:col-span-2 ">
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
          <div className="noscrollbar flex flex-col gap-1 overflow-y-scroll px-2 pb-2 sm:pb-0">
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
        <div className="col-span-12 flex flex-col justify-between gap-2 md:col-span-7">
          <div className="section-header section-footer box-shadow-md flex h-full flex-col bg-white">
            <div
              className={`section-header box-shadow-md grid grid-cols-6 gap-4 bg-primary-200 px-4 py-2 pb-2 text-sm font-medium text-white dark:bg-black-200 md:grid-cols-9 ${
                state?.isPanelVisible ? 'pr-4' : ''
              }`}
            >
              <span className="hidden items-center justify-end md:flex">
                <TagIcon
                  className="dark:text-grey"
                  style={{ fontSize: '16px' }}
                />
              </span>
              {entryTypes.map((entryType) => (
                <div
                  className={`flex items-center justify-center gap-2 font-bold dark:text-grey md:justify-end ${
                    entryType === 'Alarm' || entryType === 'Patient'
                      ? 'col-span-2'
                      : 'col-span-2 md:col-span-1'
                  }`}
                  key={entryType}
                  role="button"
                  tabIndex={0}
                >
                  {entryType}
                  <svg
                    className="down-chevron h-4 w-4"
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

            <div className="flex h-full flex-col justify-between overflow-hidden dark:bg-black-100 dark:text-grey">
              <div
                className={`alarm-grid my-3 pb-4 sm:pb-0 ${
                  state?.isPanelVisible
                    ? 'overflow-auto md:overflow-hidden'
                    : ''
                }`}
              >
                {currentAlarms}
              </div>
              <div className="m-2 flex">{pageNums}</div>
            </div>
          </div>
          <div
            className={`section-header section-footer box-shadow-md bg-white ${
              state?.isPanelVisible ? 'block' : 'hidden'
            }`}
          >
            <ControlPanel
              setClickedAlarm={setClickedAlarm}
              onSelectAlarm={handleSelectAlarm}
            />
          </div>
        </div>
        {toast && closedAlarm && (
          <Toast timer={timer} icon="close">
            Alarm <TagIcon style={{ fontSize: '14px' }} />
            {closedAlarm[0].id < 10
              ? `0${closedAlarm[0].id}`
              : closedAlarm[0].id}{' '}
            has been closed
          </Toast>
        )}
      </main>
    </div>
  );
}

export default Home;
