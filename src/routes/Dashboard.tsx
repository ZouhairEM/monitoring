import { useTranslation } from 'react-i18next';
import SettingsModal from '../components/composables/SettingsModal';
import AlarmCountWidget from '../components/dashboard/AlarmCountWidget';
import TotalCountWidget from '../components/dashboard/TotalCountWidget';
import TipOfTheDayWidget from '../components/dashboard/TipOfTheDayWidget';
import SettingsWidget from '../components/dashboard/SettingsWidget';
import TimeWidget from '../components/dashboard/TimeWidget';
import Modal from '../components/generic/Modal';
import useSettingsStore from '../stores/SettingsStore';

function Dashboard() {
  const { t } = useTranslation();
  const modal = useSettingsStore((state) => state.modal);
  const alarmsWidget = useSettingsStore((state) => state.alarmsWidget);
  const tipWidget = useSettingsStore((state) => state.tipWidget);
  const totalWidget = useSettingsStore((state) => state.totalWidget);
  const typeWidget = useSettingsStore((state) => state.typeWidget);
  const newestWidget = useSettingsStore((state) => state.newestWidget);
  const timeWidget = useSettingsStore((state) => state.timeWidget);

  return (
    <div className="w-full">
      <main className="flex h-[754px] w-full flex-col gap-2 p-[1px] md:mb-0">
        <h1>{t('dashboard.title')}</h1>
        <div className="flex h-full flex-col gap-2">
          <div className="grid h-1/4 grid-cols-4 gap-2">
            {alarmsWidget && (
              <section className="widget col-span-2 md:col-span-1">
                <AlarmCountWidget />
              </section>
            )}
            {tipWidget && (
              <section className="widget col-span-2">
                <div>{t('dashboard.modal.tipOfTheDay')}</div>
                <TipOfTheDayWidget />
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
            {totalWidget && (
              <section className="widget col-span-2 md:col-span-1">
                <TotalCountWidget />
              </section>
            )}
            {typeWidget && (
              <section className="widget col-span-2">
                <div>{t('dashboard.modal.alarmsByType')}</div>
              </section>
            )}
            {timeWidget && (
              <section className="widget col-span-2 md:col-span-1">
                <TimeWidget />
              </section>
            )}
          </div>
          <div className="grid h-1/4 grid-cols-4 gap-2">
            {newestWidget && (
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
