import SettingsModal from '../components/composables/SettingsModal';
import AlarmCountWidget from '../components/dashboard/AlarmCountWidget';
import SettingsWidget from '../components/dashboard/SettingsWidget';
import Modal from '../components/generic/Modal';
import useSettingsStore from '../stores/SettingsStore';

function Dashboard() {
  const modal = useSettingsStore((state) => state.modal);

  return (
    <div className="w-full">
      <main className="flex h-[754px] w-full flex-col gap-2 p-[1px] md:mb-0">
        <h1>Dashboard</h1>
        <div className="flex h-full flex-col gap-2">
          <div className="grid h-1/4 grid-cols-4 gap-2">
            <section className="widget">
              <AlarmCountWidget />
            </section>
            <section className="widget col-span-2">
              <div>Widget</div>
            </section>
            <section className="widget flex justify-center">
              <SettingsWidget />
              {modal.status && modal.name === 'settings' && (
                <Modal>
                  <SettingsModal />
                </Modal>
              )}
            </section>
          </div>
          <div className="grid h-1/4 grid-cols-4 gap-2">
            <section className="widget">
              <div>Widget</div>
            </section>
            <section className="widget col-span-2">
              <div>Widget</div>
            </section>
            <section className="widget">
              <div>Widget</div>
            </section>
          </div>
          <div className="grid h-2/4 grid-cols-4 gap-2">
            <section className="widget col-span-2">
              <div>Widget</div>
            </section>{' '}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
