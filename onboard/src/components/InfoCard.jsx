const InfoCard = ({ title, value, isDarkMode }) => (
  <div
    className={`p-2 rounded shadow text-center ${
      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
    }`}
  >
    <h3 className={`text-sm leading-none ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
      {title}
    </h3>
    <p className="text-xl font-semibold leading-tight">{value}</p>
  </div>
);

export default InfoCard;
