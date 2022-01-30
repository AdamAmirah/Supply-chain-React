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
} from "@chakra-ui/react";

const AddPage = (props) => {
  const inputId = React.useRef(0);
  const inputO = React.useRef("");
  const inputD = React.useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.supply.methods
      .addPackage(
        inputId.current.value,
        inputO.current.value,
        inputD.current.value,
        props.userId
      )
      .send({ from: props.account })
      .once("receipt", (receipt) => console.log("done"));
  };
  return (
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
          Add Package
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
                Package Owner ID
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
                ref={inputId}
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6]} display="flex" mt={5}>
              <FormLabel
                htmlFor="origin"
                fontSize="lg"
                fontWeight="lg"
                mt={3}
                w="full"
                color={useColorModeValue("gray.700", "gray.50")}
              >
                Origin City
              </FormLabel>
              <Input
                type="text"
                name="origin"
                id="origin"
                mt={1}
                focusBorderColor="brand.400"
                shadow="md"
                size="lg"
                px={10}
                w="full"
                rounded="md"
                ref={inputO}
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
                Destination City
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
                ref={inputD}
              />
            </FormControl>

            <Box textAlign="center" mt={20}>
              <Button
                type="submit"
                colorScheme="brand"
                _focus={{ shadow: "" }}
                fontWeight="md"
              >
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default AddPage;
