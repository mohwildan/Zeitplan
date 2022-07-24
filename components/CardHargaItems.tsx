import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  badge: string;
  title: string;
  des: string;
  children: ReactNode;
}

const CardHargaItems: FC<Props> = ({ children, badge, title, des }) => {
  return (
    <Box
      maxW={{ base: "100%", sm: "400px", md: "500px" }}
      p="2.5rem"
      boxShadow="0px 15px 30px rgba(12, 14, 43, 0.05)"
      borderRadius="10px"
      bg="white"
    >
      <Heading as="h4" fontSize="14px" color="primary" fontWeight="semibold">
        {badge}
      </Heading>
      <Heading as="h3" variant="section-title" mt="0.5rem">
        {title}
      </Heading>
      <Text variant="section-description">{des}</Text>
      <Box>{children}</Box>
      <Button mt={6} variant="primary">
        Download
      </Button>
    </Box>
  );
};

export default CardHargaItems;
