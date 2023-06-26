import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import useDarkMode from '../../hooks/useDarkMode';

interface ILanguages {
  [key: string]: {
    nativeName: string;
  };
  en: {
    nativeName: string;
  };
  nl: {
    nativeName: string;
  };
}

function SettingsModal() {
  const { t, i18n } = useTranslation();
  const [toggleOpenAlarms, setToggleOpenAlarms] = useState(true);
  const [toggleTipOfTheDay, setToggleTipOfTheDay] = useState(true);
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleClass = ' transform translate-x-5';
  const [colorTheme, setTheme] = useDarkMode();

  const languages: ILanguages = {
    en: { nativeName: 'English' },
    nl: { nativeName: 'Nederlands' },
  };

  return (
    <>
      <h2>{t('dashboard.modal.title')}</h2>
      <section className="grid w-[700px] grid-cols-2 gap-4">
        <div className="mx-1 my-2 flex items-center justify-between">
          <h4>{t('dashboard.openAlarms')}</h4>
          <div className="flex items-center gap-2">
            <p
              className={`font-normal dark:text-grey ${
                toggleOpenAlarms ? 'visible' : 'invisible'
              }`}
            >
              {t('dashboard.visible')}
            </p>
            <button
              type="button"
              tabIndex={0}
              className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                toggleOpenAlarms ? 'bg-primary-200' : 'bg-grey'
              } p-1`}
              onClick={() => {
                setToggleOpenAlarms(!toggleOpenAlarms);
              }}
              onKeyDown={() => {
                setToggleOpenAlarms(!toggleOpenAlarms);
              }}
            >
              <div
                className={`bg-black h-5 w-5  rounded-full bg-white shadow-md duration-300 ease-in-out ${
                  toggleOpenAlarms ? null : toggleClass
                }`}
              />
            </button>
            <p
              className={`font-normal dark:text-grey ${
                toggleOpenAlarms ? 'invisible' : 'visible'
              }`}
            >
              {t('dashboard.hidden')}
            </p>
          </div>
        </div>
        <div className="mx-1 my-2 flex items-center justify-between">
          <h4 className="flex gap-2">
            <LanguageIcon
              className="text-black-300 dark:text-grey"
              style={{ fontSize: '20px' }}
            />
            <p>{t('dashboard.language')}</p>
          </h4>
          <div className="mx-auto flex items-center gap-2">
            <select
              value={i18n.resolvedLanguage}
              onChange={(event) => i18n.changeLanguage(event.target.value)}
              className="px-1 font-normal outline-none dark:bg-black-100 dark:text-grey"
            >
              {Object.keys(languages).map((lng) => (
                <option key={lng} value={lng}>
                  {languages[lng].nativeName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mx-1 my-2 flex items-center justify-between">
          <h4>Tip of the day</h4>
          <div className="flex items-center gap-2">
            <p
              className={`font-normal dark:text-grey ${
                toggleTipOfTheDay ? 'visible' : 'invisible'
              }`}
            >
              {t('dashboard.visible')}
            </p>
            <button
              type="button"
              tabIndex={0}
              className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                toggleTipOfTheDay ? 'bg-primary-200' : 'bg-grey'
              } p-1`}
              onClick={() => {
                setToggleTipOfTheDay(!toggleTipOfTheDay);
              }}
              onKeyDown={() => {
                setToggleTipOfTheDay(!toggleTipOfTheDay);
              }}
            >
              <div
                className={`bg-black h-5 w-5  rounded-full bg-white shadow-md duration-300 ease-in-out ${
                  toggleTipOfTheDay ? null : toggleClass
                }`}
              />
            </button>
            <p
              className={`font-normal dark:text-grey ${
                toggleTipOfTheDay ? 'invisible' : 'visible'
              }`}
            >
              {t('dashboard.hidden')}
            </p>
          </div>
        </div>
        <div className="mx-1 my-2 flex items-center justify-between">
          <h4 className="flex gap-2">
            {colorTheme === 'light' ? (
              <DarkModeIcon
                className="text-black-300 dark:text-grey"
                style={{ fontSize: '20px' }}
              />
            ) : (
              <LightModeIcon
                className="text-black-300"
                style={{ fontSize: '20px' }}
              />
            )}
            <p>{t('dashboard.darkMode')}</p>
          </h4>
          <p
            className={`font-normal dark:text-grey ${
              toggleDarkMode ? 'visible' : 'invisible'
            }`}
          >
            <p>{t('dashboard.off')}</p>
          </p>
          <button
            type="button"
            tabIndex={0}
            className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
              !toggleDarkMode ? 'bg-primary-200' : 'bg-grey'
            } p-1`}
            onClick={() => {
              setTheme(colorTheme);
              setToggleDarkMode(!toggleDarkMode);
            }}
            onKeyDown={() => {
              setTheme(colorTheme);
              setToggleDarkMode(!toggleDarkMode);
            }}
          >
            <div
              className={`bg-black h-5 w-5  rounded-full bg-white shadow-md duration-300 ease-in-out ${
                toggleDarkMode ? toggleClass : null
              }`}
            />
          </button>
          <p
            className={`font-normal dark:text-grey ${
              toggleDarkMode ? 'invisible' : 'visible'
            }`}
          >
            {t('dashboard.on')}
          </p>
        </div>
        <div className="mx-1 my-2 flex items-center justify-between">
          <h4>Favourites</h4>
          <div className="flex items-center gap-2">
            <p
              className={`font-normal dark:text-grey ${
                toggleTipOfTheDay ? 'visible' : 'invisible'
              }`}
            >
              {t('dashboard.visible')}
            </p>
            <button
              type="button"
              tabIndex={0}
              className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                toggleTipOfTheDay ? 'bg-primary-200' : 'bg-grey'
              } p-1`}
              onClick={() => {
                setToggleTipOfTheDay(!toggleTipOfTheDay);
              }}
              onKeyDown={() => {
                setToggleTipOfTheDay(!toggleTipOfTheDay);
              }}
            >
              <div
                className={`bg-black h-5 w-5  rounded-full bg-white shadow-md duration-300 ease-in-out ${
                  toggleTipOfTheDay ? null : toggleClass
                }`}
              />
            </button>
            <p
              className={`font-normal dark:text-grey ${
                toggleTipOfTheDay ? 'invisible' : 'visible'
              }`}
            >
              {t('dashboard.hidden')}
            </p>
          </div>
        </div>
        <div className="mx-1 my-2 flex items-center justify-between">
          <h4 className="flex gap-2">
            <DarkModeIcon
              className="text-black-300 dark:text-grey"
              style={{ fontSize: '20px' }}
            />
            <p>{t('Font size')}</p>
          </h4>
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            className="text-primary-200"
            id="myRange"
          />
        </div>
      </section>
    </>
  );
}

export default SettingsModal;
