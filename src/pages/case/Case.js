
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
import { Link } from 'react-router-dom'
import child from "../../assets/images/child.png"
import PersonalInformation from './components/modals/PersonalInformation'
import { PersonalInfo } from './components/PersonalChildInfo'
import { ParentInfo } from './components/ParentInfo'
import { Address } from './components/Address'
export const Case = () => {
    return (
        <Box ml='64' px='5' class="mx-auto max-w-7xl  sm:px-6 lg:px-8">
            <Flex alignItems={'center'} borderRadius={'2xl'} border='1px solid #E2E8F0' gap='5' p='7'>
                {/* <Box w='80' h='AUTO' bg='white' >
                    <Image borderRadius={'full'}  src={child} h='full' objectFit={'cover'}/>
                </Box> */}
                <WrapItem>
                    <Avatar size={'xl'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <Box w='full' bg='white'>
                    <Text fontSize={'lg'} fontWeight={'medium'}>Temoye Dennis</Text>
                    <Text color={'#A5AEBB'} fontSize={'sm'}>tdennis.developer@gmail.com</Text>
                    <Text color={'#A5AEBB'} fontSize={'sm'}>+234 81635 45039</Text>
                </Box>
            </Flex>
          <PersonalInfo/>
        
        <ParentInfo/>
        <Address/>
           
            <TableContainer>
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
            </TableContainer>
            <Box mt='5'>
                <Text fontWeight={'medium'} px={'5'} py='2' fontSize={'20'}>Child Case</Text>
                <Box p={'5'} >


                    <SimpleGrid columns={1} spacing={10} w='full'>
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


                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    )
}
