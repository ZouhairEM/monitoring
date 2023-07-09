import { useTranslation } from 'react-i18next';
import SettingsModal from '../components/composables/SettingsModal';
import AlarmCountWidget from '../components/dashboard/AlarmCountWidget';
import TotalCountWidget from '../components/dashboard/TotalCountWidget';
import TipOfTheDayWidget from '../components/dashboard/TipOfTheDayWidget';
import SettingsWidget from '../components/dashboard/SettingsWidget';
import TimeWidget from '../components/dashboard/TimeWidget';
import AlarmsByTypeWidget from '../components/dashboard/AlarmsByTypeWidget';
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
        <h1 className="dark:text-grey-200">{t('dashboard.title')}</h1>
        <div className="grid h-full grid-cols-4 gap-3">
          {widgets.alarms && (
            <section className="widget order-1 col-span-2 sm:order-1 sm:col-span-2 md:col-span-1">
              <AlarmCountWidget />
            </section>
          )}
          {widgets.tip && (
            <section className="widget order-5 col-span-4 sm:order-2 sm:col-span-2">
              <TipOfTheDayWidget />
            </section>
          )}
          <section className="widget order-2 col-span-2 flex justify-center sm:order-3 md:col-span-1">
            <SettingsWidget />
            {modal.status && modal.name === 'settings' && (
              <Modal>
                <SettingsModal />
              </Modal>
            )}
          </section>
          {widgets.total && (
            <section className="widget order-3 col-span-2 sm:order-4 md:col-span-1">
              <TotalCountWidget />
            </section>
          )}
          {widgets.type && (
            <section className="widget order-5 col-span-4 sm:order-5 md:col-span-2">
              <AlarmsByTypeWidget />
            </section>
          )}
          {widgets.time && (
            <section className="widget order-4 col-span-2 sm:order-6 sm:col-span-2 md:col-span-1">
              <TimeWidget />
            </section>
          )}
          {widgets.newest && (
            <section className="widget order-7 col-span-4 sm:order-7 sm:col-span-2 md:col-span-1">
              <NewestWidget />
            </section>
          )}
          <section className="order-8 col-span-4 flex items-center justify-center sm:order-8 md:col-span-3 md:items-end md:justify-end">
            <div className="w-16">
              <Doctor />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
