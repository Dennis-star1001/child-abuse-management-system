
import React from 'react'
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
    Avatar
} from '@chakra-ui/react'
import { AiFillEdit, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import child from "../../assets/images/child.png"
import PersonalInformation from './components/modals/EditPersonalInformation'
import { PersonalInfo } from './components/PersonalChildInfo'
import { ParentInfo } from './components/ParentInfo'
import { Address } from './components/Address'
export const Case = () => {
    const navigate = useNavigate();
    return (

        <Box ml='64' px='5' class="mx-auto max-w-7xl  sm:px-6 lg:px-8">

            <Box mt='5'>
                <Text fontWeight={'medium'} px={'5'} py='2' fontSize={'20'}>Child Case</Text>
                <Box p={'5'} >
                    <SimpleGrid columns={2} gap='5'>
                        <Box p='5' h='fit-content' bg='#F9FAFB' flexDirection={'column'} display={'flex'} borderRadius={'2xl'}>
                            <WrapItem >
                                <Avatar size={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                            <SimpleGrid columns={2} gap='5' pt='5'>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case_ID:</Text>
                                    <Text>#1322</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Name:</Text>
                                    <Text>John abramov</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case type:</Text>
                                    <Text>Murder</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case status:</Text>
                                    <Text bg='green.300' px='3' color='white'>Solved</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case time</Text>
                                    <Text>#1322</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case date:</Text>
                                    <Text>Abuse</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case location:</Text>
                                    <Text>Abuse</Text>
                                </Flex>

                            </SimpleGrid>
                            <Button onClick={()=>navigate('/admin/child-profile/1')} bg='#696BC2' color='white' mt='5'>View</Button>
                        </Box>
                        <Box p='5' h='fit-content' bg='#F9FAFB' flexDirection={'column'} display={'flex'} borderRadius={'2xl'}>
                            <WrapItem >
                                <Avatar size={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                            <SimpleGrid columns={2} gap='5' pt='5'>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case_ID:</Text>
                                    <Text>#1322</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Name:</Text>
                                    <Text>John abramov</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case type:</Text>
                                    <Text>Kidnap</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case status:</Text>
                                    <Text bg='red.300' px='3' color='white'>Not Solved</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case time</Text>
                                    <Text>#1322</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case date:</Text>
                                    <Text>Abuse</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case location:</Text>
                                    <Text>Abuse</Text>
                                </Flex>

                            </SimpleGrid>
                            <Button onClick={()=>navigate('/admin/child-profile/1')} bg='#696BC2' color='white' mt='5'>View</Button>
                        </Box>
                        <Box p='5' h='fit-content' bg='#F9FAFB' flexDirection={'column'} display={'flex'} borderRadius={'2xl'}>
                            <WrapItem >
                                <Avatar size={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                            <SimpleGrid columns={2} gap='5' pt='5'>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case_ID:</Text>
                                    <Text>#1322</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Name:</Text>
                                    <Text>John abramov</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case type:</Text>
                                    <Text>Torture</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case status:</Text>
                                    <Text bg='yellow.300' px='3' color='white'>Pending</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case time</Text>
                                    <Text>02:40PM</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case date:</Text>
                                    <Text>01/1/2017</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case location:</Text>
                                    <Text>Abuse</Text>
                                </Flex>

                            </SimpleGrid>
                            <Button onClick={()=>navigate('/admin/child-profile/1')} bg='#696BC2' color='white' mt='5'>View</Button>
                        </Box>
                        <Box p='5' h='fit-content' bg='#F9FAFB' flexDirection={'column'} display={'flex'} borderRadius={'2xl'}>
                            <WrapItem >
                                <Avatar size={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                            <SimpleGrid columns={2} gap='5' pt='5'>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case_ID:</Text>
                                    <Text>#1322</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Name:</Text>
                                    <Text>John abramov</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case type:</Text>
                                    <Text>Murder</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case status:</Text>
                                    <Text bg='green.300' px='3' color='white'>Solved</Text>
                                </Flex>
                                <Flex gap='3'>
                                    <Text fontWeight={'medium'}>Case time</Text>
                                    <Text>#1322</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case date:</Text>
                                    <Text>Abuse</Text>
                                </Flex>
                                <Flex gap='4'>
                                    <Text fontWeight={'medium'}>Case location:</Text>
                                    <Text>Abuse</Text>
                                </Flex>

                            </SimpleGrid>
                           
                                <Button onClick={()=>navigate('/admin/child-profile/1')} bg='#696BC2' color='white' mt='5'>View</Button>
                           
                        </Box>
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
    )
}
