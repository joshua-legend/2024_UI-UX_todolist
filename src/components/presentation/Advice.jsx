import { Box, Text } from "@radix-ui/themes";
import { rand } from "../../utils/math";
import { boxStyle } from "../../styles/boxStyle";

const Advice = () => {
  const advices = [
    "돈은 벌고싶고 공부는 하기싫다",
    "개발자의 연봉은 30000이다",
    "가끔 나는...피아노를친다",
    "손가락 치워요",
    "기억 안나요..",
  ];

  return (
    <Box style={{ ...boxStyle.box }}>
      <Text size={"7"}>어록</Text>
      <Text size={"7"}>{advices[rand(0, 4)]}</Text>
    </Box>
  );
};

export default Advice;
