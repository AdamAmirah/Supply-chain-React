import React from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const navigate = useNavigate();

  const ctx = React.useContext(AuthContext);

  const logout = async () => {
    if (props.userId) {
      await props.supply.methods
        .logout(parseInt(props.userId))
        .send({ from: props.account })
        .once("receipt", (receipt) => {
          ctx.setIsLoggedIn(false);
          navigate("/auth");
        });
    } else {
      alert("not allowed");
    }
  };
  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex
          alignItems="center"
          justifyContent={ctx.isLoggedIn ? "space-between" : "center"}
          mx="auto"
        >
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Supply Chain</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="2xl" fontWeight="bold">
              Supply Chain
            </chakra.h1>
          </Flex>
          {ctx.isLoggedIn && (
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Button variant="ghost" onClick={mobileNav.onClose}>
                  <RouteLink to="/">Check Package</RouteLink>
                </Button>
                {ctx.userType === "MANUFACTURER" ? (
                  <Button variant="ghost" onClick={mobileNav.onClose}>
                    <RouteLink to="/add">Add Package</RouteLink>
                  </Button>
                ) : null}

                {ctx.userType === "CUSTOMER" ? null : (
                  <>
                    <Button variant="ghost" onClick={mobileNav.onClose}>
                      <RouteLink to="/transfer">Transfer ownership</RouteLink>
                    </Button>
                    <Button variant="ghost" onClick={mobileNav.onClose}>
                      <RouteLink to="/report">Report Lost Package</RouteLink>
                    </Button>
                  </>
                )}
              </HStack>
              <Button colorScheme="brand" size="sm" onClick={logout}>
                Logout
              </Button>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button w="full" variant="ghost" onClick={mobileNav.onClose}>
                    <RouteLink to="/">
                      <Button w="full" variant="ghost">
                        Check Package
                      </Button>
                    </RouteLink>
                  </Button>
                  <RouteLink to="/add">
                    <Button w="full" variant="ghost">
                      Add Package
                    </Button>
                  </RouteLink>
                  <RouteLink to="/transfer">
                    <Button w="full" variant="ghost">
                      Transfer ownership
                    </Button>
                  </RouteLink>
                  <RouteLink to="/report">
                    <Button w="full" variant="ghost">
                      Report Lost Package
                    </Button>
                  </RouteLink>
                </VStack>
              </Box>
            </HStack>
          )}
        </Flex>
      </chakra.header>
    </>
  );
};

export default Navbar;
