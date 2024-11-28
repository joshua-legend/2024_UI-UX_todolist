import { Avatar, Box, Button, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { boxStyle } from "../../styles/boxStyle";

const Login = () => {
  const [userName, setUserName] = useState("Guest");
  const logoutClick = () => {
    const name = prompt("유저 이름 입력") || "Guest";
    setUserName((prev) => name);
  };

  useEffect(() => {
    const name = prompt("유저 이름 입력") || "Guest";
    setUserName((prev) => name);
  }, []);

  return (
    <Box style={boxStyle.box}>
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
        size={"7"}
      />
      <Text size={"5"}>{userName}님 환영합니다!😺</Text>
      <Button onClick={logoutClick} size={"4"}>
        LogOut
      </Button>
    </Box>
  );
};

export default Login;
