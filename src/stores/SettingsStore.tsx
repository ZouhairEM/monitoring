import create from 'zustand';

interface SettingsState {
  currentIndex: number | null;
  legalClick: boolean;
  modal: {
    status: boolean;
    name: string;
  };
  toast: boolean;
  timer: boolean;
  setIndex: (by: number) => void;
  setLegalClick: (value: boolean) => void;
  setModal: ({ status, name }: { status: boolean; name: string }) => void;
  setToast: (value: boolean) => void;
  resetTimer: () => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
  currentIndex: null,
  legalClick: false,
  modal: {
    status: false,
    name: '',
  },
  toast: true,
  timer: false,
  canReset: false,
  setIndex: (index) =>
    set(() => ({
      currentIndex: index,
    })),
  setLegalClick: (value) => {
    set(() => ({
      legalClick: value,
    }));
  },
  setModal: ({ status, name }: { status: boolean; name: string }) =>
    set(() => ({
      modal: {
        status,
        name,
      },
    })),
  setToast: (value) =>
    set(() => ({
      toast: value,
    })),
  resetTimer: () => {
    set(() => ({
      timer: true,
    }));
  },
}));

export default useSettingsStore;
