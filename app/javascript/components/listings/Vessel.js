import React, { useEffect, useState } from "react";
import { Box, Image, Grid, Flex } from "@chakra-ui/react";
import boat from "./example.jpg";

export function Vessel() {
  return (
    <Grid
      m="1em"
      gridTemplateColumns="20% 1fr"
      gridTemplateRows="1fr"
      h="150px"
      padding="1em"
      boxShadow="xl"
      p="6"
      rounded="md"
      bg="white"
    >
      <Image
        src={boat}
        alt={boat}
        maxHeight="120px"
        h="100%"
        w="100%"
        objectFit="cover"
      />
      <Box padding="1em">
        <Flex justifyContent="space-between">
          <Flex flexDirection="column">
            <h2>name</h2>
            <p>location</p>
          </Flex>
          <h2>berths</h2>
        </Flex>
      </Box>
    </Grid>
  );
}
