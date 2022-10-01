import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function PatientBio() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 text-center bg-lightGreen rounded-md">
      <div>#001</div>
      <div>
        <AccessAlarmIcon />
        Alarm
      </div>
      <div>Patient</div>
      <div>Time</div>
      <div>Status</div>
      <div>Room</div>
    </div>
  );
}

export default PatientBio;
