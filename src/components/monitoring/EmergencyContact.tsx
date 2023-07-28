/* eslint-disable react/require-default-props */
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Patient from '../../types/PatientType';
import useSettingsStore from '../../stores/SettingsStore';

interface EmergencyContactProps {
  emergencyContact: Patient['emergency_contact'];
  onPatients?: boolean;
  onMonitoring?: boolean;
}

function EmergencyContact({ emergencyContact, onPatients, onMonitoring }: EmergencyContactProps) {
  const expand = useSettingsStore((state) => state.expand.emergencyContact);
  const setExpand = useSettingsStore((state) => state.setExpand);
  const { t } = useTranslation();

  const renderIcon = () => {
    if (expand) {
      return <ExpandLessIcon />;
    }
    return <ExpandMoreIcon />;
  };

  return (
    <div>
      <div className="flex flex-col gap-2 text-sm">
        {onMonitoring && (
          <div
            onClick={() => setExpand('emergencyContact', !expand)}
            onKeyDown={() => setExpand('emergencyContact', !expand)}
            role="button"
            tabIndex={0}
            className="mb-2 flex justify-between border-b-2 border-primary-200 py-1 text-sm font-bold text-primary-200 transition duration-200 dark:border-grey-200 dark:text-grey-200"
          >
            {t('emergencyContact.title')}
            {renderIcon()}
          </div>
        )}

        {expand &&
          onMonitoring &&
          (emergencyContact ? (
            <>
              {Object.entries(emergencyContact).map(([name, value]) => (
                <div key={name} className="mb-1 grid grid-cols-2 text-center sm:text-left">
                  <div className="text-xs font-bold capitalize  text-primary-200 transition duration-200 dark:text-grey-200">
                    {t(`emergencyContact.${name}`)}
                  </div>
                  <div className="text-xs text-black-100 transition duration-200 dark:text-grey-200">
                    {value}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="dark:text-grey-200">{t('noAlarmHasBeenSelected')}</div>
          ))}

        {onPatients && emergencyContact && (
          <div className="mb-2 grid grid-cols-3 gap-y-2 sm:mb-0 sm:grid-cols-3">
            {Object.entries(emergencyContact).map(([name, value]) => (
              <div key={name} className="mb-1 flex flex-col text-center sm:text-left">
                <div className="text-xs font-bold capitalize  text-primary-200 transition duration-200 dark:text-grey-200">
                  {t(`emergencyContact.${name}`)}
                </div>
                <div className="text-xs text-black-100 transition duration-200 dark:text-grey-200">
                  {value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EmergencyContact;
