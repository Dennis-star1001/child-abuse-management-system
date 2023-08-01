import React, { ReactNode } from "react";
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
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  useStyleConfig,
  color,
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
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineViewList } from "react-icons/hi";
import {
  MdOutlineCases,
  MdReceiptLong,
  MdOutlineReceipt,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { BiBarChartSquare } from "react-icons/bi";
import { ReactText } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

const LinkItems = [
  { name: "Dashboard", icon: AiOutlineAppstore, destination: "./dashboard" },
  { name: "Children", icon: MdOutlineReceipt, destination: "./children" },
  { name: "Abuse", icon: MdOutlinePeopleAlt, destination: "./abuse" },
  { name: "Report", icon: MdOutlineCases, destination: "./report" },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  // Map the route paths to their corresponding headers
  const headerMap = {
    "/admin/dashboard": "Dashboard",
    "/admin/children": "Children List",
    "/admin/abuse": "Abuse Report",
    "/admin/report": "Report",
    "/admin/home/customer": "Customer",
    "/admin/home/service-and-product": "Service / Product",
    "/admin/home/transaction": "Transaction",
    "/admin/home/report": "Report",
  };
  const currentPath = location.pathname;
  const currentHeader = headerMap[currentPath];

  return (
    <Box minH='100vh'>
      <SidebarContent
        bg='#696bc2'
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
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
      <Box ml={{ base: 0, md: 60 }} h='auto' p='4' bg='#FFFFFF'>
        {children}
      </Box>
    </Box>
  );
}

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
      <Flex
        position={"relative"}
        align='center'
        p='4'
        ml='5'
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
        {/* <Text position='absolute' style={isHomeActive ? {
          color: '#8CC7FF'

        } : {color:'#f6f6f6'}} _groupChecked={{ color: '#8CC7FF' }} color='white' fontSize='7xl' left='0' bottom={'0'}>.</Text> */}
        {icon && <Icon mr='4' fontSize='20' color={"white"} as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, header, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
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

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'>
        Logo
      </Text>
      <HStack w='full' justifyContent={"space-between"}>
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
                    <Text fontSize='sm'>Ajoke Animashaun Janet</Text>
                    <Text fontSize='xs' color='gray.600'>
                      Paylode Services
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
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <Link to='/'>
                  <MenuItem>Sign out</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </HStack>
    </Flex>
  );
};
