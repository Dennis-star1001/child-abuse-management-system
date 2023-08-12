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
            <Text fontWeight={"medium"}>{data.guardian_name} </Text>
          </Box>

          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              Email Address
            </Text>
            <Text fontWeight={"medium"}>{data.guardian_email} </Text>
          </Box>
          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              Phone
            </Text>
            <Text fontWeight={"medium"}>{data.guardian_phone}</Text>
          </Box>
          <Box>
            <Text color={"#A5AEBB"} fontSize={"sm"}>
              Bio
            </Text>
            <Text fontWeight={"medium"}>{data.guardian_bio}</Text>
          </Box>
        </SimpleGrid>
        <ParentInformation loadChildren={loadChildren} data={data} />
      </Flex>
    </Flex>
  );
};
