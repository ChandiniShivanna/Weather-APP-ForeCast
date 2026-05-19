import Slider from "react-slick";

function HourlyForecast({ forecast }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-5">Hourly Forecast</h1>

      <Slider {...settings}>
        {forecast.slice(0, 12).map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-lg text-center">
              <p>
                {new Date(item.dt_txt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />

              <h1 className="text-2xl font-bold">
                {Math.round(item.main.temp)}°C
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HourlyForecast;
