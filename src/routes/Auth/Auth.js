import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Image,
  Stack,
  Button,
  Icon,
} from "@chakra-ui/react";
import * as React from "react";
import image from "../../assets/Supply-Chain-Management.jpg";
import Login from "../../components/auth/Login";
import Signup from "../../components/auth/Signup";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Auth = (props) => {
  const [loginForm, setLoginForm] = React.useState(false);
  const [signupForm, setSignupForm] = React.useState(false);
  const navigate = useNavigate();
  const ctx = React.useContext(AuthContext);

  const [createMsg, setCreateMsg] = React.useState("");
  const login = async (id, password) => {
    await props.supply.methods
      .login(parseInt(id), password)
      .send({ from: props.account })
      .once("receipt", (receipt) => {
        ctx.setIsLoggedIn(true);
        navigate("/");
      });
  };

  const signup = async (name, password, userType) => {
    await props.supply.methods
      .createUser(name, password, userType, props.account)
      .send({ from: props.account })
      .once("receipt", (receipt) => {});

    setCreateMsg(`An account has been created `);
    setTimeout(() => {
      setCreateMsg("");
      setSignupForm(false);
    }, 2000);
  };
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={image}
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.h1
              display="flex"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              justifyContent="center"
            >
              Supply Chain System & Blockchain
            </chakra.h1>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
              textAlign="center"
            >
              A supply chain is a network of organizations, activities,
              resources, people, and information, and resources involved in
              getting a product or service from the manufacturer to the ultimate
              customer.
            </chakra.p>
          </Box>

          <Box mt={14}>
            <Flex alignItems="center" justifyContent="center">
              <Stack
                direction={{ base: "column", sm: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={10}
                justifyContent={{ sm: "left", md: "center" }}
              >
                <Button
                  as="a"
                  variant="solid"
                  colorScheme="brand"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w={{ base: "full", sm: "auto" }}
                  mb={{ base: 2, sm: 0 }}
                  size="lg"
                  onClick={() => {
                    setLoginForm(false);
                    setSignupForm(!signupForm);
                  }}
                >
                  Sign Up
                  <Icon
                    boxSize={4}
                    ml={1}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </Icon>
                </Button>
                <Button
                  as="a"
                  colorScheme="gray"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w={{ base: "full", sm: "auto" }}
                  mb={{ base: 2, sm: 0 }}
                  size="lg"
                  onClick={() => {
                    setSignupForm(false);
                    setLoginForm(!loginForm);
                  }}
                >
                  Login
                  <Icon
                    boxSize={4}
                    ml={1}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                    />
                  </Icon>
                </Button>
              </Stack>
            </Flex>
          </Box>
          {signupForm && <Signup onSignup={signup} msg={createMsg} />}
          {loginForm && <Login onLogin={login} />}
        </Box>
      </Box>
    </Flex>
  );
};

export default Auth;
