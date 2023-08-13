import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ParentInformation from "./modals/EditParentInformation";

export const ParentInfo = ({ loadChildren, data }) => {
  return (
    <Flex
      flexDirection={"column"}
      my='10'
      borderRadius={"2xl"}
      border='1px solid #E2E8F0'
      gap='2'
      p='7'>
      <Text fontWeight={"medium"}>Parent/Gurdian Information</Text>
      <Flex justifyContent={"space-between"}>
        <SimpleGrid pt='5' columns={2} spacing={10} w='2xl'>
          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              First Name
            </Text>
            <Text fontWeight={"medium"}>Dennis </Text>
          </Box>
          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              Last Name
            </Text>
            <Text fontWeight={"medium"}>Temoye </Text>
          </Box>
          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              Email Address
            </Text>
            <Text fontWeight={"medium"}>admin@gmail.com </Text>
          </Box>
          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              Phone
            </Text>
            <Text fontWeight={"medium"}>+234 8163 5450 39</Text>
          </Box>
          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              Bio
            </Text>
            <Text fontWeight={"medium"}>Student</Text>
          </Box>
        </SimpleGrid>
        <ParentInformation loadChildren={loadChildren} data={data} />
      </Flex>
    </Flex>
  );
};
