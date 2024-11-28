import { Section } from "@radix-ui/themes";
import { appStyle } from "../../styles/appStyle";

const Application = ({ children }) => {
  return <Section style={appStyle.application}>{children}</Section>;
};

export default Application;
