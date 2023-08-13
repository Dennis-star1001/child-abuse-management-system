import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EditCase from './modals/EditCase';

export const CaseDetails = ({ cases }) => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     cases.map(item => {
    //         setData(item.email);

    //     })
    // }, [])
    // let { id } = useParams();
    // console.log("Params", cases && cases)

    // const index = cases.map(object => object.id).indexOf(id);
    // console.log(index)
    // const Data = cases[index];
    // console.log("Data", Data)
    // console.log(data)
    return (
        <>
            {cases && cases.map((data) => (
                <Flex flexDirection={'column'} my='10' borderRadius={'2xl'} border='1px solid #E2E8F0' gap='2' p='7'>
                    <Text fontWeight={'medium'}>Case details</Text>
                    <Flex justifyContent={'space-between'}>


                        <SimpleGrid pt='5' columns={2} spacing={10} w='2xl'>
                            <>
                                <Box >
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Case_ID</Text>
                                    <Text fontWeight={'medium'}>{data.case_id} </Text>
                                </Box>
                                <Box>
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Name</Text>
                                    <Text fontWeight={'medium'}>{data.firstname}  </Text>
                                </Box>
                                <Box>
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Case type</Text>
                                    <Text fontWeight={'medium'}>{data.type} </Text>
                                </Box>
                                <Box>
                                    <Text color={'#A5AEBB'} fontSize={'sm'}>Case status</Text>
                                    <Text bg='red.300' px='3' w='fit-content' color='white' fontWeight={'medium'}>{data.case_status}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Case date:</Text>
                                    <Text>{data.date}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Case location:</Text>
                                    <Text>{data.location}</Text>
                                </Box>
                            </>
                        </SimpleGrid>
                       <EditCase/>
                    </Flex>
                </Flex>
            ))}
        </>
    )
}
