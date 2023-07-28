import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function TimeWidget() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(language === 'en' ? 'en-EN' : 'nl-NL')
  );
  const date = new Date().toLocaleDateString(language === 'en' ? 'en-EN' : 'nl-NL');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString(language === 'en' ? 'en-EN' : 'nl-NL'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [language]);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="panel-heading">{t('dashboard.modal.time')}</div>
      <div className="flex h-full items-center justify-center">
        <h3 className="text-center text-2xl">{time}</h3>
      </div>
      <div className="flex justify-center">
        <p>{date}</p>
      </div>
    </div>
  );
}

export default TimeWidget;
