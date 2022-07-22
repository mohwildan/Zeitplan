import {
  Box,
  Button,
  Container,
  Icon,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { FiArrowRight } from "react-icons/fi";

const List = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Fitur-Fitur",
    href: "/fitur",
  },
  {
    title: "Harga",
    href: "/harga",
  },
  {
    title: "Testimoni",
    href: "/testimoni",
  },
];

const Navbar = () => {
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 130) {
        setView(true);
      } else setView(false);
    });
  }, []);
  return (
    <Box
      mt={view ? "0" : "4rem"}
      transition="0.3s"
      w="100%"
      pos="fixed"
      top={0}
      left={0}
      zIndex={99}
    >
      <Container
        maxW="80rem"
        h="100px"
        bg="white"
        borderRadius="6px"
        boxShadow="0 30px 60px rgba(0,0,0,0.05)"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="2rem"
      >
        <Logo />
        <UnorderedList
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          {List.map((item) => {
            return (
              <ListItem
                key={item.title}
                listStyleType="none"
                marginEnd="1.5rem"
              >
                <Link color="rgba(0,0,0,0.5)" href={item.href}>
                  {item.title}
                </Link>
              </ListItem>
            );
          })}
          <Button variant="primary">
            Download
            <Icon as={FiArrowRight} ml={1} fontSize="1.2rem" marginLeft={4} />
          </Button>
        </UnorderedList>
      </Container>
    </Box>
  );
};

export default Navbar;
