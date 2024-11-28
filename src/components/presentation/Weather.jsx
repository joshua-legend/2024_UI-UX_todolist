import { Box, Text } from "@radix-ui/themes";
import { boxStyle } from "../../styles/boxStyle";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const API_KEY = "3af745e55c0152da567c5ffd089f9e00";
  const lon = 126.705;
  const lat = 37.456;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTemp((prev) => data.main.feels_like);
        setWeather((prev) => data.weather[0].main);
      });
  }, []);

  return (
    <Box style={{ ...boxStyle.box }}>
      <Text size={"7"}>날씨:{weather}</Text>
      <Text size={"7"}>{temp}도</Text>
    </Box>
  );
};

export default Weather;
