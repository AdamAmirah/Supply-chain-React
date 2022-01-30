import * as React from "react";
import {
  Flex,
  Box,
  useColorModeValue,
  Text,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

const Transfer = (props) => {
  const inputOId = React.useRef(0);
  const inputPId = React.useRef("");
  const inputL = React.useRef("");

  const [error, setError] = React.useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    props.supply.methods
      .transferOwnership(
        parseInt(props.userId),
        parseInt(inputOId.current.value),
        parseInt(inputPId.current.value),
        inputL.current.value
      )
      .send({ from: props.account })
      .on("error", (error) => {
        setError(
          "There was an error in your transaction please try again with valid values"
        );
        setTimeout(() => {
          setError(null);
        }, 5000);
      });
  };

  return (
    <>
      {error !== null ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Transaction Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      ) : null}

      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          mx="auto"
          px={20}
          py={4}
          rounded="lg"
          shadow="xl"
          bg={useColorModeValue("white", "gray.700")}
          maxW="2xl"
        >
          <Text
            fontSize="3xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            textAlign="center"
          >
            Transfer Ownership
          </Text>

          <Box mt={10}>
            <form onSubmit={submitHandler}>
              <FormControl as={GridItem} colSpan={[6, 6]} display="flex">
                <FormLabel
                  htmlFor="name"
                  fontSize="lg"
                  fontWeight="lg"
                  mt={3}
                  w="full"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  New Package Owner ID
                </FormLabel>
                <Input
                  type="id"
                  name="id"
                  id="id"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="md"
                  size="lg"
                  px={10}
                  w="full"
                  rounded="md"
                  ref={inputOId}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 6]} display="flex" mt={5}>
                <FormLabel
                  htmlFor="name"
                  fontSize="lg"
                  fontWeight="lg"
                  mt={3}
                  w="full"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Package ID
                </FormLabel>
                <Input
                  type="id"
                  name="id"
                  id="id"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="md"
                  size="lg"
                  px={10}
                  w="full"
                  rounded="md"
                  ref={inputPId}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 6]} display="flex" mt={5}>
                <FormLabel
                  htmlFor="destination"
                  fontSize="lg"
                  fontWeight="lg"
                  mt={3}
                  w="full"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  New Owner Location
                </FormLabel>
                <Input
                  type="text"
                  name="destination"
                  id="destination"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="md"
                  size="lg"
                  px={10}
                  w="full"
                  rounded="md"
                  ref={inputL}
                />
              </FormControl>

              <Box textAlign="center" mt={20}>
                <Button
                  type="submit"
                  colorScheme="brand"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                >
                  Update
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Transfer;
