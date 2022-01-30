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
import Tracking from "../../components/homePage/Tracking";

const HomePage = (props) => {
  const [showResult, setShowResult] = React.useState(false);
  const [packageData, setPackageData] = React.useState();

  const getPackage = async (packageId) => {
    const track_count = await props.supply.methods
      .getTrack_count(packageId)
      .call();
    const data = await props.supply.methods
      .getPackage(packageId)
      .call()
      .catch("error", (error) => {
        return;
      });

    let arr = [];

    arr.push([
      "Manufacturer",
      data[1],
      data[2],
      "Origin",
      "19-1-2021",
      "Issued",
    ]);

    for (let i = 0; i < track_count; i++) {
      const tracks = await props.supply.methods.get_track(packageId, i).call();
      arr.push([
        tracks[2],
        data[1],
        data[2],
        tracks[4],
        new Date(parseInt(tracks[3])).getDate().toString() + "-1-2022",
        tracks[5],
      ]);
    }
    setPackageData(arr);
    setShowResult(true);
  };

  return (
    <>
      {showResult && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle mr={2}>Successful Transaction</AlertTitle>
          <AlertDescription>Package Details are listed below.</AlertDescription>
          <CloseButton
            onClick={() => setShowResult(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      <Text
        fontSize="3xl"
        color={useColorModeValue("gray.700", "white")}
        fontWeight="700"
        textAlign="center"
        mt={10}
      >
        View Package Details
      </Text>
      <Box px={8} py={24} mx="auto">
        <Search onGetPackage={getPackage} />
        {showResult && <Tracking packageData={packageData} />}
      </Box>
    </>
  );
};

export default HomePage;
