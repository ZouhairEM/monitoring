/* eslint-disable react/require-default-props */
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Patient from '../../types/PatientType';
import useSettingsStore from '../../stores/SettingsStore';

interface HealthCareInfoProps {
  healthCare: Patient['healthcare'];
  onPatients?: boolean;
  onMonitoring?: boolean;
}

function HealthCareInfo({ healthCare, onPatients, onMonitoring }: HealthCareInfoProps) {
  const expand = useSettingsStore((state) => state.expand.healthcare);
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
            onClick={() => setExpand('healthcare', !expand)}
            onKeyDown={() => setExpand('healthcare', !expand)}
            role="button"
            tabIndex={0}
            className={`${
              !expand ? 'mb-4' : ''
            } flex justify-between border-b-2 border-primary-200 py-1 text-sm font-bold text-primary-200 transition duration-200 dark:border-grey-200 dark:text-grey-200`}
          >
            {t('healthCareInfo.title')}
            {renderIcon()}
          </div>
        )}

        {expand &&
          onMonitoring &&
          (healthCare ? (
            <>
              {Object.entries(healthCare).map(([name, value]) => (
                <div
                  key={name}
                  className=" expand mb-1 grid grid-cols-2 text-center
                    sm:text-left"
                >
                  <div className="text-xs font-bold capitalize text-primary-200 transition duration-200 dark:text-grey-200">
                    {t(`healthCareInfo.${name}`)}
                  </div>
                  <div className="text-xs text-black-100 transition duration-200 dark:text-grey-200">
                    {value}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="dark:text-grey-200">{t('healthCareInfo.noAlarmHasBeenSelected')}</div>
          ))}

        {onPatients && healthCare && (
          <div className="grid grid-cols-3">
            {Object.entries(healthCare).map(([name, value]) => (
              <div key={name} className="mb-1 flex flex-col sm:text-left">
                <div className="text-xs font-bold capitalize  text-primary-200 transition duration-200 dark:text-grey-200">
                  {t(`healthCareInfo.${name}`)}
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

export default HealthCareInfo;
