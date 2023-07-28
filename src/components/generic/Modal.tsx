import { useRef, MouseEvent, KeyboardEvent } from 'react';
import useSettingsStore from '../../stores/SettingsStore';

interface IModal {
  children: React.ReactNode;
}

function Modal({ children }: IModal) {
  const modalRef = useRef<HTMLDivElement>(null);
  const setModal = useSettingsStore((state) => state.setModal);

  const closeModalViaBackdrop = (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    if (modalRef.current && modalRef.current === (event.target as HTMLDivElement)) {
      setModal({
        status: false,
        name: '',
      });
    }
  };

  return (
    <div
      ref={modalRef}
      role="button"
      tabIndex={0}
      className="fixed left-0 top-0 z-10 h-full w-full"
      style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
      onClick={(e: MouseEvent<HTMLDivElement>) => closeModalViaBackdrop(e)}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => closeModalViaBackdrop(e)}
    >
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform rounded bg-white p-4 text-black-300 hover:cursor-auto dark:bg-black-100">
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
