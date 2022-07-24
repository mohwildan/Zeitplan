import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { BsCheckLg } from "react-icons/bs";

interface Props {
  children: ReactNode;
}

const ListItemImage: FC<Props> = ({ children }) => {
  return (
    <Flex align="center" mt={4}>
      <Box as="span" bg="#f1fef8" p={1}>
        <Icon as={BsCheckLg} marginEnd={3} fontSize="1rem" color="#28f09d" />
      </Box>
      <Text fontWeight={400} color="dark" fontSize="18px">
        {children}
      </Text>
    </Flex>
  );
};

export default ListItemImage;
