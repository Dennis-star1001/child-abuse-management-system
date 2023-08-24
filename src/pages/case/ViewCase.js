import { Avatar, Box, Button, Flex, SimpleGrid, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PersonalInfo } from './components/PersonalChildInfo'
import { ParentInfo } from './components/ParentInfo'
import { Address } from './components/Address'
import { Link, useParams } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'
import { CaseDetails } from './components/CaseDetails'
import EditCase from './components/modals/EditCase'

export const ViewCase = ({ cases,loadCases }) => {
    let { id } = useParams();
    console.log("Params", cases && cases)

    const index = cases.map(object => object.id).indexOf(id);
    console.log(index)
    const Data = cases[index];
    console.log("Data", Data)

    return (

        <Box ml='64' px='5' class="mx-auto max-w-7xl  sm:px-6 lg:px-8">
            <Text fontWeight={'medium'} px={'5'} py='2' fontSize={'20'}>Child Profile</Text>

            {Data && (
                <>
                    <Flex alignItems={'center'} borderRadius={'2xl'} border='1px solid #E2E8F0' gap='5' p='7'>
                        <WrapItem>
                            <Avatar size={'xl'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                        {/* {data && data.map((index, data) => ( */}
                        <Box w='full' bg='white'>
                            <Text fontSize={'lg'} fontWeight={'medium'}>
                                {Data.name}

                            </Text>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>
                                {Data.email}

                            </Text>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>
                                {Data.phone}

                            </Text>
                        </Box>
                        {/* ))} */}
                    </Flex>

                    <Flex flexDirection={'column'} my='10' borderRadius={'2xl'} border='1px solid #E2E8F0' gap='2' p='7'>
                        <Text fontWeight={'medium'}>Case details</Text>
                        <Flex justifyContent={'space-between'}>
                            <SimpleGrid pt='5' columns={2} spacing={10} w='2xl'>
                                <Box >
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Case ID</Text>
                                    <Text fontWeight={'medium'}>{Data.case_id} </Text>
                                </Box>
                                <Box>
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Name</Text>
                                    <Text fontWeight={'medium'}>{Data.name}</Text>
                                </Box>
                                <Box>
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Case type</Text>
                                    <Text fontWeight={'medium'}>{Data.type} </Text>
                                </Box>
                                <Box>
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Case status</Text>
                                    <Text bg={
                                        Data.case_status === "Solved"
                                            ? "green.300"
                                            : Data.case_status === "Pending" && "yellow.300"
                                    } px='3' w='fit-content' color='white' fontWeight={'medium'}>{Data.case_status}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Case date:</Text>
                                    <Text>{Data.date}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Case location:</Text>
                                    <Text>{Data.location}</Text>
                                    <Text></Text>
                                </Box>

                            </SimpleGrid>
                            <EditCase case_id={Data.case_id} email={Data.email} loadCases={loadCases} />

                        </Flex>
                    </Flex>
                </>
            )}

        </Box>
    )
}
