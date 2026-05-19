function AQI({ aqi }) {
  const levels = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  return (
    <div className="bg-white/10 p-5 rounded-3xl mt-10">
      <h1 className="text-3xl font-bold mb-3">Air Quality Index</h1>

      <h2 className="text-5xl font-bold">{levels[aqi]}</h2>
    </div>
  );
}

export default AQI;
