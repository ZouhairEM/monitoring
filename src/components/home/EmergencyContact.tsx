import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Patient from '../../types/PatientType';
import useSettingsStore from '../../stores/SettingsStore';

interface EmergencyContactProps {
  emergencyContact: Patient['emergency_contact'];
}

function EmergencyContact({ emergencyContact }: EmergencyContactProps) {
  const expand = useSettingsStore((state) => state.expandContact);
  const setExpand = useSettingsStore((state) => state.setExpandContact);
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
        <div
          onClick={() => setExpand({ emergencyContact: !expand })}
          onKeyDown={() => setExpand({ emergencyContact: !expand })}
          role="button"
          tabIndex={0}
          className="mb-2 flex justify-between border-b-2 border-primary-200 py-1 text-sm font-bold text-primary-200 transition duration-200 dark:border-grey dark:text-grey"
        >
          {t('emergencyContact.title')}
          {renderIcon()}
        </div>

        {expand &&
          (emergencyContact ? (
            <>
              {Object.entries(emergencyContact).map(([name, value]) => (
                <div
                  key={name}
                  className={`mb-1 grid grid-cols-2 text-center sm:text-left ${
                    emergencyContact ? 'show' : 'hide'
                  }`}
                >
                  <div className="text-xs font-bold capitalize  text-primary-200 transition duration-200 dark:text-grey">
                    {t(`emergencyContact.${name}`)}
                  </div>
                  <div className="text-xs text-black-100 transition duration-200 dark:text-grey">
                    {value}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="dark:text-grey">{t('noAlarmHasBeenSelected')}</div>
          ))}
      </div>
    </div>
  );
}

export default EmergencyContact;
