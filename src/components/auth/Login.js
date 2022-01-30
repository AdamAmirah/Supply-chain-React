import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";

const Login = (props) => {
  const inputId = React.useRef(0);
  const inputPass = React.useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(inputId.current.value, inputPass.current.value);
  };

  return (
    <Box mt={2}>
      <Flex alignItems="center" justifyContent="center">
        <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
          <Box py={5}>
            <Box
              borderTop="solid 1px"
              borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
            ></Box>
          </Box>
        </Box>

        <Box mt={[10, 0]}>
          <chakra.form
            shadow="base"
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
            onSubmit={submitHandler}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 20]}
              bg={useColorModeValue("white", "gray.700")}
              spacing={6}
            >
              <SimpleGrid columns={12} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="id"
                    fontSize="md"
                    fontWeight="lg"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    User ID
                  </FormLabel>
                  <Input
                    type="number"
                    name="id"
                    id="id"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    ref={inputId}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="password"
                    fontSize="md"
                    fontWeight="lg"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    ref={inputPass}
                  />
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box px={{ base: 4, sm: 6 }} py={3} textAlign="right">
              <Button
                type="submit"
                colorScheme="brand"
                _focus={{ shadow: "" }}
                fontWeight="md"
              >
                Save
              </Button>
            </Box>
          </chakra.form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
