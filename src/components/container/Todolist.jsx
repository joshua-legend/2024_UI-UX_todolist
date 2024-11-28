import { Section } from "@radix-ui/themes";
import Side from "./Side";
import Main from "./Main";

const Todolist = () => {
  return (
    <Section
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        height: "90%",
        display: "flex",
      }}
    >
      <Side />
      <Main />
    </Section>
  );
};

export default Todolist;
