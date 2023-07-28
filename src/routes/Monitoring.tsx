import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TagIcon from '@mui/icons-material/Tag';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useAlarmsStore from '../stores/AlarmsStore';
import useSettingsStore from '../stores/SettingsStore';
import PatientBio from '../components/monitoring/PatientBio';
import AlarmBio from '../components/monitoring/AlarmBio';
import HealthCareInfo from '../components/monitoring/HealthCareInfo';
import EmergencyContact from '../components/monitoring/EmergencyContact';
import ControlPanel from '../components/monitoring/ControlPanel';
import PatientType from '../types/PatientType';
import Toast from '../components/generic/Toast';
import useBreakpoint from '../hooks/useBreakpoint';
import Modal from '../components/generic/Modal';
import FollowupModal from '../components/composables/FollowupModal';
import EntryTypes from '../data/entrytypes';
import useMonitoringReducer from '../libs/MonitoringReducer';

function Monitoring() {
  const alarmsStore = useAlarmsStore((state) => state);
  const settingsStore = useSettingsStore((state) => state);
  const patient = useAlarmsStore<PatientType[] | null>((state) => state.correspondingPatient);
  const [, setClickedAlarm] = useState(alarmsStore.activeAlarm);
  const [state, dispatch] = useMonitoringReducer();
  const breakpoint = useBreakpoint();
  const { t } = useTranslation();

  const lastIndex = state.currentPage * state.alarmsPerPage;
  const alarmsIndex = lastIndex - state.alarmsPerPage;
  const maxPages = Math.ceil(alarmsStore.actualAlarms.length / state.alarmsPerPage);
  const pageNums = [];
  const currentAlarms = [];

  const handleAlarmsSort = (id: string) => {
    if (id === 'Patient') {
      alarmsStore.setSortedAlarms('patient_id');
    } else if (id === 'Priority') {
      alarmsStore.setSortedAlarms('alarm');
    } else {
      alarmsStore.setSortedAlarms(id.toLowerCase());
    }
  };

  const handleSelectAlarm = (id: number) => {
    setClickedAlarm(id + 1);
    dispatch({ type: 'visibility_control_panel', setPanel: true });

    if (!state.isPanelVisible) {
      if ((id + 1 < lastIndex && id + 1 >= lastIndex - 1) || id + 1 === lastIndex) {
        dispatch({
          type: 'set_current_page',
          setCurrentPage: state.currentPage + 1,
        });
        dispatch({ type: 'is_active', setActive: state.isActive + 1 });
      }
    }
  };

  const changePage = (e: { currentTarget: { id: string | number } }) => {
    settingsStore.setLegalClick(false);
    dispatch({ type: 'is_active', setActive: +e.currentTarget.id });
    dispatch({ type: 'set_current_page', setCurrentPage: +e.currentTarget.id });
  };

  useEffect(() => {
    if (!patient) {
      dispatch({ type: 'visibility_control_panel', setPanel: false });
    }
    if (state?.isPanelVisible && breakpoint !== 'sm' && breakpoint !== 'md') {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 12 });
      if (state.currentPage === maxPages) {
        dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 12 });
      }
    } else if (breakpoint === 'sm' || breakpoint === 'md') {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 10 });
    } else {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 14 });
    }
  }, [
    state?.isPanelVisible,
    patient,
    state.currentPage,
    maxPages,
    lastIndex,
    breakpoint,
    dispatch,
  ]);

  useEffect(() => {
    if (
      settingsStore.legalClick &&
      settingsStore.currentIndex &&
      settingsStore.currentIndex + 1 > lastIndex &&
      settingsStore.currentIndex + 1 <= alarmsStore.actualAlarms?.length
    ) {
      dispatch({
        type: 'set_current_page',
        setCurrentPage: state.currentPage + 1,
      });
      dispatch({ type: 'is_active', setActive: state.isActive + 1 });
    }

    if (
      settingsStore.legalClick &&
      settingsStore.currentIndex &&
      lastIndex - state.alarmsPerPage >= settingsStore.currentIndex + 1
    ) {
      dispatch({
        type: 'set_current_page',
        setCurrentPage: state.currentPage - 1,
      });
      dispatch({ type: 'is_active', setActive: state.isActive - 1 });
    }
  }, [
    alarmsStore.alarms,
    settingsStore.legalClick,
    settingsStore.currentIndex,
    state.currentPage,
    state.alarmsPerPage,
    alarmsIndex,
    alarmsStore.actualAlarms?.length,
    state.isActive,
    lastIndex,
    dispatch,
  ]);

  useEffect(() => {
    if (state?.currentPage > 1) {
      if (state?.currentPage > maxPages) {
        dispatch({ type: 'set_current_page', setCurrentPage: maxPages });
      }
    }
  }, [alarmsStore.alarms.length, state?.currentPage, maxPages, state.alarmsPerPage, dispatch]);
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
            className={`rounded bg-primary-200 px-3 py-1 text-center font-medium text-white  hover:bg-primary-300 dark:bg-black-200 dark:text-grey-200 dark:hover:bg-primary-300
            ${
              index === state?.isActive ? 'bg-primary-300 dark:bg-primary-300 dark:text-white' : ''
            }`}
          >
            {index}
          </h5>
        </div>
      );
    }
  }

  for (let i = alarmsIndex; i < state.currentPage * state.alarmsPerPage; i += 1) {
    const entry = alarmsStore.alarms[i];
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

  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row">
      <main className="mb-11 grid h-[754px] w-full grid-cols-9 gap-2 p-[1px] md:mb-0">
        <section className="box-shadow-md col-span-12 rounded-b-lg rounded-t-lg bg-white dark:bg-black-100 md:col-span-2">
          <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey-200">
            {t('patientBio.title')}
          </div>
          <div className={`${!patient ? 'h-full' : ''} px-2`}>
            {patient ? (
              patient.map((patientInfo: PatientType) => (
                <PatientBio profile={patientInfo.profile} key={patientInfo.profile.name} />
              ))
            ) : (
              <PatientBio profile={patient} />
            )}
          </div>

          <div className="noscrollbar flex flex-col gap-1 overflow-y-scroll px-2 pb-2 sm:pb-0">
            {patient &&
              patient.map((patientInfo: PatientType) => (
                <HealthCareInfo
                  healthCare={patientInfo.healthcare}
                  key={patientInfo.healthcare.plan}
                  onMonitoring
                />
              ))}
            {patient &&
              patient.map((patientInfo: PatientType) => (
                <EmergencyContact
                  emergencyContact={patientInfo.emergency_contact}
                  key={patientInfo.emergency_contact.name}
                  onMonitoring
                />
              ))}
          </div>
        </section>
        <div className="col-span-12 flex flex-col justify-between gap-2 md:col-span-7">
          <div className="alarm-grid box-shadow-md flex h-full flex-col rounded-b-lg rounded-t-lg bg-white">
            <div className="flex h-full flex-col justify-between overflow-hidden dark:bg-black-100 dark:text-grey-200">
              <div
                className={`alarm-grid pb-4 sm:pb-0 ${
                  state?.isPanelVisible ? 'overflow-auto md:overflow-hidden' : ''
                }`}
              >
                <div
                  className={`box-shadow-md alarm-bio grid w-[660px] grid-cols-9 gap-4 rounded-t-lg bg-primary-200 px-4 py-2 pb-2 text-sm font-medium text-white dark:bg-black-200 sm:w-full md:w-[710px] lg:w-full ${
                    state?.isPanelVisible ? 'pr-4' : ''
                  }`}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleAlarmsSort('id')}
                    onKeyDown={() => handleAlarmsSort('id')}
                    className="col-span-1 flex justify-end"
                  >
                    <TagIcon className="dark:text-grey-200" style={{ fontSize: '16px' }} />
                  </div>
                  <div className="col-span-8">
                    <div className="grid grid-cols-8">
                      {EntryTypes().map((entryType) => (
                        <div
                          className={`flex justify-end px-0 font-bold dark:text-grey-200 md:justify-end ${
                            entryType === t('entryTypes.alarm') ||
                            entryType === t('entryTypes.patient')
                              ? 'col-span-2'
                              : 'col-span-1'
                          }`}
                          key={entryType}
                          role="button"
                          onClick={() => handleAlarmsSort(entryType)}
                          onKeyDown={() => handleAlarmsSort(entryType)}
                          tabIndex={0}
                        >
                          {entryType}{' '}
                          <span className="hidden sm:block">
                            <ExpandMoreIcon style={{ fontSize: '20px' }} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {currentAlarms}
              </div>
              <div className="m-2 flex">{pageNums}</div>
            </div>
          </div>
          <div
            className={`box-shadow-md rounded-b-lg rounded-t-lg bg-white ${
              state?.isPanelVisible ? 'block' : 'hidden'
            }`}
          >
            <ControlPanel setClickedAlarm={setClickedAlarm} onSelectAlarm={handleSelectAlarm} />
          </div>
        </div>
        {settingsStore.toast && alarmsStore.closedAlarm && (
          <Toast timer={settingsStore.timer} icon="close">
            <div className="flex">
              <p>
                {t('alarm')}
                <span className="mx-1 font-bold">
                  #
                  {alarmsStore.closedAlarm[0].id < 10
                    ? `0${alarmsStore.closedAlarm[0].id}`
                    : alarmsStore.closedAlarm[0].id}
                </span>
                {t('alarmHasBeenClosed')}
              </p>
            </div>
          </Toast>
        )}
        {settingsStore.modal.status && settingsStore.modal.name === 'followup' && (
          <Modal>
            <FollowupModal />
          </Modal>
        )}
      </main>
    </div>
  );
}

export default Monitoring;
