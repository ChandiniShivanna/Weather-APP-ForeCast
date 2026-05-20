import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastSection from "./components/ForecastSection";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import ThemeToggle from "./components/ThemeToggle";
import HourlyForecast from "./components/HourlyForecast";
import WeatherChart from "./components/WeatherChart";
import AQI from "./components/AQI";
import SunriseSunset from "./components/SunriseSunset";
import VoiceSearch from "./components/VoiceSearch";
import WeatherMap from "./components/WeatherMap";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [aqi, setAqi] = useState(1);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY";

  // Fetch weather by city
  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(weatherRes.data);
      setForecast(forecastRes.data.list);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("City not found");
    }
  };

  // Current location weather
  const fetchLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        setLoading(true);

        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        setWeather(weatherRes.data);
        setForecast(forecastRes.data.list);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Unable to fetch location weather");
      }
    });
  };

  useEffect(() => {
    fetchLocationWeather();
  }, []);

  // Dynamic Background
  const getBackground = () => {
    if (!weather) {
      return darkMode
        ? "from-[#0f172a] via-[#1e293b] to-[#020617]"
        : "from-blue-300 via-cyan-200 to-sky-100";
    }

    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clouds":
        return darkMode
          ? "from-slate-700 via-slate-800 to-slate-900"
          : "from-gray-300 to-gray-500";

      case "Rain":
        return darkMode
          ? "from-slate-800 via-blue-900 to-slate-900"
          : "from-blue-300 to-slate-400";

      case "Clear":
        return darkMode
          ? "from-orange-500 via-yellow-500 to-amber-600"
          : "from-yellow-300 via-orange-300 to-pink-300";

      case "Snow":
        return darkMode
          ? "from-slate-400 to-slate-700"
          : "from-slate-100 to-slate-300";

      case "Thunderstorm":
        return darkMode
          ? "from-purple-900 via-black to-slate-900"
          : "from-purple-300 to-slate-500";

      default:
        return darkMode
          ? "from-[#0f172a] via-[#1e293b] to-[#020617]"
          : "from-blue-300 via-cyan-200 to-sky-100";
    }
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen bg-gradient-to-br ${getBackground()} transition-all duration-700 overflow-hidden relative`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* Weather Effects */}
      {weather}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10"
        >
          <div>
            <h1
              className={`text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              WeatherSphere
            </h1>

            <p
              className={`mt-2 text-lg ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Real-time forecasts & climate insights
            </p>
          </div>

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl mb-8"
        >
          <SearchBar fetchWeather={fetchWeather} />

          <div className="mt-4">
            <VoiceSearch fetchWeather={fetchWeather} />
          </div>
        </motion.div>

        {/* Loader */}
        {loading && <Loader />}

        {/* Error */}
        {error && <ErrorMessage error={error} />}

        {/* Main Weather Content */}
        {weather && !loading && (
          <>
            {/* Top Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Current Weather */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:scale-[1.01] transition"
              >
                <CurrentWeather weather={weather} />
              </motion.div>

              {/* Sunrise Sunset */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:scale-[1.01] transition"
              >
                <SunriseSunset weather={weather} />
              </motion.div>
            </div>

            {/* Middle Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
              {/* Hourly Forecast */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
              >
                <HourlyForecast forecast={forecast} />
              </motion.div>

              {/* Weather Chart */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
              >
                <WeatherChart forecast={forecast} />
              </motion.div>
            </div>

            {/* AQI + Forecast */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
              {/* AQI */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
              >
                <AQI aqi={aqi} />
              </motion.div>

              {/* Forecast */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
              >
                <ForecastSection forecast={forecast} />
              </motion.div>
            </div>

            {/* Weather Map */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl mb-6"
            >
              <WeatherMap lat={weather.coord.lat} lon={weather.coord.lon} />
            </motion.div>
          </>
        )}

        {/* Footer */}
        <footer
          className={`text-center mt-10 pb-5 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <p className="text-lg">Made with ❤️ using React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
