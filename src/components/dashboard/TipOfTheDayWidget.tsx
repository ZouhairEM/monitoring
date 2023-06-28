import { useTranslation } from 'react-i18next';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect, useMemo } from 'react';

function TipOfTheDayWidget() {
  const { t, i18n } = useTranslation();
  const [currentTip, setCurrentTip] = useState('');

  const tips = useMemo(
    () => [
      t('dashboard.tips.first'),
      t('dashboard.tips.second'),
      t('dashboard.tips.third'),
      t('dashboard.tips.fourth'),
      t('dashboard.tips.fifth'),
      t('dashboard.tips.sixth'),
      t('dashboard.tips.seventh'),
      t('dashboard.tips.eighth'),
    ],
    [t]
  );

  useEffect(() => {
    setCurrentTip(tips[1]);
  }, [i18n.language, tips]);

  const changeTip = (direction: 'prev' | 'next') => {
    let newIndex = 0;
    const currentIndex = tips.indexOf(currentTip);

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? tips.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
      newIndex = currentIndex === tips.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentTip(tips[newIndex]);
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <p className="flex h-full items-center justify-center text-center font-medium">
        {currentTip}
      </p>
      <div className="flex justify-center gap-2">
        <button
          type="button"
          tabIndex={0}
          className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
          onClick={() => changeTip('prev')}
          onKeyDown={() => changeTip('prev')}
        >
          <ArrowBackIosNewIcon style={{ height: '13px' }} />
        </button>
        <button
          type="button"
          tabIndex={0}
          className="flex items-center justify-center gap-1 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300"
          onClick={() => changeTip('next')}
          onKeyDown={() => changeTip('next')}
        >
          <ArrowForwardIosIcon style={{ height: '13px' }} />
        </button>
      </div>
    </div>
  );
}

export default TipOfTheDayWidget;
