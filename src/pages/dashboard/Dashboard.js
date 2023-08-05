import React from "react";
import Stats from "../../components/Stats";
import Bar from "../../components/chart/Bar";
import { Box } from "@chakra-ui/react";
export const Dashboard = ({ children }) => {
  return (
    <Box>
      <Box pl='64' class='mx-auto max-w-7xl  sm:px-6 lg:px-8'>
        <Stats children={children} />
      </Box>
    </Box>
  );
};
