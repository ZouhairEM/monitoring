import { useTranslation } from 'react-i18next';
import useAlarmsStore from '../../stores/AlarmsStore';
import AlarmTypes from '../../data/alarmtypes';
import alarmTranslations from '../generic/AlarmTranslations';

function AlarmsByTypeWidget() {
  const alarms = useAlarmsStore((state) => state.alarms);
  const countAlarmOne = alarms.filter((alarm) => alarm.alarm === AlarmTypes.One);
  const countAlarmTwo = alarms.filter((alarm) => alarm.alarm === AlarmTypes.Two);
  const countAlarmThree = alarms.filter((alarm) => alarm.alarm === AlarmTypes.Three);
  const countAlarmFour = alarms.filter((alarm) => alarm.alarm === AlarmTypes.Four);
  const countAlarmFive = alarms.filter((alarm) => alarm.alarm === AlarmTypes.Five);
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col gap-2">
        <div className="panel-heading">{t('dashboard.modal.alarmsByType')}</div>
        <div className="flex h-full w-full flex-col px-2">
          <div className="flex w-full flex-grow items-end space-x-2">
            <div className="relative flex h-full flex-grow flex-col items-center pb-5">
              <span className="mb-2 text-xs font-bold sm:mb-0">{t('alarmTypes.loudNoise')}</span>
              <div
                className="flex h-full w-full flex-col justify-end dark:bg-black-100"
                style={{ backgroundColor: 'rgba(215, 218, 220, 0.3)' }}
              >
                {countAlarmOne.map((el) => (
                  <div
                    key={el.id}
                    className={`relative h-[10%] w-full ${alarmTranslations(AlarmTypes.One)
                      .toLowerCase()
                      .replace(' ', '-')}-alarm dark:bg-primary-200`}
                  />
                ))}
              </div>
              <span className="absolute bottom-0 text-base font-bold sm:text-xs">
                <span className="flex">
                  {countAlarmOne.length}
                  <span className="block sm:hidden">x</span>
                </span>
              </span>
            </div>
            <div className="relative flex h-full flex-grow flex-col items-center pb-5">
              <span className="mb-2 text-xs font-bold sm:mb-0">{t('alarmTypes.fireHazard')}</span>
              <div
                className="flex h-full w-full flex-col justify-end dark:bg-black-100"
                style={{ backgroundColor: 'rgba(215, 218, 220, 0.3)' }}
              >
                {countAlarmTwo.map((el) => (
                  <div
                    key={el.id}
                    className={`relative h-[10%] w-full ${alarmTranslations(AlarmTypes.Two)
                      .toLowerCase()
                      .replace(' ', '-')}-alarm dark:bg-primary-200`}
                  />
                ))}
              </div>
              <span className="absolute bottom-0 text-base font-bold sm:text-xs">
                <span className="flex">
                  {countAlarmTwo.length}
                  <span className="block sm:hidden">x</span>
                </span>
              </span>
            </div>
            <div className="relative flex h-full flex-grow flex-col items-center pb-5">
              <span className="mb-2 text-xs font-bold sm:mb-0">{t('alarmTypes.helpCall')}</span>
              <div
                className="flex h-full w-full flex-col justify-end dark:bg-black-100"
                style={{ backgroundColor: 'rgba(215, 218, 220, 0.3)' }}
              >
                {countAlarmThree.map((el) => (
                  <div
                    key={el.id}
                    className={`relative h-[10%] w-full ${alarmTranslations(AlarmTypes.Three)
                      .toLowerCase()
                      .replace(' ', '-')}-alarm dark:bg-primary-200`}
                  />
                ))}
              </div>
              <span className="absolute bottom-0 text-base font-bold sm:text-xs">
                <span className="flex">
                  {countAlarmThree.length}
                  <span className="block sm:hidden">x</span>
                </span>
              </span>
            </div>
            <div className="relative flex h-full flex-grow flex-col items-center pb-5">
              <span className="mb-2 text-xs font-bold sm:mb-0">{t('alarmTypes.patientUp')}</span>
              <div
                className="flex h-full w-full flex-col justify-end dark:bg-black-100"
                style={{ backgroundColor: 'rgba(215, 218, 220, 0.3)' }}
              >
                {countAlarmFour.map((el) => (
                  <div
                    key={el.id}
                    className={`relative h-[10%] w-full ${alarmTranslations(AlarmTypes.Four)
                      .toLowerCase()
                      .replace(' ', '-')}-alarm dark:bg-primary-200`}
                  />
                ))}
              </div>
              <span className="absolute bottom-0 text-base font-bold sm:text-xs">
                <span className="flex">
                  {countAlarmFour.length}
                  <span className="block sm:hidden">x</span>
                </span>
              </span>
            </div>
            <div className="relative flex h-full flex-grow flex-col items-center pb-5">
              <span className="mb-2 text-xs font-bold sm:mb-0">{t('alarmTypes.heartMonitor')}</span>
              <div
                className="flex h-full w-full flex-col justify-end dark:bg-black-100"
                style={{ backgroundColor: 'rgba(215, 218, 220, 0.3)' }}
              >
                {countAlarmFive.map((el) => (
                  <div
                    key={el.id}
                    className={`relative h-[10%] w-full ${alarmTranslations(AlarmTypes.Five)
                      .toLowerCase()
                      .replace(' ', '-')}-alarm dark:bg-primary-200`}
                  />
                ))}
              </div>
              <span className="absolute bottom-0 text-base font-bold sm:text-xs">
                <span className="flex">
                  {countAlarmFive.length}
                  <span className="block sm:hidden">x</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlarmsByTypeWidget;
