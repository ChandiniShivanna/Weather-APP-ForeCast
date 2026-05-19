function WeatherMap({ lat, lon }) {
  return (
    <div className="mt-10 rounded-3xl overflow-hidden">
      <iframe
        title="weather-map"
        width="100%"
        height="400"
        src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=5`}
      ></iframe>
    </div>
  );
}

export default WeatherMap;
