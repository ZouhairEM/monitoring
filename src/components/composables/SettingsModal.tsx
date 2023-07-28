import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PaletteIcon from '@mui/icons-material/Palette';
import useDarkMode from '../../hooks/useDarkMode';
import useSettingsStore from '../../stores/SettingsStore';
import useBreakpoint from '../../hooks/useBreakpoint';

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
  const settingsStore = useSettingsStore((state) => state);
  const breakpoint = useBreakpoint();
  const { t, i18n } = useTranslation();

  const toggleClass = ' transform translate-x-5';
  const [colorTheme, setTheme] = useDarkMode();

  const languages: ILanguages = {
    en: { nativeName: 'English' },
    nl: { nativeName: 'Nederlands' },
    de: { nativeName: 'Deutsch' },
    fr: { nativeName: 'Français' },
  };

  useEffect(() => {
    if (!localStorage.getItem('rangeValue')) {
      localStorage.setItem('rangeValue', '50');
    }

    if (settingsStore.rangeValue === 0) {
      localStorage.setItem('--text-xs', '0.55rem');
      localStorage.setItem('--text-sm', '0.675rem');
      localStorage.setItem('--text-base', '0.8rem');
      localStorage.setItem('--text-lg', '0.925rem');
      localStorage.setItem('--text-xl', '1.05rem');
      localStorage.setItem('--text-2xl', '1.3rem');
      localStorage.setItem('--text-6xl', '3.8rem');
    }
    if (settingsStore.rangeValue === 25) {
      localStorage.setItem('--text-xs', '0.65rem');
      localStorage.setItem('--text-sm', '0.775rem');
      localStorage.setItem('--text-base', '0.9rem');
      localStorage.setItem('--text-lg', '1.025rem');
      localStorage.setItem('--text-xl', '1.15rem');
      localStorage.setItem('--text-2xl', '1.4rem');
      localStorage.setItem('--text-6xl', '3.9rem');
    }
    if (settingsStore.rangeValue === 50) {
      localStorage.setItem('--text-xs', '0.75rem');
      localStorage.setItem('--text-sm', '0.875rem');
      localStorage.setItem('--text-base', '1rem');
      localStorage.setItem('--text-lg', '1.125rem');
      localStorage.setItem('--text-xl', '1.25rem');
      localStorage.setItem('--text-2xl', '1.5rem');
      localStorage.setItem('--text-6xl', '4rem');
    }
    if (settingsStore.rangeValue === 75) {
      localStorage.setItem('--text-xs', '0.85rem');
      localStorage.setItem('--text-sm', '0.975rem');
      localStorage.setItem('--text-base', '1.1rem');
      localStorage.setItem('--text-lg', '1.225rem');
      localStorage.setItem('--text-xl', '1.35rem');
      localStorage.setItem('--text-2xl', '1.4rem');
      localStorage.setItem('--text-6xl', '4.1rem');
    }
    if (settingsStore.rangeValue === 100) {
      localStorage.setItem('--text-xs', '0.95rem');
      localStorage.setItem('--text-sm', '1.075rem');
      localStorage.setItem('--text-base', '1.2rem');
      localStorage.setItem('--text-lg', '1.325rem');
      localStorage.setItem('--text-xl', '1.45rem');
      localStorage.setItem('--text-2xl', '1.5rem');
      localStorage.setItem('--text-6xl', '4.2rem');
    }
    document.documentElement.style.setProperty('--text-xs', localStorage.getItem('--text-xs'));
    document.documentElement.style.setProperty('--text-sm', localStorage.getItem('--text-sm'));
    document.documentElement.style.setProperty('--text-base', localStorage.getItem('--text-base'));
    document.documentElement.style.setProperty('--text-lg', localStorage.getItem('--text-lg'));
    document.documentElement.style.setProperty('--text-xl', localStorage.getItem('--text-xl'));
    document.documentElement.style.setProperty('--text-2xl', localStorage.getItem('--text-2xl'));
    document.documentElement.style.setProperty('--text-6xl', localStorage.getItem('--text-6xl'));
    localStorage.setItem('rangeValue', settingsStore.rangeValue.toString());
  }, [settingsStore.rangeValue]);

  const changeColorPalette = (colors: { color1: string; color2: string; color3: string }) => {
    document.documentElement.style.setProperty('--primary-100', colors.color1);
    document.documentElement.style.setProperty('--primary-200', colors.color2);
    document.documentElement.style.setProperty('--primary-300', colors.color3);

    localStorage.setItem('--primary-100', colors.color1);
    localStorage.setItem('--primary-200', colors.color2);
    localStorage.setItem('--primary-300', colors.color3);
  };

  return (
    <>
      <h2 className="mb-4">{t('dashboard.modal.title')}</h2>
      <section className="grid w-[300px] grid-cols-2 sm:w-[500px] md:w-[700px] md:gap-4">
        <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4>{t('dashboard.modal.openAlarms')}</h4>
            <div className="flex items-center gap-2">
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.alarms ? 'visible' : 'invisible'
                }`}
              >
                {t('dashboard.modal.visible')}
              </p>
              <button
                type="button"
                tabIndex={0}
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                  settingsStore.widgets.alarms
                    ? 'bg-primary-200 dark:bg-primary-200'
                    : 'bg-grey-200'
                } p-1`}
                onClick={() => {
                  localStorage.setItem('widgets.alarms', String(!settingsStore.widgets.alarms));
                  settingsStore.setWidget('alarms', !settingsStore.widgets.alarms);
                }}
                onKeyDown={() => {
                  localStorage.setItem('widgets.alarms', String(!settingsStore.widgets.alarms));
                  settingsStore.setWidget('alarms', !settingsStore.widgets.alarms);
                }}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    settingsStore.widgets.alarms ? null : toggleClass
                  }`}
                />
              </button>
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.alarms ? 'invisible' : 'visible'
                }`}
              >
                {t('dashboard.modal.hidden')}
              </p>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4>{t('dashboard.modal.tipOfTheDay')}</h4>
            <div className="flex items-center gap-2">
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.tip ? 'visible' : 'invisible'
                }`}
              >
                {t('dashboard.modal.visible')}
              </p>
              <button
                type="button"
                tabIndex={0}
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                  settingsStore.widgets.tip ? 'bg-primary-200 dark:bg-primary-200' : 'bg-grey-200'
                } p-1`}
                onClick={() => {
                  localStorage.setItem('widgets.tip', String(!settingsStore.widgets.tip));
                  settingsStore.setWidget('tip', !settingsStore.widgets.tip);
                }}
                onKeyDown={() => {
                  localStorage.setItem('widgets.tip', String(!settingsStore.widgets.tip));
                  settingsStore.setWidget('tip', !settingsStore.widgets.tip);
                }}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    settingsStore.widgets.tip ? null : toggleClass
                  }`}
                />
              </button>
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.tip ? 'invisible' : 'visible'
                }`}
              >
                {t('dashboard.modal.hidden')}
              </p>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4>{t('dashboard.modal.totalAlarms')}</h4>
            <div className="flex items-center gap-2">
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.total ? 'visible' : 'invisible'
                }`}
              >
                {t('dashboard.modal.visible')}
              </p>
              <button
                type="button"
                tabIndex={0}
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                  settingsStore.widgets.total ? 'bg-primary-200 dark:bg-primary-200' : 'bg-grey-200'
                } p-1`}
                onClick={() => {
                  localStorage.setItem('widgets.total', String(!settingsStore.widgets.total));
                  settingsStore.setWidget('total', !settingsStore.widgets.total);
                }}
                onKeyDown={() => {
                  localStorage.setItem('widgets.total', String(!settingsStore.widgets.total));
                  settingsStore.setWidget('total', !settingsStore.widgets.total);
                }}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    settingsStore.widgets.total ? null : toggleClass
                  }`}
                />
              </button>
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.total ? 'invisible' : 'visible'
                }`}
              >
                {t('dashboard.modal.hidden')}
              </p>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4>{t('dashboard.modal.alarmsByType')}</h4>
            <div className="flex items-center gap-2">
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.type ? 'visible' : 'invisible'
                }`}
              >
                {t('dashboard.modal.visible')}
              </p>
              <button
                type="button"
                tabIndex={0}
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                  settingsStore.widgets.type ? 'bg-primary-200 dark:bg-primary-200' : 'bg-grey-200'
                } p-1`}
                onClick={() => {
                  localStorage.setItem('widgets.type', String(!settingsStore.widgets.type));
                  settingsStore.setWidget('type', !settingsStore.widgets.type);
                }}
                onKeyDown={() => {
                  localStorage.setItem('widgets.type', String(!settingsStore.widgets.type));
                  settingsStore.setWidget('type', !settingsStore.widgets.type);
                }}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    settingsStore.widgets.type ? null : toggleClass
                  }`}
                />
              </button>
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.type ? 'invisible' : 'visible'
                }`}
              >
                {t('dashboard.modal.hidden')}
              </p>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4>{t('dashboard.modal.time')}</h4>
            <div className="flex items-center gap-2">
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.time ? 'visible' : 'invisible'
                }`}
              >
                {t('dashboard.modal.visible')}
              </p>
              <button
                type="button"
                tabIndex={0}
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                  settingsStore.widgets.time ? 'bg-primary-200 dark:bg-primary-200' : 'bg-grey-200'
                } p-1`}
                onClick={() => {
                  localStorage.setItem('widgets.time', String(!settingsStore.widgets.time));
                  settingsStore.setWidget('time', !settingsStore.widgets.time);
                }}
                onKeyDown={() => {
                  localStorage.setItem('widgets.time', String(!settingsStore.widgets.time));
                  settingsStore.setWidget('time', !settingsStore.widgets.time);
                }}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    settingsStore.widgets.time ? null : toggleClass
                  }`}
                />
              </button>
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.time ? 'invisible' : 'visible'
                }`}
              >
                {t('dashboard.modal.hidden')}
              </p>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4>{t('dashboard.modal.newestAlarm')}</h4>
            <div className="flex items-center gap-2">
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.newest ? 'visible' : 'invisible'
                }`}
              >
                {t('dashboard.modal.visible')}
              </p>
              <button
                type="button"
                tabIndex={0}
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                  settingsStore.widgets.newest
                    ? 'bg-primary-200 dark:bg-primary-200'
                    : 'bg-grey-200'
                } p-1`}
                onClick={() => {
                  localStorage.setItem('widgets.newest', String(!settingsStore.widgets.newest));
                  settingsStore.setWidget('newest', !settingsStore.widgets.newest);
                }}
                onKeyDown={() => {
                  localStorage.setItem('widgets.newest', String(!settingsStore.widgets.newest));
                  settingsStore.setWidget('newest', !settingsStore.widgets.newest);
                }}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    settingsStore.widgets.newest ? null : toggleClass
                  }`}
                />
              </button>
              <p
                className={`font-normal dark:text-grey-200 ${
                  settingsStore.widgets.newest ? 'invisible' : 'visible'
                }`}
              >
                {t('dashboard.modal.hidden')}
              </p>
            </div>
          </div>
          {breakpoint === 'sm' && <hr className="opacity-20" />}
          {breakpoint === 'md' && <hr className="opacity-20" />}
        </div>
        <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4 className="flex gap-2">
              <LanguageIcon
                className="text-black-300 dark:text-grey-200"
                style={{ fontSize: '20px' }}
              />
              <p>{t('dashboard.modal.language')}</p>
            </h4>
            <div className="flex items-center gap-2">
              <select
                value={i18n.resolvedLanguage}
                onChange={(event) => i18n.changeLanguage(event.target.value)}
                className="p-1 font-normal outline-none dark:bg-black-100 dark:text-grey-200"
              >
                {Object.keys(languages).map((lng) => (
                  <option key={lng} value={lng}>
                    {languages[lng].nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4 className="flex gap-2">
              {colorTheme === 'light' ? (
                <DarkModeIcon
                  className="text-black-300 dark:text-grey-200"
                  style={{ fontSize: '20px' }}
                />
              ) : (
                <LightModeIcon className="text-black-300" style={{ fontSize: '20px' }} />
              )}
              <p>{t('dashboard.modal.darkMode')}</p>
            </h4>
            <p
              className={`font-normal dark:text-grey-200 ${
                colorTheme === 'light' ? 'visible' : 'invisible'
              }`}
            >
              {t('dashboard.modal.on')}
            </p>
            <button
              type="button"
              tabIndex={0}
              className={`flex h-6 w-12 cursor-pointer items-center rounded-full transition ${
                colorTheme === 'light' ? 'bg-primary-200 dark:bg-primary-200' : 'bg-grey-200'
              } p-1`}
              onClick={() => {
                setTheme(colorTheme);
                settingsStore.setDarkMode(!settingsStore.darkMode);
              }}
              onKeyDown={() => {
                setTheme(colorTheme);
                settingsStore.setDarkMode(!settingsStore.darkMode);
              }}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow-md duration-300 ease-in-out ${
                  colorTheme === 'light' ? toggleClass : null
                }`}
              />
            </button>
            <p
              className={`font-normal dark:text-grey-200 ${
                colorTheme === 'light' ? 'invisible' : 'visible'
              }`}
            >
              {t('dashboard.modal.off')}
            </p>
          </div>
          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4 className="flex gap-2">
              <TextFieldsIcon
                className="text-black-300 dark:text-grey-200"
                style={{ fontSize: '20px' }}
              />
              <p>{t('dashboard.modal.fontSize')}</p>
            </h4>
            <label
              htmlFor="range"
              className="text-neutral-700 dark:text-neutral-200 flex items-center justify-center"
            >
              <span className="px-4 text-xs font-normal dark:text-grey-200">
                {!Number.isNaN(settingsStore.rangeValue) ? settingsStore.rangeValue : 50}%
              </span>
              <input
                type="range"
                className="transparent border-transparent h-1.5 cursor-pointer appearance-none rounded-lg bg-grey-200 accent-primary-200 dark:accent-primary-200"
                id="range"
                min={0}
                max={100}
                step={25}
                value={!Number.isNaN(settingsStore.rangeValue) ? settingsStore.rangeValue : 50}
                onChange={(e) => settingsStore.setRangeValue(e.target.valueAsNumber)}
              />
            </label>
          </div>
          <hr className="opacity-20" />
          <div className="mx-1 my-0 flex items-center justify-between md:my-2">
            <h4 className="flex gap-2">
              <PaletteIcon
                className="text-black-300 dark:text-grey-200"
                style={{ fontSize: '20px' }}
              />
              <p>{t('dashboard.modal.theme')}</p>
            </h4>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                tabIndex={0}
                className="hover:outline"
                onClick={() =>
                  changeColorPalette({
                    color1: 'rgba(32, 162, 211, 0.1)',
                    color2: '#20a2d3',
                    color3: '#3E54AC',
                  })
                }
                onKeyDown={() =>
                  changeColorPalette({
                    color1: 'rgba(32, 162, 211, 0.1)',
                    color2: '#20a2d3',
                    color3: '#3E54AC',
                  })
                }
              >
                <div className="flex h-8 w-8 rounded-sm drop-shadow-sm">
                  <div className="w-1/3" style={{ backgroundColor: 'rgba(32, 162, 211, 0.1)' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#20a2d3' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#3E54AC' }} />
                </div>
              </button>
              <button
                type="button"
                tabIndex={0}
                className="hover:outline"
                onClick={() =>
                  changeColorPalette({
                    color1: '#f3f5fa',
                    color2: '#7d3884',
                    color3: '#bc457e',
                  })
                }
                onKeyDown={() =>
                  changeColorPalette({
                    color1: '#f3f5fa',
                    color2: '#7d3884',
                    color3: '#bc457e',
                  })
                }
              >
                <div className="flex h-8 w-8 rounded-sm drop-shadow-sm">
                  <div className="w-1/3" style={{ backgroundColor: '#f3f5fa' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#7d3884' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#bc457e' }} />
                </div>
              </button>
              <button
                type="button"
                tabIndex={0}
                className="hover:outline"
                onClick={() =>
                  changeColorPalette({
                    color1: '#F7F1E5',
                    color2: '#F86F03',
                    color3: '#ffa630',
                  })
                }
                onKeyDown={() =>
                  changeColorPalette({
                    color1: '#F7F1E5',
                    color2: '#F86F03',
                    color3: '#ffa630',
                  })
                }
              >
                <div className="flex h-8 w-8 rounded-sm drop-shadow-sm">
                  <div className="w-1/3" style={{ backgroundColor: '#F7F1E5' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#F86F03' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#ffa630' }} />
                </div>
              </button>
              <button
                type="button"
                tabIndex={0}
                className="hover:outline"
                onClick={() =>
                  changeColorPalette({
                    color1: '#e6f5fe',
                    color2: '#00DFA2',
                    color3: '#617A55',
                  })
                }
                onKeyDown={() =>
                  changeColorPalette({
                    color1: '#e6f5fe',
                    color2: '#00DFA2',
                    color3: '#617A55',
                  })
                }
              >
                <div className="flex h-8 w-8 rounded-sm drop-shadow-sm">
                  <div className="w-1/3" style={{ backgroundColor: '#e6f5fe' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#00DFA2' }} />
                  <div className="w-1/3" style={{ backgroundColor: '#617A55' }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SettingsModal;
