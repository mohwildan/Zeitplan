import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import { AiFillStar } from "react-icons/ai";

interface Props {
  children: ReactNode;
  img: StaticImageData;
  name: string;
  desc: string;
}

const Slider: FC<Props> = ({ children, img, desc, name }) => {
  return (
    <Box
      borderRadius="6px"
      boxShadow="0px 30px 60px rgba(254, 94, 68, 0.15)"
      maxW={{ base: "100%", sm: "500px", md: "450px" }}
      p="1.5rem"
    >
      <Flex gap={4}>
        <Box bg="spacing" padding={1}>
          <AiFillStar style={{ color: "white" }} />
        </Box>
        <Box bg="spacing" padding={1}>
          <AiFillStar style={{ color: "white" }} />
        </Box>
        <Box bg="spacing" padding={1}>
          <AiFillStar style={{ color: "white" }} />
        </Box>
        <Box bg="spacing" padding={1}>
          <AiFillStar style={{ color: "white" }} />
        </Box>
        <Box bg="rgba(0,0,0,0.2)" padding={1}>
          <AiFillStar style={{ color: "white" }} />
        </Box>
      </Flex>
      <Text pt="2rem">{children}</Text>
      <Flex mt="1.5rem">
        <Image style={{ borderRadius: "100%" }} src={img} />
        <Box ml={2}>
          <Heading fontWeight={700} fontSize="16px" lineHeight="24px">
            {name}
          </Heading>
          <Text>{desc}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Slider;
