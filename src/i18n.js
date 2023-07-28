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
            title: 'Dashboard',
            toMonitoring: 'To monitoring',
            thisWeek: 'This week',
            toAlarm: 'To alarm',
            tips: {
              first:
                'To close an alarm, click the "Close Alarm" button. It has an icon of a close symbol. This will mark the alarm as closed and trigger any necessary actions.',
              second:
                'Hover over buttons to see a visual change indicating it is clickable. The background color will change to a slightly lighter shade when you move the cursor over it.',
              third:
                'If you close an alarm, a toast notification may appear briefly to confirm the action. The toast notification provides feedback that the alarm has been closed successfully.',
              fourth:
                'Need to follow up on an alarm? Use the "Follow Up" button in the control panel. Clicking this will open a modal or dialog box where you can perform follow-up actions.',
              fifth:
                'Want to shuffle between alarms? Use the arrow buttons in the control panel. Clicking these will navigate through the available alarms, allowing you to review or interact with each one.',
              sixth:
                'Take advantage of the keyboard shortcuts for quick interactions. For example, you can press the Enter key to close the selected alarm or use the arrow keys to navigate between alarms.',
              seventh:
                'The control panel and alarm interface adapt to different screen sizes, ensuring a seamless user experience across various devices.',
              eigth:
                'Multilingual support is provided. The text on buttons, titles, and notifications will be displayed in the selected language.',
            },
            modal: {
              title: 'Settings',
              openAlarms: 'Open alarms',
              darkMode: 'Dark Mode',
              on: 'On',
              off: 'Off',
              visible: 'Visible',
              hidden: 'Hidden',
              language: 'Language',
              tipOfTheDay: 'Tip of the day',
              totalAlarms: 'Total alarms',
              alarmsByType: 'Alarms by type',
              time: 'Time',
              newestAlarm: 'Newest alarm',
              fontSize: 'Font size',
              theme: 'Theme',
            },
          },
          patientsPage: {
            title: 'Patients',
            database: 'Database',
            details: 'Details',
            findByName: 'Find patient by name',
            findPatientDescription:
              'Find any patient in the database first, patient will be displayed here.',
            noPatientFoundDescription: 'No patient found by that name.',
            notes: 'Notes',
            addNote: 'Add a note specific to this patient',
            currentAlarms: 'current alarms',
          },
          sidebar: {
            monitoring: 'Monitoring',
            dashboard: 'Dashboard',
            patients: 'Patients',
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
            heartMonitor: 'HR monitor',
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
            description: 'A simulated dashboard for nurses to monitor patient activity',
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
            title: 'Dashboard',
            toMonitoring: 'Naar monitoring',
            thisWeek: 'Deze week',
            toAlarm: 'Naar alarm',
            tips: {
              first:
                'Om een alarm te sluiten, klik op de knop "Alarm Sluiten". Deze heeft een icoon van een sluitsymbool. Hierdoor wordt het alarm als gesloten gemarkeerd en worden eventuele benodigde acties geactiveerd.',
              second:
                'Beweeg de cursor over knoppen om een visuele verandering te zien die aangeeft dat erop geklikt kan worden. De achtergrondkleur verandert naar een iets lichtere tint wanneer je de cursor erover beweegt.',
              third:
                'Als je een alarm sluit, kan er kort een toastmelding verschijnen om de actie te bevestigen. De toastmelding geeft feedback dat het alarm succesvol is gesloten.',
              fourth:
                'Moet je een alarm opvolgen? Gebruik de "Opvolgen" knop in het bedieningspaneel. Door hierop te klikken, wordt een modaal of dialoogvenster geopend waarin je opvolgacties kunt uitvoeren.',
              fifth:
                'Wil je schakelen tussen alarmen? Gebruik de pijlknoppen in het bedieningspaneel. Door hierop te klikken, kun je door de beschikbare alarmen navigeren en elk alarm bekijken of ermee interageren.',
              sixth:
                'Maak gebruik van sneltoetsen voor snelle interacties. Bijvoorbeeld, je kunt op de Enter-toets drukken om het geselecteerde alarm te sluiten of de pijltoetsen gebruiken om tussen alarmen te navigeren.',
              seventh:
                'Het bedieningspaneel en het alarmscherm passen zich aan aan verschillende schermformaten, wat zorgt voor een naadloze gebruikerservaring op verschillende apparaten.',
              eigth:
                'Er is ondersteuning voor meerdere talen. De tekst op knoppen, titels en meldingen wordt weergegeven in de geselecteerde taal.',
            },
            patientsPage: {
              title: 'Patiënten',
            },
            modal: {
              title: 'Instellingen',
              openAlarms: 'Open alarmen',
              darkMode: 'Donkere modus',
              on: 'Aan',
              off: 'Uit',
              visible: 'Zichtbaar',
              hidden: 'Verborgen',
              language: 'Taal',
              tipOfTheDay: 'Tip van de dag',
              totalAlarms: 'Aantal alarmen',
              alarmsByType: 'Alarmen per type',
              time: 'Tijd',
              newestAlarm: 'Nieuwste alarm',
              fontSize: 'Lettergrootte',
              theme: 'Thema',
            },
          },
          patientsPage: {
            title: 'Patiënten',
            database: 'Database',
            details: 'Details',
            findByName: 'Zoek patiënt op naam',
            findPatientDescription:
              'Zoek eerst een patiënt in de database, de patiënt wordt hier weergegeven.',
            noPatientFoundDescription: 'Geen patiënt gevonden met die naam.',
            notes: 'Notities',
            addNote: 'Voeg een notitie toe specifiek over deze patiënt',
            currentAlarms: 'huidige meldingen',
          },
          sidebar: {
            monitoring: 'Monitoring',
            dashboard: 'Dashboard',
            patients: 'Patiënten',
            collapse: 'Inklappen',
          },
          toast: {
            didntMeanTo: 'Niet de bedoeling?',
            undo: 'Ongedaan maken',
          },
          controlPanel: {
            title: 'Bedieningsopties',
            followUp: 'Opvolgen',
            closeAlarm: 'Alarm sluiten',
            previousAlarm: 'Vorig alarm',
            nextAlarm: 'Volgend alarm',
            modal: {
              title: 'Opvolgen',
              patientName: 'Naam patiënt',
              room: 'Kamer',
              call: 'Bel',
              cancel: 'Annuleren',
            },
          },
          alarmTypes: {
            loudNoise: 'Luid geluid',
            fireHazard: 'Brandgevaar',
            helpCall: 'Hulpoproep',
            patientUp: 'Patiënt uit',
            heartMonitor: 'Hartmonitor',
          },
          entryTypes: {
            priority: 'Prioriteit',
            alarm: 'Alarm',
            patient: 'Patiënt',
            time: 'Tijd',
            status: 'Status',
            room: 'Kamer',
          },
          availableStatus: {
            open: 'Open',
            done: 'Af',
          },
          navBar: {
            title: 'Monitor App',
            description:
              'Een gesimuleerd dashboard voor verpleegkundigen om de activiteit van patiënten te monitoren',
            openAlarms: 'open alarmen',
            modal: {
              job: 'Zorgverlener',
              description: 'Uitloggen uit Monitor App?',
              confirm: 'Ja, uitloggen',
              cancel: 'Annuleren',
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
            clickOnAlarm: 'Klik op een actief alarm',
            below: 'hieronder',
            onTheRight: 'aan de rechterkant',
            patientInfo: ', patiënt wordt hier weergegeven.',
          },
          healthCareInfo: {
            title: 'Zorginformatie',
            plan: 'Plan',
            diagnosis: 'Diagnose',
            provider: 'Verstrekker',
          },
          noAlarmHasBeenSelected: 'Er is geen alarm geselecteerd',
          emergencyContact: {
            title: 'Noodcontact',
            name: 'Naam',
            relation: 'Relatie',
            address: 'Adres',
            private_phone: 'Prive-telefoon',
            work_phone: 'Werktelefoon',
          },
          alarm: 'Alarm',
          alarmHasBeenClosed: 'is gesloten',
        },
      },
      de: {
        translation: {
          dashboard: {
            title: 'Dashboard',
            toMonitoring: 'Zur Überwachung',
            thisWeek: 'Diese Woche',
            toAlarm: 'Zur Alarmierung',
            tips: {
              first:
                'Um einen Alarm zu schließen, klicken Sie auf die Schaltfläche "Alarm schließen". Sie hat ein Symbol eines Schließsymbols. Dadurch wird der Alarm als geschlossen markiert und alle erforderlichen Aktionen ausgelöst.',
              second:
                'Bewegen Sie den Mauszeiger über die Schaltflächen, um eine visuelle Veränderung zu sehen, die anzeigt, dass sie anklickbar sind. Die Hintergrundfarbe ändert sich beim Überfahren mit dem Cursor leicht zu einem helleren Farbton.',
              third:
                'Wenn Sie einen Alarm schließen, kann eine Toast-Benachrichtigung kurzzeitig erscheinen, um die Aktion zu bestätigen. Die Toast-Benachrichtigung gibt Feedback, dass der Alarm erfolgreich geschlossen wurde.',
              fourth:
                'Müssen Sie einem Alarm nachgehen? Verwenden Sie die Schaltfläche "Nachverfolgen" im Bedienfeld. Durch Klicken darauf wird ein Modalfenster geöffnet, in dem Sie Nachverfolgungsaktionen durchführen können.',
              fifth:
                'Möchten Sie zwischen Alarmen wechseln? Verwenden Sie die Pfeilschaltflächen im Bedienfeld. Durch Klicken darauf können Sie durch die verfügbaren Alarme navigieren und jeden einzelnen überprüfen oder mit ihm interagieren.',
              sixth:
                'Nutzen Sie die Tastenkombinationen für schnelle Interaktionen. Zum Beispiel können Sie die Eingabetaste drücken, um den ausgewählten Alarm zu schließen, oder die Pfeiltasten verwenden, um zwischen Alarmen zu navigieren.',
              seventh:
                'Das Bedienfeld und die Alarmoberfläche passen sich verschiedenen Bildschirmgrößen an und sorgen für ein nahtloses Benutzererlebnis auf verschiedenen Geräten.',
              eigth:
                'Es wird eine mehrsprachige Unterstützung bereitgestellt. Der Text auf Schaltflächen, Titeln und Benachrichtigungen wird in der ausgewählten Sprache angezeigt.',
            },
            patientsPage: {
              title: 'Patienten',
            },
            modal: {
              title: 'Einstellungen',
              openAlarms: 'Offene Alarme',
              darkMode: 'Dunkler Modus',
              on: 'Ein',
              off: 'Aus',
              visible: 'Sichtbar',
              hidden: 'Versteckt',
              language: 'Sprache',
              tipOfTheDay: 'Tipp des Tages',
              totalAlarms: 'Gesamtanzahl an Alarmen',
              alarmsByType: 'Alarme nach Typ',
              time: 'Zeit',
              newestAlarm: 'Neuester Alarm',
              fontSize: 'Schriftgröße',
              theme: 'Design',
            },
          },
          patientsPage: {
            title: 'Patienten',
            database: 'Datenbank',
            details: 'Details',
            findByName: 'Patienten nach Namen finden',
            findPatientDescription:
              'Suchen Sie zuerst einen Patienten in der Datenbank, der Patient wird hier angezeigt.',
            noPatientFoundDescription: 'Es wurde kein Patient mit diesem Namen gefunden.',
            notes: 'Notizen',
            addNote: 'Fügen Sie eine spezifische Notiz zu diesem Patienten hinzu',
            currentAlarms: 'aktuelle Alarme',
          },
          sidebar: {
            monitoring: 'Überwachung',
            dashboard: 'Dashboard',
            patients: 'Patienten',
            collapse: 'Einklappen',
          },
          toast: {
            didntMeanTo: 'Nicht beabsichtigt?',
            undo: 'Rückgängig machen',
          },
          controlPanel: {
            title: 'Steuerungsoptionen',
            followUp: 'Nachverfolgen',
            closeAlarm: 'Alarm schließen',
            previousAlarm: 'Vorheriger Alarm',
            nextAlarm: 'Nächster Alarm',
            modal: {
              title: 'Nachverfolgen',
              patientName: 'Patientenname',
              room: 'Raum',
              call: 'Anrufen',
              cancel: 'Abbrechen',
            },
          },
          alarmTypes: {
            loudNoise: 'Lauter Knall',
            fireHazard: 'Brandgefahr',
            helpCall: 'Hilferuf',
            patientUp: 'Patient auf',
            heartMonitor: 'Herzmonitor',
          },
          entryTypes: {
            priority: 'Priorität',
            alarm: 'Alarm',
            patient: 'Patient',
            time: 'Zeit',
            status: 'Status',
            room: 'Raum',
          },
          availableStatus: {
            open: 'Offen',
            done: 'Erledigt',
          },
          navBar: {
            title: 'Überwachungs-App',
            description:
              'Ein simuliertes Dashboard für Krankenschwestern zur Überwachung der Patientenaktivität',
            openAlarms: 'offene Alarme',
            modal: {
              job: 'Gesundheitsdienstleister',
              description: 'Aus der Überwachungs-App ausloggen?',
              confirm: 'Ja, ausloggen',
              cancel: 'Abbrechen',
            },
          },
          patientBio: {
            title: 'Patient',
            name: 'Name',
            dob: 'Geburtsdatum',
            gender: 'Geschlecht',
            age: 'Alter',
            room: 'Raum',
            doctor: 'Arzt',
            clickOnAlarm: 'Klicken Sie auf einen aktiven Alarm',
            below: 'unten',
            onTheRight: 'rechts',
            patientInfo: ', Patient wird hier angezeigt.',
          },
          healthCareInfo: {
            title: 'Gesundheitsinformationen',
            plan: 'Plan',
            diagnosis: 'Diagnose',
            provider: 'Anbieter',
          },
          noAlarmHasBeenSelected: 'Es wurde kein Alarm ausgewählt',
          emergencyContact: {
            title: 'Notfallkontakt',
            name: 'Name',
            relation: 'Verwandtschaftsverhältnis',
            address: 'Adresse',
            private_phone: 'Privattelefon',
            work_phone: 'Arbeitstelefon',
          },
          alarm: 'Alarm',
          alarmHasBeenClosed: 'wurde geschlossen',
        },
      },
      fr: {
        translation: {
          dashboard: {
            title: 'Dashboard',
            toMonitoring: 'Vers la surveillance',
            thisWeek: 'Cette semaine',
            toAlarm: 'Pour alarme',
            tips: {
              first:
                'Pour fermer une alarme, cliquez sur le bouton "Fermer l\'alarme". Il a une icône de symbole de fermeture. Cela marquera l\'alarme comme fermée et déclenchera toutes les actions nécessaires.',
              second:
                "Survolez les boutons pour voir un changement visuel indiquant qu'ils sont cliquables. La couleur de fond changera légèrement pour devenir plus claire lorsque vous déplacez le curseur dessus.",
              third:
                "Si vous fermez une alarme, une notification toast peut apparaître brièvement pour confirmer l'action. La notification toast fournit un retour d'information indiquant que l'alarme a été fermée avec succès.",
              fourth:
                'Besoin de faire un suivi sur une alarme ? Utilisez le bouton "Suivi" dans le panneau de contrôle. En cliquant dessus, cela ouvrira une boîte modale ou un dialogue où vous pourrez effectuer des actions de suivi.',
              fifth:
                "Vous voulez naviguer entre les alarmes ? Utilisez les boutons fléchés dans le panneau de contrôle. En cliquant dessus, vous pourrez naviguer parmi les alarmes disponibles, vous permettant de les revoir ou d'interagir avec chacune d'elles.",
              sixth:
                "Profitez des raccourcis clavier pour des interactions rapides. Par exemple, vous pouvez appuyer sur la touche Entrée pour fermer l'alarme sélectionnée ou utiliser les touches fléchées pour naviguer entre les alarmes.",
              seventh:
                "Le panneau de contrôle et l'interface d'alarme s'adaptent à différentes tailles d'écran, garantissant une expérience utilisateur fluide sur différents appareils.",
              eigth:
                'Une prise en charge multilingue est fournie. Le texte des boutons, des titres et des notifications sera affiché dans la langue sélectionnée.',
            },
            patientsPage: {
              title: 'Patients',
            },
            modal: {
              title: 'Paramètres',
              openAlarms: 'Alarmes ouvertes',
              darkMode: 'Mode sombre',
              on: 'Activé',
              off: 'Désactivé',
              visible: 'Visible',
              hidden: 'Caché',
              language: 'Langue',
              tipOfTheDay: 'Astuce du jour',
              totalAlarms: "Nombre total d'alarmes",
              alarmsByType: 'Alarmes par type',
              time: 'Heure',
              newestAlarm: 'Dernière alarme',
              fontSize: 'Taille de la police',
              theme: 'Thème',
            },
          },
          patientsPage: {
            title: 'Patients',
            database: 'Base de données',
            details: 'Détails',
            findByName: 'Trouver un patient par nom',
            findPatientDescription:
              "Recherchez d'abord un patient dans la base de données, le patient sera affiché ici.",
            noPatientFoundDescription: 'Aucun patient trouvé avec ce nom.',

            notes: 'Notes',
            addNote: 'Ajouter une note spécifique à ce patient',
            currentAlarms: 'alarmes en cours',
          },
          sidebar: {
            monitoring: 'Surveillance',
            dashboard: 'Dashboard',
            patients: 'Patients',
            collapse: 'Réduire',
          },
          toast: {
            didntMeanTo: 'Je me suis trompé(e) ?',
            undo: 'Annuler',
          },
          controlPanel: {
            title: 'Options de contrôle',
            followUp: 'Suivi',
            closeAlarm: "Fermer l'alarme",
            previousAlarm: 'Alarme précédente',
            nextAlarm: 'Alarme suivante',
            modal: {
              title: 'Suivi',
              patientName: 'Nom du patient',
              room: 'Chambre',
              call: 'Appeler',
              cancel: 'Annuler',
            },
          },
          alarmTypes: {
            loudNoise: 'Bruits forts',
            fireHazard: "Danger d'incendie",
            helpCall: "Appel à l'aide",
            patientUp: 'Patient debout',
            heartMonitor: 'Mon. cardiaque',
          },
          entryTypes: {
            priority: 'Priorité',
            alarm: 'Alarme',
            patient: 'Patient',
            time: 'Heure',
            status: 'Statut',
            room: 'Chambre',
          },
          availableStatus: {
            open: 'Ouvert',
            done: 'Terminé',
          },
          navBar: {
            title: 'Application de surveillance',
            description:
              "Un tableau de bord simulé pour les infirmières afin de surveiller l'activité des patients",
            openAlarms: 'alarmes ouvertes',
            modal: {
              job: 'Fournisseur de soins de santé',
              description: "Se déconnecter de l'application de surveillance ?",
              confirm: 'Oui, se déconnecter',
              cancel: 'Annuler',
            },
          },
          patientBio: {
            title: 'Patient',
            name: 'Nom',
            dob: 'Date de naissance',
            gender: 'Sexe',
            age: 'Âge',
            room: 'Chambre',
            doctor: 'Médecin',
            clickOnAlarm: 'Cliquez sur une alarme active',
            below: 'ci-dessous',
            onTheRight: 'à droite',
            patientInfo: ", les informations du patient s'afficheront ici.",
          },
          healthCareInfo: {
            title: 'Informations de santé',
            plan: 'Plan',
            diagnosis: 'Diagnostic',
            provider: 'Fournisseur',
          },
          noAlarmHasBeenSelected: "Aucune alarme n'a été sélectionnée",
          emergencyContact: {
            title: "Contact d'urgence",
            name: 'Nom',
            relation: 'Relation',
            address: 'Adresse',
            private_phone: 'Téléphone personnel',
            work_phone: 'Téléphone professionnel',
          },
          alarm: 'Alarme',
          alarmHasBeenClosed: 'a été fermée',
        },
      },
    },
  });

export default i18n;
