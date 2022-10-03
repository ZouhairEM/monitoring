function AlarmInfo() {
  return (
    <div>
      <div className="text-sm p-2">
        <div className="flex justify-between text-green dark:text-white font-extrabold uppercase text-sm border-b-2 py-2 mb-2 border-green">
          Alarm info
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
        <div className="text-green dark:text-white font-extrabold uppercase text-xs">
          Alarm
        </div>
        <div className="text-black-100 dark:text-white text-xs">Acoustics</div>
      </div>
    </div>
  );
}

export default AlarmInfo;
