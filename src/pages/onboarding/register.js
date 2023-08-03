import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
import { postData } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [conPass, setConPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    // img: "",
    username: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
    age: "",
    address: "",
  });
  const { username, lastname, address, email, gender, password, age } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const link = "controller/auth/sign-up.php";
    formData.append("username", username);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("password", password);

    // toast(JSON.stringify(data));
    if (password !== conPass) {
      toast.error("Please check the password field and try again");
      setLoading(false);
    } else if (data) {
      try {
        postData(link, formData).then((res) => {
          toast.success(res.data);
          //   console.log(res.data);
          setData({});
          navigate("/");
          setLoading(false);
        });
      } catch (error) {
        toast.error("Network Error");
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Register
          </Heading>
          <FormControl>
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size='xl' src='https://bit.ly/sage-adebayo'>
                  <AvatarBadge
                    as={IconButton}
                    size='sm'
                    rounded='full'
                    top='-10px'
                    colorScheme='red'
                    aria-label='remove Image'
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w='full'>
                <Button w='full'>Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <SimpleGrid columns={2} spacing={10}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder='UserName'
                _placeholder={{ color: "gray.500" }}
                type='text'
                name='username'
                onChange={handleChange}
                value={username}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder='Last Name'
                _placeholder={{ color: "gray.500" }}
                type='Last Name'
                name='lastname'
                onChange={handleChange}
                value={lastname}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder='Email'
                _placeholder={{ color: "gray.500" }}
                type='email'
                name='email'
                onChange={handleChange}
                value={email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder='Address'
                _placeholder={{ color: "gray.500" }}
                type='text'
                name='address'
                onChange={handleChange}
                value={address}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <select
                placeholder=''
                name='gender'
                onChange={handleChange}
                value={gender}
                style={{
                  width: "100%",
                  border: "1px solid #E2E8F0",
                  padding: "7px",
                  borderRadius: "6px",
                }}>
                <option defaultValue={"Select Gender"}>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Age</FormLabel>
              <Input
                placeholder='Age'
                _placeholder={{ color: "gray.500" }}
                name='age'
                onChange={handleChange}
                value={age}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder='password'
                _placeholder={{ color: "gray.500" }}
                name='password'
                onChange={handleChange}
                value={password}
                type='password'
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                placeholder='password'
                type='password'
                _placeholder={{ color: "gray.500" }}
                onChange={(e) => setConPass(e.target.value)}
                value={conPass}
              />
            </FormControl>
          </SimpleGrid>
          <Stack spacing={6} direction={["column", "row"]}>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-[#696BC2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Cancel
            </button>

            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-[#696BC2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              {loading ? <Spinner /> : "Submit"}
            </button>
          </Stack>
        </Stack>
      </Flex>
    </form>
  );
}
