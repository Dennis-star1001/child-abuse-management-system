import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import PersonalInformation from './modals/EditPersonalInformation'

export const PersonalInfo = ({data,loadChildren}) => {
    // console.log("DATA",data && data)
    return (
        <Flex flexDirection={'column'} my='10' borderRadius={'2xl'} border='1px solid #E2E8F0' gap='2' p='7'>
            <Text fontWeight={'medium'}>Personal Information</Text>
            <Flex justifyContent={'space-between'}>
               
                    <SimpleGrid pt='5' columns={2} spacing={10} w='2xl'>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>First Name</Text>
                            <Text fontWeight={'medium'}>{data.firstname}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Last Name</Text>
                            <Text fontWeight={'medium'}> {data.lastname}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Email Address</Text>
                            <Text fontWeight={'medium'}>{data.email}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Phone</Text>
                            <Text fontWeight={'medium'}>{data.phone}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Bio</Text>
                            <Text fontWeight={'medium'}>{data.bio}</Text>
                        </Box>
                    </SimpleGrid>
               
                <PersonalInformation data={data} loadChildren={loadChildren} />
            </Flex>
        </Flex>
    )
}
