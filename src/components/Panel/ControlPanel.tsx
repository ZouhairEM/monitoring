import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../store/AlarmsStore';

interface ControlPanelProps {
  clickedAlarm: number;
  onToggle: (event: number) => void;
}

function ControlPanel({ clickedAlarm, onToggle }: ControlPanelProps) {
  const closeAlarm = useAlarmsStore((state) => state.closeAlarm);
  const setPrevious = useAlarmsStore((state) => state.setPrevious);
  const setNext = useAlarmsStore((state) => state.setNext);

  return (
    <section className="section-header dark:bg-black-100">
      <div className="section-header font-bold bg-primary-200 dark:bg-black-200 text-white p-2 drop-shadow-md">
        Control Options
      </div>
      <div className="section-header flex gap-2 p-2 py-4 text-sm">
        <button
          type="button"
          onClick={() => {
            closeAlarm(clickedAlarm);
            onToggle(clickedAlarm);
          }}
          onKeyDown={() => {
            closeAlarm(clickedAlarm);
            onToggle(clickedAlarm);
          }}
          tabIndex={0}
          className="flex gap-2 items-center justify-center bg-primary-200 dark:bg-black-200 text-white font-medium text-center p-2 rounded hover:bg-primary-300"
        >
          Close alarm
          <CloseIcon style={{ height: '16px' }} />
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            tabIndex={0}
            className="flex gap-2 items-center justify-center bg-primary-200 dark:bg-black-200 text-white font-medium text-center p-2 rounded hover:bg-primary-300"
            onClick={() => setPrevious()}
            onKeyDown={() => () => setPrevious()}
          >
            Previous alarm
            <ArrowBackIosNewIcon style={{ height: '16px' }} />
          </button>
          <button
            type="button"
            tabIndex={0}
            className="flex gap-2 items-center justify-center bg-primary-200 dark:bg-black-200 text-white font-medium text-center p-2 rounded hover:bg-primary-300"
            onClick={() => setNext()}
            onKeyDown={() => () => setNext()}
          >
            <ArrowForwardIosIcon style={{ height: '16px' }} />
            Next alarm
          </button>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
