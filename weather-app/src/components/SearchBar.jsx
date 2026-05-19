import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city) return;

    fetchWeather(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 justify-center mb-10"
    >
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-5 py-4 rounded-2xl bg-white/20 backdrop-blur-lg outline-none border border-white/20 w-full md:w-[400px]"
      />

      <button className="bg-white text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 transition flex items-center justify-center gap-2">
        <FaSearch />
        Search
      </button>
    </form>
  );
}

export default SearchBar;
