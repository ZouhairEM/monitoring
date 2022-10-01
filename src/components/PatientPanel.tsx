function PatientPanel() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="font-extrabold bg-green dark:bg-black-100 text-white p-2">
          Profile
        </div>
        <div className="text-sm p-2">
          <div className="text-green dark:text-white font-bold uppercase">
            Name
          </div>
          <div className="text-black-100 dark:text-white">
            Placeholder person
          </div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green font-bold uppercase">Name</div>
          <div className="text-black-100">Placeholder person</div>
        </div>
        <div className="text-sm p-2">
          <div className="text-green font-bold uppercase">Name</div>
          <div className="text-black-100">Placeholder person</div>
        </div>
      </div>
    </div>
  );
}

export default PatientPanel;
