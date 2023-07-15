import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import usePatientsStore from '../../stores/PatientsStore';

function Notes() {
  const [editNote, setEditNote] = useState<string | null>(null);
  const [textFocused, setTextFocused] = useState(false);
  const patientsNotes = usePatientsStore((state) => state.notes);
  const matchingPatient = usePatientsStore((state) => state.matchingPatient);
  const matchingNotes = patientsNotes.find(
    (notes) => notes?.patient_id === matchingPatient?.profile.id
  )?.notes;
  const setNote = usePatientsStore((state) => state.setNotes);
  const patientId = matchingPatient?.profile.id;

  const handleNotesPerId = () => {
    if (patientId && editNote) {
      setNote(patientId, editNote);
      setEditNote(null);
    }
    setTextFocused(false);
  };
  const { t } = useTranslation();

  return (
    <section className="flex h-full flex-col gap-2 p-2">
      <div className="relative h-full w-full">
        <textarea
          value={editNote ?? matchingNotes ?? ''}
          placeholder={editNote ?? matchingNotes ?? t('patientsPage.addNote')}
          onChange={(e) => setEditNote(e.target.value)}
          className="flex h-full w-full resize-none rounded bg-grey-100 p-2 text-sm drop-shadow-md focus:bg-grey-200 focus:outline-1 focus:outline-primary-200 dark:bg-black-100 dark:text-grey-200"
          onFocus={() => setTextFocused(true)}
          onBlur={() => handleNotesPerId()}
        />
        {!textFocused && (
          <EditIcon
            className="absolute right-2 top-2 text-black-100 dark:text-primary-200"
            style={{ fontSize: '20px' }}
          />
        )}
      </div>
    </section>
  );
}

export default Notes;
