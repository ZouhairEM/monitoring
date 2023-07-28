import { useTranslation } from 'react-i18next';

function EntryTypes(): string[] {
  const { t } = useTranslation();

  return [
    t('entryTypes.priority'),
    t('entryTypes.alarm'),
    t('entryTypes.patient'),
    t('entryTypes.time'),
    t('entryTypes.status'),
    t('entryTypes.room'),
  ];
}

export default EntryTypes;
