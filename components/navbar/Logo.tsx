import { Flex, Heading } from "@chakra-ui/react";
import ImageLogo from "../../public/logo/image 3.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Flex alignItems="center" gap={2}>
      <Image src={ImageLogo} alt="logo" />
      <Heading as="h2" lineHeight="27px" fontSize="18px" fontWeight={600}>
        ZEITPLAN
      </Heading>
    </Flex>
  );
};

export default Logo;
