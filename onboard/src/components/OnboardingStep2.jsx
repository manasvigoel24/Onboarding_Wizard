import { useUser } from "../context/UserContext";
import { useState } from "react";

const Step2 = ({ formData, setFormData, onNext, onBack }) => {
  const { updateUser } = useUser();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleNext = () => {
  const { company, industry, size } = formData;

  if (!company || !industry || !size) {
    setError("Please fill all fields.");
  } else if (company.length < 2) {
    setError("Company name must be at least 2 characters.");
  } else if (!/^\d+$/.test(size) || parseInt(size) <= 0) {
    setError("Size must be a positive number.");
  } else {
    setError("");
    updateUser({ company, industry, size });
    onNext();
  }
};

  return (
        <div className="bg-gray-50 min-h-[calc(100vh-2rem)] px-4 pt-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">Business Info</h2>
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4">
        Company Name
        <input
          type="text"
          name="company"
          placeholder=""
          value={formData.company || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        Industry
        <input
          type="text"
          name="industry"
          placeholder=""
          value={formData.industry || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        Company Size
        <input
          type="text"
          name="size"
          placeholder=""
          value={formData.size || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-between">
          <button onClick={onBack} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Back
          </button>
          <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
