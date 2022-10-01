function AlarmBio(props: any) {
  const { entry } = props;
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 mx-2 p-1 odd:bg-lightGreen hover:bg-green hover:text-white">
      <div>{entry.level}</div>
      <div className="flex justify-start items-center gap-2 capitalize">
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
        </svg>
        {entry.alarm}
      </div>
      <div>{entry.patient}</div>
      <div>{entry.time}</div>
      <div className="flex justify-start items-center gap-2">
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {entry.status ? 'resolved' : 'open'}
      </div>
      <div>{entry.room}</div>
    </div>
  );
}

export default AlarmBio;
