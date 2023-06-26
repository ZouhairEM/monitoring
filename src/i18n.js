import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          dashboard: {
            modal: {
              title: 'Settings',
            },
            openAlarms: 'Open alarms',
            darkMode: 'Dark Mode',
            on: 'On',
            off: 'Off',
            visible: 'Visible',
            hidden: 'Hidden',
            language: 'Language',
          },
          sidebar: {
            monitoring: 'Monitoring',
            dashboard: 'Dashboard',
            history: 'History',
            collapse: 'Collapse',
          },
          toast: {
            didntMeanTo: "Didn't mean to?",
            undo: 'Undo',
          },
          controlPanel: {
            title: 'Control Options',
            followUp: 'Follow up',
            closeAlarm: 'Close alarm',
            previousAlarm: 'Previous alarm',
            nextAlarm: 'Next alarm',
            modal: {
              title: 'Follow up',
              patientName: 'Patient name',
              room: 'Room',
              call: 'Call',
              cancel: 'Cancel',
            },
          },
          alarmTypes: {
            loudNoise: 'Loud Noise',
            fireHazard: 'Fire Hazard',
            helpCall: 'Help call',
            patientUp: 'Patient up',
            heartMonitor: 'Heart monitor',
          },
          entryTypes: {
            priority: 'Priority',
            alarm: 'Alarm',
            patient: 'Patient',
            time: 'Time',
            status: 'Status',
            room: 'Room',
          },
          availableStatus: {
            open: 'Open',
            done: 'Done',
          },
          navBar: {
            title: 'Monitor App',
            description:
              'A simulated dashboard for nurses to monitor patient activity',
            openAlarms: 'open alarms',
            modal: {
              job: 'Healthcare Provider',
              description: 'Log out from Monitor App?',
              confirm: 'Yes, log out',
              cancel: 'Cancel',
            },
          },
          patientBio: {
            title: 'Patient',
            name: 'Name',
            dob: 'Date of Birth',
            gender: 'Gender',
            age: 'Age',
            room: 'Room',
            doctor: 'Doctor',
            clickOnAlarm: 'Click on any active alarm',
            below: 'below',
            onTheRight: 'on the right',
            patientInfo: ', patient will be displayed here.',
          },
          healthCareInfo: {
            title: 'Healthcare Info',
            plan: 'Plan',
            diagnosis: 'Diagnosis',
            provider: 'Provider',
          },
          noAlarmHasBeenSelected: 'No alarm has been selected',
          emergencyContact: {
            title: 'Emergency Contact',
            name: 'Name',
            relation: 'Relation',
            address: 'Address',
            private_phone: 'Private phone',
            work_phone: 'Work phone',
          },
          alarm: 'Alarm',
          alarmHasBeenClosed: 'has been closed',
        },
      },
      nl: {
        translation: {
          dashboard: {
            modal: {
              title: 'Instellingen',
            },
            openAlarms: 'Open meldingen',
            darkMode: 'Donkere Modus',
            on: 'Aan',
            off: 'Uit',
            visible: 'Zichtbaar',
            hidden: 'Verstopt',
            language: 'Taal',
          },
          sidebar: {
            monitoring: 'Monitoring',
            dashboard: 'Dashboard',
            history: 'Geschiedenis',
            collapse: 'Inklappen',
          },
          toast: {
            didntMeanTo: 'Niet de bedoeling?',
            undo: 'Maak ongedaan',
          },
          controlPanel: {
            title: 'Beheeropties',
            followUp: 'Opvolgen',
            closeAlarm: 'Melding sluiten',
            previousAlarm: 'Vorige melding',
            nextAlarm: 'Volgende melding',
            modal: {
              title: 'Opvolgen',
              patientName: 'Patiëntnaam',
              room: 'Kamer',
              call: 'Bel',
              cancel: 'Annuleer',
            },
          },
          alarmTypes: {
            loudNoise: 'Harde knal',
            fireHazard: 'Brandgevaar',
            helpCall: 'Hulpomroep',
            patientUp: 'Patiënt uit',
            heartMonitor: 'Hartslag',
          },
          entryTypes: {
            priority: 'Prioriteit',
            alarm: 'Melding',
            patient: 'Patiënt',
            time: 'Tijd',
            status: 'Status',
            room: 'Kamer',
          },
          availableStatus: {
            open: 'Open',
            done: 'Klaar',
          },
          navBar: {
            title: 'Monitor App',
            description:
              'Een gesimuleerde dashboard app voor verplegers om patiënten te monitoren',
            openAlarms: 'open meldingen',
            modal: {
              job: 'Verpleger',
              description: 'Uitloggen van de Monitor App?',
              confirm: 'Ja, log uit',
              cancel: 'Annuleer',
            },
          },
          patientBio: {
            title: 'Patiënt',
            name: 'Naam',
            dob: 'Geboortedatum',
            gender: 'Geslacht',
            age: 'Leeftijd',
            room: 'Kamer',
            doctor: 'Dokter',
            clickOnAlarm: 'Klik op een melding',
            below: 'hieronder weergegeven',
            onTheRight: 'rechts weergegeven',
            patientInfo:
              ', de bijbehorende patiëntinformatie zal hier verschijnen.',
          },
          healthCareInfo: {
            title: 'Zorggegevens',
            plan: 'Zorgplan',
            diagnosis: 'Diagnose',
            provider: 'Verzekeraar',
          },
          noAlarmHasBeenSelected: 'Geen melding geselecteerd',
          emergencyContact: {
            title: 'Contactpersoon',
            name: 'Naam',
            relation: 'Relatie',
            address: 'Adres',
            private_phone: 'Privé tel.',
            work_phone: 'Werk tel.',
          },
          alarm: 'Melding',
          alarmHasBeenClosed: 'is gesloten.',
        },
      },
    },
  });

export default i18n;
