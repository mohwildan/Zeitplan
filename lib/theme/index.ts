import { extendTheme } from "@chakra-ui/react";
import { Heading, Text, Button } from "./components";

const colors = {
  primary: "rgba(254,94,68,1)",
  "primary-light": "rgba(254,94,68, 0.2)",
  spacing: "rgba(255,230,0,1)",
  dark: "rgba(14,20,74,1)",
  "dark-light": "rgba(14,20,74,0.6)",
  "primary-extra-light": "rgba(254,94,68, 0.05)",
  "dark-extra-light": "rgba(14,20,74,0.05)",
  "hero-gradient":
    "linear-gradient(180deg, #FFF2F7 0%, rgba(255, 242, 247, 0) 100%)",
};

const components = {
  Heading,
  Text,
  Button,
};

const styles = {
  global: {
    body: {
      bg: "#fff",
    },
  },
};

export const theme = extendTheme({ colors, components, styles });
