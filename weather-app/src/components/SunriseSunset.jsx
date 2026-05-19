function SunriseSunset({ weather }) {
  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);

  return (
    <div className="grid md:grid-cols-2 gap-5 mt-10">
      <div className="bg-white/10 p-5 rounded-3xl">
        <h1 className="text-2xl font-bold">Sunrise</h1>

        <p className="text-4xl mt-3">{sunrise.toLocaleTimeString()}</p>
      </div>

      <div className="bg-white/10 p-5 rounded-3xl">
        <h1 className="text-2xl font-bold">Sunset</h1>

        <p className="text-4xl mt-3">{sunset.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default SunriseSunset;
