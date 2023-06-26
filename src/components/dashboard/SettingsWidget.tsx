import Settings from '@mui/icons-material/Settings';
import useSettingsStore from '../../stores/SettingsStore';

function SettingsWidget() {
  const setModal = useSettingsStore((state) => state.setModal);
  const handleFollowUp = () => {
    setModal({ status: true, name: 'settings' });
  };

  return (
    <div className="flex h-full justify-between">
      <button
        type="button"
        tabIndex={0}
        onClick={() => handleFollowUp()}
        onKeyDown={() => handleFollowUp()}
        className="flex w-full flex-col justify-between"
      >
        <p>Settings</p>
        <span className="flex h-full w-full items-center justify-center">
          <Settings className="text-primary-200" style={{ fontSize: '40px' }} />
        </span>
      </button>
    </div>
  );
}

export default SettingsWidget;
