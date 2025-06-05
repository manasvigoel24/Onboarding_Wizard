import { useUser } from "../context/UserContext";
import InfoCard from "../components/InfoCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { userData } = useUser();

  if (!userData || !userData.theme) {
    return <div className="p-6">Loading...</div>;
  }

  const isDarkMode = userData.theme.toLowerCase() === "dark";

  const weeklyProgress = [
    { day: "Mon", progress: 40 },
    { day: "Tue", progress: 55 },
    { day: "Wed", progress: 60 },
    { day: "Thu", progress: 75 },
    { day: "Fri", progress: 70 },
    { day: "Sat", progress: 80 },
    { day: "Sun", progress: 90 },
  ];

  const pageBgClass = isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900";
  const cardBgClass = isDarkMode ? "bg-gray-800" : "bg-white";
  const textGrayClass = isDarkMode ? "text-gray-400" : "text-gray-700";

  return (
    <div className={`${pageBgClass} min-h-screen p-6`}>
      <h1 className="text-2xl font-bold text-center mb-6">Welcome, {userData.name}</h1>

      {/* User Details Section */}
      {userData.layout === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InfoCard title="Email" value={userData.email} isDarkMode={isDarkMode} />
          <InfoCard title="Company" value={userData.company} isDarkMode={isDarkMode} />
          <InfoCard title="Industry" value={userData.industry} isDarkMode={isDarkMode} />
          <InfoCard title="Size" value={userData.size} isDarkMode={isDarkMode} />
          <InfoCard title="Theme" value={userData.theme} isDarkMode={isDarkMode} />
          <InfoCard title="Layout" value={userData.layout} isDarkMode={isDarkMode} />
        </div>
      ) : (
        <div className={`${cardBgClass} shadow rounded p-4 mb-6 transition-colors duration-300`}>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
           Your Details</h2>
          <ul className="space-y-2">
  <li>
    <strong className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}>Email:</strong>{" "}
    <span className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{userData.email}</span>
  </li>
  <li>
    <strong className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}>Company:</strong>{" "}
    <span className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{userData.company}</span>
  </li>
  <li>
    <strong className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}>Industry:</strong>{" "}
    <span className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{userData.industry}</span>
  </li>
  <li>
    <strong className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}>Size:</strong>{" "}
    <span className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{userData.size}</span>
  </li>
  <li>
    <strong className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}>Theme:</strong>{" "}
    <span className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{userData.theme}</span>
  </li>
  <li>
    <strong className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}>Layout:</strong>{" "}
    <span className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}>{userData.layout}</span>
  </li>
</ul>

        </div>
      )}

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <InfoCard title="Team Members" value="12" isDarkMode={isDarkMode} />
        <InfoCard title="Active Projects" value="5" isDarkMode={isDarkMode} />
        <InfoCard title="Notifications" value="3" isDarkMode={isDarkMode} />
      </div>

      {/* Weekly Progress Chart */}
      <div className={`${cardBgClass} shadow rounded p-4 mt-10`}>
        <h2 className="text-xl font-semibold mb-4 text-center">Weekly Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={weeklyProgress}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#374151" : "#e0e0e0"} />
            <XAxis
              dataKey="day"
              stroke={isDarkMode ? "#d1d5db" : "#333"}
              tick={{ fill: isDarkMode ? "#d1d5db" : "#333" }}
            />
            <YAxis
              stroke={isDarkMode ? "#d1d5db" : "#333"}
              tick={{ fill: isDarkMode ? "#d1d5db" : "#333" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#374151" : "#fff",
                borderColor: isDarkMode ? "#4b5563" : "#ccc",
                color: isDarkMode ? "#f9fafb" : "#000",
              }}
            />
            <Line
              type="monotone"
              dataKey="progress"
              stroke={isDarkMode ? "#60a5fa" : "#2563eb"}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
