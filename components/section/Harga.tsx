import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import CardHarga from "../CardHarga";

const Harga: FC = () => {
  return (
    <Box py="5rem" id="harga" mt="5rem" bg="primary-extra-light">
      <Container maxW="80rem" textAlign="center">
        <Container maxW={{ base: "100%", md: "40rem" }}>
          <Heading variant="section-title">
            Main catur sambil bersepeda, beda harga beda fitur
          </Heading>
          <Text variant="section-description">
            Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa
            juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!
          </Text>
        </Container>
        <Box mt="4rem">
          <CardHarga />
        </Box>
      </Container>
    </Box>
  );
};

export default Harga;
