import create from 'zustand';

interface SettingsState {
  currentIndex: number | null;
  legalClick: boolean;
  modal: {
    status: boolean;
    name: string;
  };
  expandHealthCare: boolean;
  expandContact: boolean;
  toast: boolean;
  timer: boolean;
  alarmsWidget: boolean;
  tipWidget: boolean;
  darkMode: boolean;
  totalWidget: boolean;
  typeWidget: boolean;
  newestWidget: boolean;
  timeWidget: boolean;
  theme: string;
  rangeValue: number;
  setIndex: (by: number) => void;
  setLegalClick: (value: boolean) => void;
  setExpandHealthCare: ({ healthCare }: { healthCare: boolean }) => void;
  setExpandContact: ({
    emergencyContact,
  }: {
    emergencyContact: boolean;
  }) => void;
  setModal: ({ status, name }: { status: boolean; name: string }) => void;
  setToast: (value: boolean) => void;
  resetTimer: () => void;
  setAlarmsWidget: (value: boolean) => void;
  setTipWidget: (value: boolean) => void;
  setDarkMode: (value: boolean) => void;
  setTotalWidget: (value: boolean) => void;
  setTypeWidget: (value: boolean) => void;
  setNewestWidget: (value: boolean) => void;
  setTimeWidget: (value: boolean) => void;
  setTheme: (value: string) => void;
  setRangeValue: (value: number) => void;
}

const useSettingsStore = create<SettingsState>((set) => {
  const initWithLocalStorage = (key: string, initValue: boolean): boolean => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initValue;
  };

  return {
    currentIndex: null,
    legalClick: false,
    expandHealthCare: false,
    expandContact: false,
    modal: {
      status: false,
      name: '',
    },
    toast: true,
    timer: false,
    canReset: false,
    darkMode: true,
    alarmsWidget: initWithLocalStorage('alarmsWidget', true),
    tipWidget: initWithLocalStorage('tipWidget', true),
    totalWidget: initWithLocalStorage('totalWidget', true),
    typeWidget: initWithLocalStorage('typeWidget', true),
    newestWidget: initWithLocalStorage('newestWidget', true),
    timeWidget: initWithLocalStorage('timeWidget', true),
    theme: localStorage.theme,
    rangeValue: Number(localStorage.rangeValue),
    setIndex: (index) => set(() => ({ currentIndex: index })),
    setLegalClick: (value) => set(() => ({ legalClick: value })),
    setExpandHealthCare: ({ healthCare }) =>
      set(() => ({ expandHealthCare: healthCare })),
    setExpandContact: ({ emergencyContact }) =>
      set(() => ({ expandContact: emergencyContact })),
    setModal: ({ status, name }) => set(() => ({ modal: { status, name } })),
    setToast: (value) => set(() => ({ toast: value })),
    resetTimer: () => set(() => ({ timer: true })),
    setAlarmsWidget: (value) => set(() => ({ alarmsWidget: value })),
    setTipWidget: (value) => set(() => ({ tipWidget: value })),
    setDarkMode: (value) => set(() => ({ darkMode: value })),
    setTotalWidget: (value) => set(() => ({ totalWidget: value })),
    setTypeWidget: (value) => set(() => ({ typeWidget: value })),
    setNewestWidget: (value) => set(() => ({ newestWidget: value })),
    setTimeWidget: (value) => set(() => ({ timeWidget: value })),
    setTheme: (value) => set(() => ({ theme: value })),
    setRangeValue: (value) => set(() => ({ rangeValue: value })),
  };
});

export default useSettingsStore;
