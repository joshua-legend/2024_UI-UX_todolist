import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import Todo from "../presentation/Todo";
import { useState } from "react";

const Main = () => {
  const [todolist, setTodolist] = useState(["떡볶이", "라면먹기", "순대먹기"]);
  const [msg, setMsg] = useState("");
  const getMsg = (e) => setMsg((prev) => e.target.value);
  const add = () => setTodolist((prev) => [...prev, msg]);
  const remove = (i) =>
    setTodolist((prev) => [...prev].filter((v, idx) => idx != i));

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "3",
        height: "100%",
        border: "1px solid black",
      }}
    >
      <Text size={"7"}>오늘의 할일 ToDoList</Text>
      <Flex justify={"between"}>
        <TextField.Root onChange={getMsg} placeholder="Search the docs…" />
        <Button onClick={add} size={"3"}>
          전송
        </Button>
      </Flex>
      <Flex direction={"column"}>
        {todolist.map((v, i) => (
          <Todo contents={v} remove={() => remove(i)} />
        ))}
      </Flex>
    </Container>
  );
};

export default Main;
