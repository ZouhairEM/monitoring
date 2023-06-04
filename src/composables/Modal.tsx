import CloseIcon from '@mui/icons-material/Close';
import useSettingsStore from '../stores/SettingsStore';

interface IModal {
  children: React.ReactNode;
}

function Modal({ children }: IModal) {
  const setModal = useSettingsStore((state) => state.setModal);

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full"
      style={{ backgroundColor: 'rgba(0,0,0, 0.3)' }}
    >
      <div className="absolute left-1/2 top-1/2 z-20 h-2/4 w-2/4 -translate-x-1/2 -translate-y-1/2 transform rounded bg-primary-300 p-4">
        <div className="relative">
          {children}
          <CloseIcon
            className="absolute right-0 top-0 cursor-pointer"
            onClick={() => setModal(false)}
            onKeyDown={() => setModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
