import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
  Button,
  SimpleGrid,
  Heading,
  Flex,
  Image,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import child from "../../../assets/images/child.png";
import PersonalInformation from "./components/modals/EditPersonalInformation";
import { PersonalInfo } from "./components/PersonalChildInfo";
import { ParentInfo } from "./components/ParentInfo";
import { Address } from "./components/Address";
import AddCase from "./components/modals/AddCase";
export const Case = ({ loadCases, cases, name }) => {
  console.log("Case", cases);
  const navigate = useNavigate();

  return (
    <Box ml='64' px='5' class='mx-auto max-w-7xl  sm:px-6 lg:px-8'>
      <Box mt='5'>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight={"medium"} px={"5"} py='2' fontSize={"20"}>
            Child Case
          </Text>
          <AddCase loadCases={loadCases} name={name} />
        </Flex>

        <Box p={"5"}>
          <SimpleGrid columns={{base:1,md:1,xl:2}} gap='5'>
            {cases &&
              cases.map((item, index) => {
                const { status } = item;
                return (
                  <Box
                  fontSize={'sm'} 
                    key={index}
                    p='5'
                    h='fit-content'
                    bg='#F9FAFB'
                    flexDirection={"column"}
                    display={"flex"}
                    borderRadius={"2xl"}>
                    <WrapItem>
                      <Avatar
                        size={"md"}
                        name='Dan Abrahmov'
                        src='https://bit.ly/dan-abramov'
                      />
                    </WrapItem>
                    <SimpleGrid columns={2} gap='5' pt='5'>
                      <Flex gap='3'>
                        <Text fontWeight={"medium"}>Case_ID:</Text>
                        <Text>{item.case_id}</Text>
                      </Flex>
                      <Flex gap='3'>
                        <Text fontWeight={"medium"}>Name:</Text>
                        <Text>{item.name}</Text>
                      </Flex>
                      
                      <Flex gap='3'>
                        <Text fontWeight={"medium"}>Case status:</Text>
                        <Text
                          bg={
                            item.case_status === "Solved"
                              ? "green.300"
                              : item.case_status === "Pending" && "yellow.300"
                          }
                          px='3'
                          color='white'
                          rounded={6}>
                          {item.case_status}
                        </Text>
                      </Flex>
                      <Flex gap='3'>
                        <Text fontWeight={"medium"}>Case time</Text>
                        <Text>{item.time}</Text>
                      </Flex>
                      <Flex gap='4'>
                        <Text fontWeight={"medium"}>Case date:</Text>
                        <Text>{item.date}</Text>
                      </Flex>
                      <Flex gap='4'>
                        <Text fontWeight={"medium"}>Case location:</Text>
                        <Text>{item.location}</Text>
                      </Flex>
                      <Flex gap='3' maxW='5xl'>
                        <Text fontWeight={"medium"}>Case type:</Text>
                        <Text>{item.type}</Text>
                      </Flex>
                    </SimpleGrid>
                    <Button
                      onClick={() => navigate(`/client/case/child-case/${item.id}`)}
                      bg='#696BC2'
                      color='white'
                      mt='5'>
                      View
                    </Button>
                  </Box>
                );
              })}
          </SimpleGrid>
          {/* <SimpleGrid columns={1} spacing={10} w='full'>
                        <Flex justifyContent={'space-between'} gap='5'>
                            <Box bg='#EDF2F7' w='full' h='40' borderRadius={'lg'}>
                                <Flex>
                                    <Box p='5'>
                                        <Text>Full Name</Text>
                                    </Box>
                                    <Box>Temoye Dennis</Box>
                                </Flex>

                            </Box>
                            <Box w='80' bg='#EDF2F7' h='40' borderRadius={'lg'}>
                                <Text>vnsdvjknsjn</Text>
                            </Box>
                        </Flex>
                        <Flex justifyContent={'space-between'} flexDirection={'row-reverse'} gap='5'>
                            <Box bg='#EDF2F7' w='full' h='40' borderRadius={'lg'}>
                                <Flex>
                                    <Box>
                                        <Text>Name</Text>
                                    </Box>
                                    <Box></Box>
                                </Flex>

                            </Box>
                            <Box w='80' bg='#EDF2F7' h='40' borderRadius={'lg'}>
                                <Text>vnsdvjknsjn</Text>
                            </Box>
                        </Flex>
                        <Flex justifyContent={'space-between'} gap='5'>
                            <Box bg='#EDF2F7' w='full' h='40' borderRadius={'lg'}>
                                <Flex>
                                    <Box>
                                        <Text>Name</Text>
                                    </Box>
                                    <Box></Box>
                                </Flex>

                            </Box>
                            <Box w='80' bg='#EDF2F7' h='40' borderRadius={'lg'}>
                                <Text>vnsdvjknsjn</Text>
                            </Box>
                        </Flex>


                    </SimpleGrid> */}
        </Box>
      </Box>
    </Box>
  );
};
