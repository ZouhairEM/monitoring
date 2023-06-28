import { useTranslation } from 'react-i18next';

function TotalCountWidget() {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col justify-between gap-2">
        <p>{t('dashboard.modal.totalAlarms')}</p>
        <h3 className="text-center text-6xl">211</h3>
      </div>
      <div className="flex justify-center">
        <p>{t('dashboard.thisWeek')}</p>
      </div>
    </div>
  );
}

export default TotalCountWidget;
