import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Step3 = ({ formData, setFormData, onBack }) => {
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = () => {
  const { name, email, company, industry, size, theme, layout } = formData;

  if (!theme || !layout) {
    setError("Please select both theme and layout.");
  } else {
    updateUser({ name, email, company, industry, size, theme, layout });

    setTimeout(() => navigate("/dashboard"), 100);
  }
};

  return (
      <div className="bg-gray-50 min-h-[calc(100vh-2rem)] px-4 pt-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">Preferences</h2>
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4">
        Theme
        <select
          name="theme"
          value={formData.theme || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        Layout
        <select
          name="layout"
          value={formData.layout || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Layout</option>
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-between">
          <button onClick={onBack} className="px-4 py-2 bg-gray-300 rounded">
            Back
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
