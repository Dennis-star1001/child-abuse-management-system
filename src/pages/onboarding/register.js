'use client'

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    SimpleGrid,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Registration() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'xl'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    Register
                </Heading>
                <FormControl id="userName">
                    <FormLabel>User Icon</FormLabel>
                    <Stack direction={['column', 'row']} spacing={6}>
                        <Center>
                            <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                                <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                />
                            </Avatar>
                        </Center>
                        <Center w="full">
                            <Button w="full">Change Icon</Button>
                        </Center>
                    </Stack>
                </FormControl>
                <SimpleGrid columns={2} spacing={10}>
                    <FormControl id="userName" isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input
                            placeholder="UserName"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                        />
                    </FormControl>
                    <FormControl id="lastname" isRequired>
                        <FormLabel>Last name</FormLabel>
                        <Input
                            placeholder="Last name"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                        />
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            placeholder="Email"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                        />
                    </FormControl>
                    <FormControl id="address" isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input
                            placeholder="address"
                            _placeholder={{ color: 'gray.500' }}
                            type="address"
                        />
                    </FormControl>
                    <FormControl id="gender" isRequired>
                        <FormLabel>Gender</FormLabel>
                        <select id='gender' placeholder='' style={{ width: '100%', border: '1px solid #E2E8F0', padding: '7px', borderRadius: '6px' }}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </FormControl>

                    <FormControl id="age" isRequired>
                        <FormLabel>Age</FormLabel>
                        <Input
                            placeholder="age"
                            _placeholder={{ color: 'gray.500' }}
                            type="age"
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                        />
                    </FormControl>
                    <FormControl id="confirm_password" isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            placeholder="confirm_password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                        />
                    </FormControl>
                </SimpleGrid>
                <Stack spacing={6} direction={['column', 'row']}>
                    <Link to='admin'>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#696BC2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                           Save
                        </button>
                    </Link>

                    <Link to='admin'>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#696BC2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                           Cancel
                        </button>
                    </Link>
                </Stack>
            </Stack>
        </Flex>
    )
}