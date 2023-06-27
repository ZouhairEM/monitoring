import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsModal from '../components/composables/SettingsModal';
import AlarmCountWidget from '../components/dashboard/AlarmCountWidget';
import SettingsWidget from '../components/dashboard/SettingsWidget';
import Modal from '../components/generic/Modal';
import useSettingsStore from '../stores/SettingsStore';

function Dashboard() {
  const { t } = useTranslation();
  const modal = useSettingsStore((state) => state.modal);
  const toggleOpenAlarms = useSettingsStore((state) => state.toggleOpenAlarms);
  const toggleTipOfTheDay = useSettingsStore(
    (state) => state.toggleTipOfTheDay
  );
  const toggleTotalAlarms = useSettingsStore(
    (state) => state.toggleTotalAlarms
  );
  const toggleAlarmsByType = useSettingsStore(
    (state) => state.toggleAlarmsByType
  );
  const toggleNewestAlarm = useSettingsStore(
    (state) => state.toggleNewestAlarm
  );
  const toggleTime = useSettingsStore((state) => state.toggleTime);

  useEffect(() => {
    if (localStorage.getItem('toggleOpenAlarms')) {
      localStorage.setItem('toggleOpenAlarms', String(toggleOpenAlarms));
    }
  }, [toggleOpenAlarms]);

  return (
    <div className="w-full">
      <main className="flex h-[754px] w-full flex-col gap-2 p-[1px] md:mb-0">
        <h1>{t('dashboard.title')}</h1>
        <div className="flex h-full flex-col gap-2">
          <div className="grid h-1/4 grid-cols-4 gap-2">
            {toggleOpenAlarms && (
              <section className="widget col-span-2 md:col-span-1">
                <AlarmCountWidget />
              </section>
            )}
            {toggleTipOfTheDay && (
              <section className="widget col-span-2">
                <div>{t('dashboard.modal.tipOfTheDay')}</div>
              </section>
            )}
            <section className="widget col-span-2 flex justify-center md:col-span-1">
              <SettingsWidget />
              {modal.status && modal.name === 'settings' && (
                <Modal>
                  <SettingsModal />
                </Modal>
              )}
            </section>
          </div>
          <div className="grid h-1/4 grid-cols-4 gap-2">
            {toggleTotalAlarms && (
              <section className="widget col-span-2 md:col-span-1">
                <div>{t('dashboard.modal.totalAlarms')}</div>
              </section>
            )}
            {toggleAlarmsByType && (
              <section className="widget col-span-2">
                <div>{t('dashboard.modal.alarmsByType')}</div>
              </section>
            )}
            {toggleTime && (
              <section className="widget col-span-2 md:col-span-1">
                <div>{t('dashboard.modal.time')}</div>
              </section>
            )}
          </div>
          <div className="grid h-1/4 grid-cols-4 gap-2">
            {toggleNewestAlarm && (
              <section className="widget col-span-2 md:col-span-1">
                <div>{t('dashboard.modal.newestAlarm')}</div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
