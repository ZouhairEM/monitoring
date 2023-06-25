import { useTranslation } from 'react-i18next';

function SettingsModal() {
  const { i18n } = useTranslation();

  const languages: any = {
    en: { nativeName: 'English' },
    nl: { nativeName: 'Nederlands' },
  };

  return (
    <div>
      {Object.keys(languages).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {languages[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default SettingsModal;
