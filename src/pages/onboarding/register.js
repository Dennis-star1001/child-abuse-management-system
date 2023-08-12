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
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [conPass, setConPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    // img: "",
    firstname: "",
    lastname: "",
    gurdian_first_name: "",
    gurdian_last_name: "",
    gurdian_phone: "",
    gurdian_email: "",
    email: "",
    gender: "",
    password: "",
    age: "",
    address: "",
    phone: "",
    country: "",
    citystate: "",
    postal_code: "",
    home_address: "",
    gurdian_address: "",
    school_address: "",
    bio: ""
  });
  const { firstname, lastname, address, email, gender, password, age, phone, bio, country, citystate, postal_code, home_address, gurdian_address, school_address, gurdian_first_name, gurdian_last_name, gurdian_email, gurdian_phone} = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const link = "controller/auth/sign-up.php";
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("bio", bio);
    formData.append("country", country);
    formData.append("citystate", citystate);
    formData.append("postal_code", postal_code);
    formData.append("home_address", home_address);
    formData.append("gurdian_address", gurdian_address);
    formData.append("gurdian_first_name", gurdian_first_name);
    formData.append("gurdian_last_name", gurdian_last_name);
    formData.append("gurdian_email", gurdian_email);
    formData.append("gurdian_phone", gurdian_phone);
    formData.append("school_address", school_address);

    // toast(JSON.stringify(data));
    if (password !== conPass) {
      toast.error("Please check the password field and try again");
      setLoading(false);
    } else if (data) {
      try {
        postData(link, formData).then((res) => {
          if (res.data === "Account already exists") {
            toast.error(res.data);
            setLoading(false);
          } else {
            toast.success(res.data);
            // console.log(res.data);
            setData({});
            navigate("/");
            setLoading(false);
          }
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
          maxW={"4xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
         
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Register
          </Heading>
        
          <SimpleGrid alignItems={'center'} columns={{base:'1',md:2}} spacing={10}>
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
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder='First Name'
                _placeholder={{ color: "gray.500" }}
                type='text'
                name='firstname'
                onChange={handleChange}
                value={firstname}
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
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder='Phone'
                _placeholder={{ color: "gray.500" }}
                type="number"
                name='phone'
                onChange={handleChange}
                value={phone}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Input
                placeholder='Country'
                _placeholder={{ color: "gray.500" }}
                name='country'
                onChange={handleChange}
                value={country}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gurdian First Name</FormLabel>
              <Input
                placeholder='Gurdian/Parent First Name'
                _placeholder={{ color: "gray.500" }}
                name='gurdian_first_name'
                onChange={handleChange}
                value={gurdian_first_name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gurdian Last Name</FormLabel>
              <Input
                placeholder='Gurdian/Parent Last Name'
                _placeholder={{ color: "gray.500" }}
                name='gurdian_last_name'
                onChange={handleChange}
                value={gurdian_last_name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gurdian Email</FormLabel>
              <Input
                placeholder='Gurdian/Parent Email'
                _placeholder={{ color: "gray.500" }}
                name='gurdian_email'
                onChange={handleChange}
                value={gurdian_email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gurdian Phone number</FormLabel>
              <Input
                placeholder='Gurdian/Parent Phone number'
                _placeholder={{ color: "gray.500" }}
                name='gurdian_phone'
                onChange={handleChange}
                value={gurdian_phone}
              />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>City/State</FormLabel>
              <Input
                placeholder='City/State'
                _placeholder={{ color: "gray.500" }}
                name='citystate'
                onChange={handleChange}
                value={citystate}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Postal Code</FormLabel>
              <Input
                placeholder='Postal Code'
                _placeholder={{ color: "gray.500" }}
                name='postal_code'
                onChange={handleChange}
                value={postal_code}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Home Address</FormLabel>
              <Input
                placeholder='Home Address'
                _placeholder={{ color: "gray.500" }}
                name='home_address'
                onChange={handleChange}
                value={home_address}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>School Address</FormLabel>
              <Input
                placeholder='School Address'
                _placeholder={{ color: "gray.500" }}
                name='school_address'
                onChange={handleChange}
                value={school_address}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Bio</FormLabel>
              <Input
                placeholder='Bio'
                _placeholder={{ color: "gray.500" }}
                name='bio'
                onChange={handleChange}
                value={bio}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gurdian Address</FormLabel>
              <Input
                placeholder='Gurdian Address'
                _placeholder={{ color: "gray.500" }}
                name='gurdian_address'
                onChange={handleChange}
                value={gurdian_address}

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
          <Stack pt='10' spacing={6} justifyContent={'center'} direction={["column", "row"]}>
            <button
            
              type='submit'
              className='flex px-14 w-fit-content justify-center rounded-md bg-[#696BC2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Cancel
            </button>

            <button
              type='submit'
              className='flex px-14 w-fit-content justify-center rounded-md bg-[#696BC2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              {loading ? <Spinner /> : "Save"}
            </button>
          </Stack>
          <p className='mt-10 text-center text-sm text-gray-500'>
            Already have an account?{" "}
            <Link
              to='/'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Sign in
            </Link>
          </p>
        </Stack>
      </Flex>
    </form>
  );
}
