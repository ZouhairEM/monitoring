import useAlarmsStore from '../../store/AlarmsStore';

interface Props {
  clickedAlarm: number;
}

function ControlPanel({ clickedAlarm }: Props) {
  const closeAlarm = useAlarmsStore((state) => state.closeAlarm);
  return (
    <div className="border border-green">
      <div className="font-extrabold bg-green dark:bg-black-200 text-white p-2">
        Control Options
      </div>
      <div className="flex gap-2 p-2 py-4 text-sm">
        <button
          type="button"
          onClick={() => {
            closeAlarm(clickedAlarm);
          }}
          onKeyDown={() => {
            closeAlarm(clickedAlarm);
          }}
          tabIndex={0}
          className="flex gap-2 align-center justify-center bg-green dark:bg-black-200 text-white font-medium text-center p-2 rounded"
        >
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Close alarm
        </button>
        <button
          type="button"
          tabIndex={0}
          className="flex gap-2 align-center justify-center bg-green dark:bg-black-200 text-white font-medium text-center p-2 rounded"
        >
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
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>{' '}
          Eavesdrop
        </button>
        <button
          type="button"
          tabIndex={0}
          className="flex gap-2 p-1 text-white dark:bg-black-200 dark:text-white rounded"
        >
          Something
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;
