import { Box, Text } from "@radix-ui/themes";
import { boxStyle } from "../../styles/boxStyle";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("");
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setTime((prev) => time);
    }, 1000);
  }, []);

  return (
    <Box style={{ ...boxStyle.box, flexDirection: "column" }}>
      <Text size={"7"}>{date}</Text>
      <Text size={"8"}>{time}</Text>
    </Box>
  );
};

export default Timer;
