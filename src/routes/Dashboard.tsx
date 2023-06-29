import { useTranslation } from 'react-i18next';
import SettingsModal from '../components/composables/SettingsModal';
import AlarmCountWidget from '../components/dashboard/AlarmCountWidget';
import TotalCountWidget from '../components/dashboard/TotalCountWidget';
import TipOfTheDayWidget from '../components/dashboard/TipOfTheDayWidget';
import SettingsWidget from '../components/dashboard/SettingsWidget';
import TimeWidget from '../components/dashboard/TimeWidget';
import AlarmsByType from '../components/dashboard/AlarmsByType';
import NewestWidget from '../components/dashboard/NewestWidget';
import Modal from '../components/generic/Modal';
import useSettingsStore from '../stores/SettingsStore';
import Doctor from '../assets/img/illustrations/Doctor';

function Dashboard() {
  const { t } = useTranslation();
  const modal = useSettingsStore((state) => state.modal);
  const widgets = useSettingsStore((state) => state.widgets);

  return (
    <div className="w-full">
      <main className="flex h-[754px] w-full flex-col gap-2 p-[1px] md:mb-0">
        <h1>{t('dashboard.title')}</h1>
        <div className="flex h-full flex-col gap-3">
          <div className="grid h-1/3 grid-cols-4 gap-3">
            {widgets.alarms && (
              <section className="widget col-span-2 md:col-span-1">
                <AlarmCountWidget />
              </section>
            )}
            {widgets.tip && (
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
          <div className="grid h-1/3 grid-cols-4 gap-3">
            {widgets.total && (
              <section className="widget col-span-2 md:col-span-1">
                <TotalCountWidget />
              </section>
            )}
            {widgets.type && (
              <section className="widget col-span-2">
                <AlarmsByType />
              </section>
            )}
            {widgets.time && (
              <section className="widget col-span-2 md:col-span-1">
                <TimeWidget />
              </section>
            )}
          </div>
          <div className="grid h-1/3 grid-cols-4 gap-3">
            {widgets.newest && (
              <section className="widget col-span-2 md:col-span-1">
                <NewestWidget />
              </section>
            )}
            <section className="col-span-3 flex items-end justify-end">
              <div className="w-16">
                <Doctor />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
