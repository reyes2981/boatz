import React from "react";
import { Vessel } from "./Vessel";
import { ShowVessel } from "./ShowVessel";
import { Grid, Box } from "@chakra-ui/react";
import "./vessels.scss";

export function VesselContainer() {
  return (
    <Grid
      alignItems="end"
      justifyContent="center"
      gridTemplateColumns="1fr 1fr"
      h="100vh"
    >
      <Box padding="1em" bg="#fff" overflowY="scroll" maxHeight="80vh">
        <Vessel />
        <Vessel />
        <Vessel />
        <Vessel />
        <Vessel />
      </Box>
      <Box>
        <ShowVessel />
      </Box>
    </Grid>
  );
}
