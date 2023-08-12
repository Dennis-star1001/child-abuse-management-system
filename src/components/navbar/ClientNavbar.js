"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineViewList } from "react-icons/hi";
import {
  MdOutlineCases,
  MdReceiptLong,
  MdOutlineReceipt,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { toast } from "react-toastify";

const LinkItems = [
  { name: "Dashboard", icon: AiOutlineAppstore, destination: "/client" },
  //   { name: "Children", icon: MdOutlineReceipt, destination: "./children" },
  { name: "Case", icon: MdOutlinePeopleAlt, destination: "./case" },
  { name: "Profile", icon: MdOutlinePeopleAlt, destination: "./profile" },
  // { name: "Report", icon: MdOutlineCases, destination: "./report" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue("white", "gray.900")}
      borderRight='1px'
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos='fixed'
      h='full'
      color='white'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          destination={link.destination}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, destination, children, ...rest }) => {
  const linkStyles = useStyleConfig("Link");
  const location = useLocation();

  const isHomeActive = location.pathname === `${destination}` ? true : false;

  console.log(location.pathname);
  console.log(destination);
  return (
    <Link to={destination} _focus={{ boxShadow: "none" }}>
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align='center'
          p='4'
          mx='4'
          borderRadius='lg'
          role='group'
          cursor='pointer'
          style={
            isHomeActive
              ? {
                  borderRadius: "0",
                  borderRight: "2px solid #8CC7FF",
                }
              : linkStyles
          }
          _hover={{
            borderRadius: "0",
            borderRight: "2px solid #8CC7FF",
          }}
          {...rest}>
          {icon && (
            <Icon
              mr='4'
              fontSize='16'
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

const MobileNav = ({ onOpen, header, ...rest }) => {
  const navigate = useNavigate();
  const logout = (params) => {
    localStorage.clear();
    navigate("/");
    toast.success("successfully log out");
  };
  const profilepage = (params) => {
  
    navigate("/client/profile");
   
  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      // w='full'
      alignItems='center'
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />
      <Flex w='full' alignItems={"center"} justifyContent={"space-between"}>
        <Text
          display={{ base: "none", md: "block" }}
          fontWeight={500}
          fontSize={"22px"}
          color={"#164C77"}>
          {header}
        </Text>
        <HStack spacing={{ base: "0", md: "6" }}>
          <IconButton
            size='lg'
            variant='ghost'
            aria-label='open menu'
            icon={<FiBell />}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition='all 0.3s'
                _focus={{ boxShadow: "none" }}>
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems='flex-start'
                    spacing='1px'
                    ml='2'>
                    <Text fontSize='sm'>Justina Clark</Text>
                    <Text fontSize='xs' color='gray.600'>
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}>
                <MenuItem onClick={profilepage}>Profile</MenuItem>
                
                <MenuDivider />
                {/* <Link to='/'> */}
                <MenuItem onClick={logout}>Sign out</MenuItem>
                {/* </Link> */}
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  // Map the route paths to their corresponding headers
  const headerMap = {
    "/admin": "Dashboard",
    "/admin/children": "Child List",
    "/admin/case": "Reported Cases",
    "/admin/profile": "Profile",
    "/admin/report": "Report",
  };
  const currentPath = location.pathname;
  const currentHeader = headerMap[currentPath];
  return (
    <Box>
      <SidebarContent
        bg='#696bc2'
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} header={currentHeader} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {/* Content */}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
