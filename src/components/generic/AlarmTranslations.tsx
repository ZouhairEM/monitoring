import { t } from 'i18next';
import AlarmTypes from '../../data/alarmtypes';

const AlarmTranslations = (alarm: string) => {
  if (alarm === AlarmTypes.One) {
    return t('alarmTypes.fireHazard');
  }
  if (alarm === AlarmTypes.Two) {
    return t('alarmTypes.loudNoise');
  }
  if (alarm === AlarmTypes.Three) {
    return t('alarmTypes.helpCall');
  }
  if (alarm === AlarmTypes.Four) {
    return t('alarmTypes.patientUp');
  }
  return t('alarmTypes.heartMonitor');
};

export default AlarmTranslations;
