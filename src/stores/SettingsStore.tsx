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
}));

export default useSettingsStore;
