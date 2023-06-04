import create from 'zustand';

interface SettingsState {
  currentIndex: number | null;
  legalClick: boolean;
  modal: boolean;
  setIndex: (by: number) => void;
  setLegalClick: (value: boolean) => void;
  setModal: (value: boolean) => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
  currentIndex: null,
  legalClick: false,
  modal: false,
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
}));

export default useSettingsStore;
