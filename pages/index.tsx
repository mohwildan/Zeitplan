import { Box, Button, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Fitur from "../components/section/Fitur";
import Hero from "../components/section/Hero";
import Kekurangan from "../components/section/Kekurangan";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Kekurangan />
      <Fitur />
    </>
  );
};

export default Home;
