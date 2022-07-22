import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import ImageFitur from "../../public/main/Group 20.png";
import FiturCardGird from "../FiturCardGird";

const Fitur: FC = () => {
  return (
    <Container maxW="80rem" mt="7rem">
      <Flex flexDir={{ base: "column", md: "row" }} gap="2rem">
        <Box flex={1} display={{ base: "none", md: "flex" }}>
          <Image src={ImageFitur} placeholder="blur" />
        </Box>
        <Box flex={2}>
          <Heading variant="section-title">
            Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini?
            Jadi penasaran nich~
          </Heading>
          <Text variant="section-description">
            Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan
            apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah
            tapi jarang masuk, titip absen doang!
          </Text>
          <FiturCardGird />
        </Box>
      </Flex>
    </Container>
  );
};

export default Fitur;
