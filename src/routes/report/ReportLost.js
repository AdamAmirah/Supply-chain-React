import * as React from "react";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import Search from "../../components/homePage/Search";

const ReportLost = (props) => {
  const [showResult, setShowResult] = React.useState(false);
  const [result, setResult] = React.useState();

  const updateStatus = async (packageId) => {
    await props.supply.methods
      .reportlostpackage(packageId, props.userId)
      .send({ from: props.account });

    const track_count = await props.supply.methods
      .getTrack_count(packageId)
      .call();

    const last_track = await props.supply.methods
      .get_track(packageId, track_count - 1)
      .call();
    setResult(last_track);
    setShowResult(true);
  };

  return (
    <>
      <Text
        fontSize="3xl"
        color={useColorModeValue("gray.700", "white")}
        fontWeight="700"
        textAlign="center"
        mt={10}
      >
        Report a lost Package
      </Text>
      {showResult && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle mr={2}>Successful Transaction</AlertTitle>
          <AlertDescription>Package Status has been updated.</AlertDescription>
          <CloseButton
            onClick={() => setShowResult(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      <Box px={8} py={24} mx="auto">
        <Search onGetPackage={updateStatus} />
      </Box>
    </>
  );
};

export default ReportLost;
