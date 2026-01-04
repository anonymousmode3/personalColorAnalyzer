type ProgressStepProps = {
  current: number;
  total?: number;
};

export default function ProgressStep({
  current,
  total = 5,
}: ProgressStepProps) {
  const steps = Array.from({ length: total });

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((_, index) => {
        const step = index + 1;
        const isCompleted = step < current;
        const isCurrent = step === current;

        return (
          <div key={step} className="flex-1 flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold
                ${
                  isCompleted
                    ? "bg-blue-600 text-white"
                    : isCurrent
                    ? "border-2 border-blue-600 text-blue-600"
                    : "border border-gray-300 text-gray-400"
                }`}
            >
              {isCompleted ? "✓" : step}
            </div>

            {step !== total && (
              <div
                className={`h-1 flex-1 mx-2
                  ${
                    isCompleted
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
