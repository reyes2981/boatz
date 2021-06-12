import React from "react";
import { Box, Image, Grid, Flex } from "@chakra-ui/react";
import boat from "./example.jpg";
export function ShowVessel() {
  return (
    <Grid
      bg="red"
      h="80vh"
      gridTemplateColumns="1fr"
      gridTemplateRows="30% 1fr"
    >
      <Grid gridTemplateColumns="1fr 1fr" w="100%">
        <Image src={boat} alt={boat} maxHeight="400px" objectFit="cover" />
        <Box>hello</Box>
      </Grid>
    </Grid>
  );
}
