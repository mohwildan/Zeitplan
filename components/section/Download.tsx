import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import ImageAppStore from "../../public/store/image 12.png";
import ImagePlayStore from "../../public/store/image 13.png";

const Download: FC = () => {
  return (
    <Box paddingTop="5rem" mt="5rem" pb="1rem">
      <Container maxW="80rem" textAlign="center">
        <Container maxW={{ base: "100%", md: "45rem" }}>
          <Heading variant="section-title">
            Download Aplikasi Keren Ini Sekarang!
          </Heading>
          <Text variant="section-description">
            Please download lah aplikasi ini, udah susah-susah buat, mana pas
            bikin sampe begadang, terus juga ditambah weekend. Jadi, please
            download lah ya.
          </Text>
          <Flex justify="center" mt="4rem" gap={5}>
            <Image src={ImageAppStore} alt="app store image" />
            <Image src={ImagePlayStore} alt="Play Store image" />
          </Flex>
        </Container>
      </Container>
    </Box>
  );
};

export default Download;
