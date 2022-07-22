import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card: FC<Props> = ({ icon, title, children }) => {
  return (
    <Box bg="primary-extra-light" padding="2.5rem 2rem" borderRadius="6px">
      <Flex align="center">
        <Icon
          as={icon}
          bg="primary-light"
          fontSize="2rem"
          marginEnd={3}
          color="primary"
          p={2}
          borderRadius="6px"
        />
        <Heading variant="section-subtitle">{title}</Heading>
      </Flex>
      <Text fontSize="1rem" lineHeight="28px" pt={8}>
        {children}
      </Text>
    </Box>
  );
};

export default Card;
