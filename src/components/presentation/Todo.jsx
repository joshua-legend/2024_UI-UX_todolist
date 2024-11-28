import { TrashIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";

const Todo = ({ contents, remove }) => {
  return (
    <Flex justify={"between"}>
      <Text>{contents}</Text>
      <TrashIcon onClick={remove} />
    </Flex>
  );
};

export default Todo;
