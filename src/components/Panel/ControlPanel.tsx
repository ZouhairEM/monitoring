import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../store/AlarmsStore';

interface Props {
  clickedAlarm: number;
  onToggle: (event: number) => void;
}

function ControlPanel({ clickedAlarm, onToggle }: Props) {
  const closeAlarm = useAlarmsStore((state) => state.closeAlarm);
  const setPrevious = useAlarmsStore((state) => state.setPrevious);
  const setNext = useAlarmsStore((state) => state.setNext);

  return (
    <div className="border border-green">
      <div className="font-bold bg-green dark:bg-black-200 text-white p-2">
        Control Options
      </div>
      <div className="flex gap-2 p-2 py-4 text-sm">
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
          className="flex gap-2 items-center justify-center bg-green dark:bg-black-200 text-white font-medium text-center p-2 rounded hover:bg-darkGreen"
        >
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Close alarm
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            tabIndex={0}
            className="flex gap-2 items-center justify-center bg-green dark:bg-black-200 text-white font-medium text-center p-2 rounded hover:bg-darkGreen"
            onClick={() => setPrevious()}
            onKeyDown={() => () => setPrevious()}
          >
            Previous alarm
            <ArrowBackIosNewIcon style={{ height: '20px' }} />
          </button>
          <button
            type="button"
            tabIndex={0}
            className="flex gap-2 items-center justify-center bg-green dark:bg-black-200 text-white font-medium text-center p-2 rounded hover:bg-darkGreen"
            onClick={() => setNext()}
            onKeyDown={() => () => setNext()}
          >
            <ArrowForwardIosIcon style={{ height: '20px' }} />
            Next alarm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
