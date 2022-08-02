import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import HeroImageMain from "../../public/main/Group 11.png";
import SwiperSlider from "../SwiperSlider";

const Hero = () => {
  return (
    <Box background="hero-gradient" id="home" pt="13rem" w="full">
      <Container maxW="80rem">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box marginTop="4rem">
            <Heading
              color="dark"
              fontWeight="bold"
              fontSize="48px"
              lineHeight="60px"
            >
              Sebuah cara mudah mengatur jadwal kuliah kamu
            </Heading>
            <Text
              fontWeight={400}
              color="#6f6f6f"
              fontSize="18px"
              lineHeight="34px"
              marginTop={4}
            >
              Datang kuliah terlambat karena ketiduran itu tidak masalah; datang
              kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini
              adalah sahabat kamu sekarang, brodie~
            </Text>
            <Flex align="center" gap={4} marginTop={4}>
              <Button variant="primary">Learn More</Button>
              <Button variant="primary-light">Learn More</Button>
            </Flex>
            <SwiperSlider />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Image src={HeroImageMain} alt="Hero Image" placeholder="blur" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
