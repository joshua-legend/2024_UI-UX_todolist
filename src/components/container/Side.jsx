import { Box, Container } from "@radix-ui/themes";
import Login from "../presentation/Login";
import Timer from "../presentation/Timer";
import Weather from "../presentation/Weather";
import Advice from "../presentation/Advice";

const Side = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "2",
        height: "100%",
      }}
    >
      <Login />
      <Timer />
      <Weather />
      <Advice />
    </Container>
  );
};

export default Side;
