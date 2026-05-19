import { motion } from "framer-motion";

function ForecastSection({ forecast }) {
  const filteredForecast = forecast.filter((item, index) => index % 8 === 0);

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold mb-6">5-Day Forecast</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {filteredForecast.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-white/10 backdrop-blur-lg p-5 rounded-3xl border border-white/10 hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h2>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather"
            />

            <h1 className="text-3xl font-bold">
              {Math.round(item.main.temp)}°C
            </h1>

            <p className="text-white/70 mt-2 capitalize">
              {item.weather[0].description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ForecastSection;
