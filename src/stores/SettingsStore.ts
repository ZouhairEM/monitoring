import create from 'zustand';

interface SettingsState {
  currentIndex: number | null;
  legalClick: boolean;
  modal: {
    status: boolean;
    name: string;
  };
  expand: {
    healthcare: boolean;
    emergencyContact: boolean;
  };
  toast: boolean;
  timer: boolean;
  widgets: {
    alarms: boolean;
    tip: boolean;
    total: boolean;
    type: boolean;
    newest: boolean;
    time: boolean;
  };
  darkMode: boolean;
  theme: string;
  rangeValue: number;
  isResultVisible: boolean;
  setIndex: (by: number) => void;
  setLegalClick: (value: boolean) => void;
  setExpand: (key: string, value: boolean) => void;
  setModal: ({ status, name }: { status: boolean; name: string }) => void;
  setToast: (value: boolean) => void;
  resetTimer: () => void;
  setWidget: (key: string, value: boolean) => void;
  setDarkMode: (value: boolean) => void;
  setTheme: (value: string) => void;
  setRangeValue: (value: number) => void;
  setIsResultVisible: (value: boolean) => void;
}

const useSettingsStore = create<SettingsState>((set) => {
  const initWithLocalStorage = (key: string, initValue: boolean): boolean => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initValue;
  };

  return {
    currentIndex: null,
    legalClick: false,
    expand: {
      healthcare: false,
      emergencyContact: false,
    },
    modal: {
      status: false,
      name: '',
    },
    toast: true,
    timer: false,
    canReset: false,
    darkMode: true,
    widgets: {
      alarms: initWithLocalStorage('widgets.alarms', true),
      tip: initWithLocalStorage('widgets.tip', true),
      total: initWithLocalStorage('widgets.total', true),
      type: initWithLocalStorage('widgets.type', true),
      newest: initWithLocalStorage('widgets.newest', true),
      time: initWithLocalStorage('widgets.time', true),
    },
    theme: localStorage.theme,
    rangeValue: Number(localStorage.rangeValue),
    isResultVisible: false,
    setIndex: (index) => set(() => ({ currentIndex: index })),
    setLegalClick: (value) => set(() => ({ legalClick: value })),
    setExpand: (key, value) => set(({ expand }) => ({ expand: { ...expand, [key]: value } })),

    setModal: ({ status, name }) => set(() => ({ modal: { status, name } })),
    setToast: (value) => set(() => ({ toast: value })),
    resetTimer: () => set(() => ({ timer: true })),
    setWidget: (key, value) => set(({ widgets }) => ({ widgets: { ...widgets, [key]: value } })),
    setDarkMode: (value) => set(() => ({ darkMode: value })),
    setTheme: (value) => set(() => ({ theme: value })),
    setRangeValue: (value) => set(() => ({ rangeValue: value })),
    setIsResultVisible: (value) => set(() => ({ isResultVisible: value })),
  };
});

export default useSettingsStore;
