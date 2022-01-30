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

const Signup = (props) => {
  const inputN = React.useRef();
  const inputP = React.useRef();
  const inputS = React.useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    props.onSignup(
      inputN.current.value,
      inputP.current.value,
      inputS.current.value
    );
  };

  React.useEffect(() => {}, []);
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
            onSubmit={submitHandle}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              bg={useColorModeValue("white", "gray.700")}
              spacing={6}
            >
              <SimpleGrid columns={12} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="name"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    ref={inputN}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="password"
                    fontSize="sm"
                    fontWeight="md"
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
                    ref={inputP}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[12, 12]}>
                  <FormLabel
                    htmlFor="user_type"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    User Type
                  </FormLabel>
                  <Select
                    id="user_type"
                    name="user_type"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    ref={inputS}
                  >
                    <option>MANUFACTURER</option>
                    <option>CUSTOMER</option>
                    <option>CARRIER</option>
                  </Select>
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

            <chakra.p>{props.msg}</chakra.p>
          </chakra.form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
