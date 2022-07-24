import type { NextPage } from "next";
import Download from "../components/section/Download";
import Fitur from "../components/section/Fitur";
import Harga from "../components/section/Harga";
import Hero from "../components/section/Hero";
import Kekurangan from "../components/section/Kekurangan";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Kekurangan />
      <Fitur />
      <Harga />
      <Download />
    </>
  );
};

export default Home;
