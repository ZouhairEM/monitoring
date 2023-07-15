import HearingIcon from '@mui/icons-material/Hearing';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessibleIcon from '@mui/icons-material/Accessible';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AlarmTypes from '../../data/alarmtypes';

interface AlarmIconsProps {
  alarm: string;
}

function AlarmIcons({ alarm }: AlarmIconsProps) {
  if (alarm === AlarmTypes.One) {
    return <AccessibleIcon style={{ height: '17px' }} />;
  }
  if (alarm === AlarmTypes.Two) {
    return <HearingIcon style={{ height: '18px' }} />;
  }
  if (alarm === AlarmTypes.Three) {
    return <RecordVoiceOverIcon style={{ height: '18px' }} />;
  }
  if (alarm === AlarmTypes.Four) {
    return <MonitorHeartIcon style={{ height: '18px' }} />;
  }
  if (alarm === AlarmTypes.Five) {
    return <LocalFireDepartmentIcon style={{ height: '18px' }} />;
  }
  return <HearingIcon />;
}

export default AlarmIcons;
