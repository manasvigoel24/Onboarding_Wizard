const ProgressBar = ({ step }) => {
  const steps = [
    { number: 1, label: "Personal Info" },
    { number: 2, label: "Business Info" },
    { number: 3, label: "Preferences" },
  ];

  return (
    <div className="flex justify-between items-center w-full max-w-2xl mx-auto px-4 my-8">
      {steps.map((s, index) => {
        const isCompleted = step > s.number;
        const isCurrent = step === s.number;

        return (
          <div key={s.number} className="flex-1 relative flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-all duration-300 ${
                isCompleted || isCurrent ? "bg-blue-500 text-white" : "bg-gray-300 text-white"
              }`}
            >
              {isCompleted ? "✓" : s.number}
            </div>

            <div className="mt-2 text-sm text-center text-gray-700 font-medium">
              {s.label}
            </div>

            {index < steps.length - 1 && (
              <div className="absolute top-5 left-1/2 w-full h-1 z-0">
                <div
                  className={`absolute left-1/2 w-full h-1 transform -translate-x-1/2 ${
                    step > s.number ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
