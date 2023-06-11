import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useSettingsStore from '../../stores/SettingsStore';

function AccountModal() {
  const setModal = useSettingsStore((state) => state.setModal);

  return (
    <>
      <div className="flex flex-col items-center gap-2 pb-10">
        <AccountCircleIcon
          className="text-primary-200 dark:text-grey"
          style={{ fontSize: '50px' }}
        />
        <h1 className="dark:text-grey">John Doe</h1>
        <h4>Healthcare Provider</h4>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="dark:text-grey">Log out from Monitor App?</p>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => setModal({ status: false, name: '' })}
            onKeyDown={() => setModal({ status: false, name: '' })}
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
          >
            Yes, log out
          </button>
          <button
            type="button"
            onClick={() => setModal({ status: false, name: '' })}
            onKeyDown={() => setModal({ status: false, name: '' })}
            tabIndex={0}
            className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountModal;
