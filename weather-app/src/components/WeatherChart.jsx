import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WeatherChart({ forecast }) {
  const data = forecast.slice(0, 8).map((item) => ({
    time: new Date(item.dt_txt).getHours() + ":00",
    temp: item.main.temp,
  }));

  return (
    <div className="mt-10 bg-white/10 p-5 rounded-3xl">
      <h1 className="text-3xl font-bold mb-5">Temperature Chart</h1>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeatherChart;
