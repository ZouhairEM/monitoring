import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function AlarmCountWidget() {
  return (
    <div className="flex h-full justify-between">
      <div className="flex flex-col justify-between">
        <p>Open alarms</p>
        <h3 className="text-6xl">17</h3>
      </div>
      <div className="flex flex-col justify-end">
        <button
          type="button"
          tabIndex={0}
          className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
        >
          To monitoring
          <ArrowForwardIosIcon style={{ height: '16px' }} />
        </button>
      </div>
    </div>
  );
}

export default AlarmCountWidget;
