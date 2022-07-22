import { ComponentStyleConfig } from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
  variants: {
    "section-title": {
      fontSize: "38px",
      lineHeight: "52px",
      fontWeight: 700,
      color: "dark",
    },
    "section-subtitle": {
      fontSize: "18px",
      fontWeight: 600,
      color: "#000",
    },
  },
};

export const Text: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 400,
    lineHeight: "32px",
    color: "dark-light",
  },

  variants: {
    "section-description": {
      fontSize: "18px",
      marginTop: "1rem",
    },
    "section-description-small": {
      fontSize: "16px",
    },
  },
};

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "5px",
    fontWeight: 700,
  },
  variants: {
    primary: {
      p: "1.5rem 2.5rem",
      backgroundColor: "primary",
      color: "#fff",
    },
    "primary-light": {
      p: "1.5rem 2.5rem",
      backgroundColor: "primary-light",
      color: "primary",
    },
  },
};
