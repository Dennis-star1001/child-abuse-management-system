import {
  Avatar,
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { PersonalInfo } from "./components/PersonalChildInfo";
import { Address } from "./components/Address";

export const Profile = ({ data }) => {
  return (
    <Box ml='64' px='5' class='mx-auto max-w-7xl  sm:px-6 lg:px-8'>
      <Flex
        alignItems={"center"}
        borderRadius={"2xl"}
        border='1px solid #E2E8F0'
        gap='5'
        p='7'>
        <WrapItem>
          <Avatar
            size={"xl"}
            name='Dan Abrahmov'
            src='https://bit.ly/dan-abramov'
          />
        </WrapItem>
        <Box w='full' bg='white'>
          <Text fontSize={"lg"} fontWeight={"medium"}>
            {data.firstname} {data.lastname}
          </Text>
          <Text color={"#A5AEBB"} fontSize={"sm"}>
            {data.email}
          </Text>
          <Text color={"#A5AEBB"} fontSize={"sm"}>
            {data.phone}
          </Text>
        </Box>
      </Flex>
      <PersonalInfo />

      <Address />

      {/* <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr >
                            <Th textAlign={'center'}>ID</Th>
                            <Th textAlign={'center'}>Full Name</Th>

                            <Th textAlign={'center'}>Gender</Th>
                            <Th textAlign={'center'}>Case Category</Th>
                            <Th textAlign={'center'}>Status</Th>
                            <Th textAlign={'center'} >Email Address</Th>
                            <Th textAlign={'center'}>Action</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td textAlign={'center'}>#1</Td>
                            <Td textAlign={'center'}>John Dav</Td>
                            <Td textAlign={'center'}>Male</Td>
                            <Td textAlign={'center'} >millimetres</Td>
                            <Td><Text color='white' py='1' borderRadius={'2xl'} textAlign={'center'} bg='green'>Solved</Text></Td>

                            <Td textAlign={'center'}>john@gmail.com</Td>
                            <Td display={'flex'} gap={2} justifyContent="center" textAlign={'center'}>
                                <Button>

                                    <Link to='/admin/case' ><AiFillEye /></Link>
                                </Button>
                                <Button>
                                    <AiFillEdit />
                                </Button>
                            </Td>


                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer> */}
    </Box>
  );
};
