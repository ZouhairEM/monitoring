import create from 'zustand';

interface SettingsState {
  currentIndex: number | null;
  legalClick: boolean;
  modal: {
    status: boolean;
    name: string;
  };
  expandHealthCare: boolean;
  expandEmergencyContact: boolean;
  toast: boolean;
  timer: boolean;
  toggleOpenAlarms: boolean;
  toggleTipOfTheDay: boolean;
  toggleDarkMode: boolean;
  toggleTotalAlarms: boolean;
  toggleAlarmsByType: boolean;
  toggleNewestAlarm: boolean;
  toggleTime: boolean;
  theme: string;
  rangeValue: number;
  setIndex: (by: number) => void;
  setLegalClick: (value: boolean) => void;
  setExpandHealthCare: ({ healthCare }: { healthCare: boolean }) => void;
  setExpandEmergencyContact: ({
    emergencyContact,
  }: {
    emergencyContact: boolean;
  }) => void;
  setModal: ({ status, name }: { status: boolean; name: string }) => void;
  setToast: (value: boolean) => void;
  resetTimer: () => void;
  setToggleOpenAlarms: (value: boolean) => void;
  setToggleTipOfTheDay: (value: boolean) => void;
  setToggleDarkMode: (value: boolean) => void;
  setToggleTotalAlarms: (value: boolean) => void;
  setToggleAlarmsByType: (value: boolean) => void;
  setToggleNewestAlarm: (value: boolean) => void;
  setToggleTime: (value: boolean) => void;
  setTheme: (value: string) => void;
  setRangeValue: (value: number) => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
  currentIndex: null,
  legalClick: false,
  expandHealthCare: false,
  expandEmergencyContact: false,
  modal: {
    status: false,
    name: '',
  },
  toast: true,
  timer: false,
  canReset: false,
  toggleOpenAlarms: Boolean(localStorage.toggleOpenAlarms),
  toggleTipOfTheDay: true,
  toggleDarkMode: true,
  toggleTotalAlarms: true,
  toggleAlarmsByType: true,
  toggleNewestAlarm: true,
  toggleTime: true,
  theme: localStorage.theme,
  rangeValue: Number(localStorage.rangeValue),
  setIndex: (index) =>
    set(() => ({
      currentIndex: index,
    })),
  setLegalClick: (value) => {
    set(() => ({
      legalClick: value,
    }));
  },
  setExpandHealthCare: ({ healthCare }: { healthCare: boolean }) =>
    set(() => ({
      expandHealthCare: healthCare,
    })),
  setExpandEmergencyContact: ({
    emergencyContact,
  }: {
    emergencyContact: boolean;
  }) =>
    set(() => ({
      expandEmergencyContact: emergencyContact,
    })),
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
  setToggleOpenAlarms: (value) =>
    set(() => ({
      toggleOpenAlarms: value,
    })),
  setToggleTipOfTheDay: (value) =>
    set(() => ({
      toggleTipOfTheDay: value,
    })),
  setToggleDarkMode: (value) =>
    set(() => ({
      toggleDarkMode: value,
    })),
  setToggleTotalAlarms: (value) =>
    set(() => ({
      toggleTotalAlarms: value,
    })),
  setToggleAlarmsByType: (value) =>
    set(() => ({
      toggleAlarmsByType: value,
    })),
  setToggleNewestAlarm: (value) =>
    set(() => ({
      toggleNewestAlarm: value,
    })),
  setToggleTime: (value) =>
    set(() => ({
      toggleTime: value,
    })),
  setTheme: (value) =>
    set(() => ({
      theme: value,
    })),
  setRangeValue: (value) =>
    set(() => ({
      rangeValue: value,
    })),
}));

export default useSettingsStore;
