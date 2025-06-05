import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Step1 from "../components/OnboardingStep1";
import Step2 from "../components/OnboardingStep2";
import Step3 from "../components/OnboardingStep3";
import ProgressBar from "../components/ProgressBar";

const stepVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            key="step1"
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            key="step2"
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <Step3
            key="step3"
            formData={formData}
            setFormData={setFormData}
            onBack={prevStep}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Multi-step Onboarding Wizard</h2>
      <ProgressBar step={step} />

      <div className="relative mt-6 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;
