import { Box, Button, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Fitur from "../components/section/Fitur";
import Hero from "../components/section/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Fitur />
    </>
  );
};

export default Home;
