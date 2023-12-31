
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import PersonalInformation from './modals/EditPersonalInformation'
import EditAddress from './modals/EditAddress'

export const Address = ({data}) => {
    return (
        <Flex flexDirection={'column'} my='10' borderRadius={'2xl'} border='1px solid #E2E8F0' gap='2' p='7'>
            <Text fontWeight={'medium'}>Address</Text>
            <Flex justifyContent={'space-between'}>
                {data &&
                    <SimpleGrid pt='5' columns={2} spacing={10} w='2xl'>
                        <Box >
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Country</Text>
                            <Text fontWeight={'medium'}>{data.country}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>City/State</Text>
                            <Text fontWeight={'medium'}>{data.citystate}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Postal Code</Text>
                            <Text fontWeight={'medium'}>{data.postal_code}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Home Address</Text>
                            <Text fontWeight={'medium'}>{data.home_address}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>Parent/Gurdian Address</Text>
                            <Text fontWeight={'medium'}>{data.gurdian_address}</Text>
                        </Box>
                        <Box>
                            <Text color={'#A5AEBB'} fontSize={'sm'}>School Address</Text>
                            <Text fontWeight={'medium'}>{data.school_address}</Text>
                        </Box>
                    </SimpleGrid>
}
            

            </Flex>
        </Flex>
    )
}
