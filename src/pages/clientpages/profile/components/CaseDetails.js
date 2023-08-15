import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export const CaseDetails = () => {
    return (
        <Flex flexDirection={'column'} my='10' borderRadius={'2xl'} border='1px solid #E2E8F0' gap='2' p='7'>
            <Text fontWeight={'medium'}>Case details</Text>
            <Flex justifyContent={'space-between'}>
                <SimpleGrid pt='5' columns={2} spacing={10} w='2xl'>
                    <Box >
                        <Text color={'#A5AEBB'} fontSize={'sm'}>Case_ID</Text>
                        <Text fontWeight={'medium'}>#3445 </Text>
                    </Box>
                    <Box>
                        <Text color={'#A5AEBB'} fontSize={'sm'}>Name</Text>
                        <Text fontWeight={'medium'}>John abramov </Text>
                    </Box>
                    <Box>
                        <Text color={'#A5AEBB'} fontSize={'sm'}>Case type</Text>
                        <Text fontWeight={'medium'}>Kidnap </Text>
                    </Box>
                    <Box>
                        <Text color={'#A5AEBB'} fontSize={'sm'}>Case status</Text>
                        <Text bg='red.300' px='3' w='fit-content' color='white' fontWeight={'medium'}>Not Solved</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'medium'}>Case date:</Text>
                        <Text>Abuse</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'medium'}>Case location:</Text>
                        <Text>Abuse</Text>
                    </Box>

                </SimpleGrid>
              
            </Flex>
        </Flex>
    )
}
