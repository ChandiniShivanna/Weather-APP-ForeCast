import { WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";

import { motion } from "framer-motion";

function CurrentWeather({ weather }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">{weather.name}</h1>

          <p className="text-xl mt-2 text-white/80">
            {weather.weather[0].description}
          </p>

          <h2 className="text-8xl font-bold mt-6">
            {Math.round(weather.main.temp)}°C
          </h2>
        </div>

        <div className="mt-8 lg:mt-0">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="weather"
            className="w-52"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        <div className="bg-white/10 p-5 rounded-2xl">
          <WiHumidity size={45} />
          <p className="text-white/70">Humidity</p>
          <h1 className="text-2xl font-bold">{weather.main.humidity}%</h1>
        </div>

        <div className="bg-white/10 p-5 rounded-2xl">
          <WiStrongWind size={45} />
          <p className="text-white/70">Wind Speed</p>
          <h1 className="text-2xl font-bold">{weather.wind.speed} km/h</h1>
        </div>

        <div className="bg-white/10 p-5 rounded-2xl">
          <WiThermometer size={45} />
          <p className="text-white/70">Feels Like</p>
          <h1 className="text-2xl font-bold">
            {Math.round(weather.main.feels_like)}°C
          </h1>
        </div>

        <div className="bg-white/10 p-5 rounded-2xl">
          <WiThermometer size={45} />
          <p className="text-white/70">Pressure</p>
          <h1 className="text-2xl font-bold">{weather.main.pressure}</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default CurrentWeather;
