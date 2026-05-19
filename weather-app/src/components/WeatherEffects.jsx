import Particles from "react-tsparticles";

function WeatherEffects({ condition }) {
  if (condition === "Rain") {
    return (
      <Particles
        options={{
          particles: {
            number: { value: 100 },
            move: { speed: 10 },
          },
        }}
      />
    );
  }

  if (condition === "Snow") {
    return (
      <Particles
        options={{
          particles: {
            number: { value: 100 },
            move: { speed: 2 },
          },
        }}
      />
    );
  }

  return null;
}

export default WeatherEffects;
