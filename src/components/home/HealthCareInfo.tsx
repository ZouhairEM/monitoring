import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Patient from '../../types/PatientType';
import useSettingsStore from '../../stores/SettingsStore';

interface HealthCareInfoProps {
  healthCare: Patient['healthcare'];
}

function HealthCareInfo({ healthCare }: HealthCareInfoProps) {
  const expand = useSettingsStore((state) => state.expandHealthCare);
  const setExpand = useSettingsStore((state) => state.setExpandHealthCare);
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
          onClick={() => setExpand({ healthCare: !expand })}
          onKeyDown={() => setExpand({ healthCare: !expand })}
          role="button"
          tabIndex={0}
          className={`${
            !expand ? 'mb-4' : ''
          } flex justify-between border-b-2 border-primary-200 py-1 text-sm font-bold text-primary-200 transition duration-200 dark:border-grey dark:text-grey`}
        >
          {t('healthCareInfo.title')}
          {renderIcon()}
        </div>

        {expand &&
          (healthCare ? (
            <>
              {Object.entries(healthCare).map(([name, value]) => (
                <div
                  key={name}
                  className=" expand mb-1 grid grid-cols-2 text-center
                    sm:text-left"
                >
                  <div className="text-xs font-bold capitalize text-primary-200 transition duration-200 dark:text-grey">
                    {t(`healthCareInfo.${name}`)}
                  </div>
                  <div className="text-xs text-black-100 transition duration-200 dark:text-grey">
                    {value}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="dark:text-grey">
              {t('healthCareInfo.noAlarmHasBeenSelected')}
            </div>
          ))}
      </div>
    </div>
  );
}

export default HealthCareInfo;
