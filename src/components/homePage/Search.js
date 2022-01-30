import * as React from "react";
import {
  Button,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
} from "@chakra-ui/react";

const Search = (props) => {
  const inputRef = React.useRef(0);

  return (
    <SimpleGrid
      as="form"
      w={{ base: "full", md: 7 / 12 }}
      columns={{ base: 1, lg: 6 }}
      spacing={3}
      pt={1}
      mx="auto"
      mb={8}
    >
      <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
        <VisuallyHidden>Package ID</VisuallyHidden>
        <Input
          mt={0}
          size="lg"
          type="number"
          placeholder="Enter package ID..."
          required="true"
          ref={inputRef}
        />
      </GridItem>
      <Button
        as={GridItem}
        w="full"
        variant="solid"
        colSpan={{ base: "auto", lg: 2 }}
        size="lg"
        type="submit"
        colorScheme="brand"
        cursor="pointer"
        onClick={() => {
          props.onGetPackage(inputRef.current.value);
        }}
      >
        Enter
      </Button>
    </SimpleGrid>
  );
};

export default Search;
