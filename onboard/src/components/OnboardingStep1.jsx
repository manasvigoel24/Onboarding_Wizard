import { useState } from "react";

const Step1 = ({ formData, setFormData, onNext }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNext = () => {
    if (!formData.name || !formData.email) {
      setError("Please fill in all fields.");
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
    setError("Name must be at least 2 characters and contain only letters.");
    }else if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      onNext();
    }
  };

  return (
    <>
    <div className="bg-gray-50 min-h-[calc(100vh-2rem)] px-4 pt-12 flex flex-col items-center">
        
      <h2 className="text-2xl font-semibold mb-6">Personal Info</h2>
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4">
        Name
        <input
          type="text"
          name="name"
          placeholder=""
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name || ""}
          onChange={handleChange}
        />
        Email
        <input
          type="email"
          name="email"
          placeholder=""
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email || ""}
          onChange={handleChange}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Step1;
