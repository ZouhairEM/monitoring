import create from 'zustand';

interface SettingsState {
  currentIndex: number | null;
  legalClick: boolean;
  modal: boolean;
  toast: boolean;
  timer: boolean;
  setIndex: (by: number) => void;
  setLegalClick: (value: boolean) => void;
  setModal: (value: boolean) => void;
  setToast: (value: boolean) => void;
  resetTimer: () => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
  currentIndex: null,
  legalClick: false,
  modal: false,
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
  setModal: (value) =>
    set(() => ({
      modal: value,
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
