import create from 'zustand';
import PatientType from '../types/PatientType';
import Notes from '../data/notes';
import { NotesType } from '../types/NotesType';

interface PatientsState {
  matchingPatient: PatientType | null;
  setMatchingPatient: (patient: PatientType | null) => void;
  notes: NotesType[];
  setNotes: (id: number, note: string) => void;
}

const usePatientsStore = create<PatientsState>((set) => {
  const initWithLocalStorage = (key: string, initValue: NotesType[]): NotesType[] => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initValue;
  };

  return {
    matchingPatient: null,
    setMatchingPatient: (patient) => set(() => ({ matchingPatient: patient })),
    notes: initWithLocalStorage('patientNotes', Notes),
    setNotes: (id, note) => {
      set((state) => {
        const existingNoteIndex = state.notes.findIndex(
          (existingNote) => existingNote.patient_id === id
        );

        if (existingNoteIndex !== -1) {
          const updatedNotes = [...state.notes];
          updatedNotes[existingNoteIndex] = {
            ...updatedNotes[existingNoteIndex],
            notes: note,
          };

          localStorage.setItem('patientNotes', JSON.stringify(updatedNotes));

          return {
            notes: updatedNotes,
          };
        }

        const newNote = { patient_id: id, notes: note };
        const updatedNotes = [...state.notes, newNote];

        localStorage.setItem('patientNotes', JSON.stringify(updatedNotes));

        return {
          notes: updatedNotes,
        };
      });
    },
  };
});

export default usePatientsStore;
