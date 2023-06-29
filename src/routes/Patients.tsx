import { useTranslation } from 'react-i18next';
import NurseTwo from '../assets/img/illustrations/NurseTwo';

function Patients() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <main className="flex h-[754px] w-full flex-col gap-2 p-[1px] md:mb-0">
        <h1>{t('patientsPage.title')}</h1>
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-24">
              <NurseTwo />
            </div>
            <h2>Still under construction!</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Patients;
