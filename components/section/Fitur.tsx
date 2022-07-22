import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import GridCard from "../GridCard";

const Fitur = () => {
  return (
    <Container maxW="80rem">
      <Flex marginTop="15rem" flexDir={{ base: "column", md: "row" }}>
        <Box flex={1}>
          <Heading variant="section-title">
            Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
          </Heading>
          <Text variant="section-description">
            Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang
            gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba
            logout sendiri, untung gak berdua.
          </Text>
          <Flex gap={12} marginTop="3.5rem">
            <Box>
              <Text fontSize="12px" lineHeight="15px">
                TOTAL DOWNLOAD
              </Text>
              <Heading
                as="h4"
                fontSize="24px"
                color="dark"
                fontWeight={600}
                lineHeight="29px"
              >
                1,501,234
              </Heading>
            </Box>
            <Box>
              <Text fontSize="12px" lineHeight="15px">
                TOTAL USER
              </Text>
              <Heading
                as="h4"
                fontSize="24px"
                color="dark"
                fontWeight={600}
                lineHeight="29px"
              >
                1,318,829
              </Heading>
            </Box>
          </Flex>
        </Box>
        <Box flex={1.5}>
          <GridCard />
        </Box>
      </Flex>
    </Container>
  );
};

export default Fitur;
