import {
  Avatar,
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PersonalInfo } from "./components/PersonalChildInfo";
import { ParentInfo } from "./components/ParentInfo";
import { Address } from "./components/Address";
import { Link, useParams } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { CaseDetails } from "./components/CaseDetails";

export const ProfileOfChild = ({
  loadCases,
  loadChildren,
  children,
  cases,
}) => {
  let { id } = useParams();
  console.log("Params", children && children);

  const index = children.map((object) => object.id).indexOf(id);
  const indez = cases.map((object) => object.email);
  console.log(index);
  console.log(indez);
  const Data = children[index];
  const CasesData = cases[index];
  console.log(CasesData);
  //   const [dataValues, setDataValues] = useState(Data);
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setDataValues((prevData) => ({ ...prevData, [name]: value }));
  //   };
  //   console.log(dataValues, "values");
  return (
    <Box ml='64' px='5' class='mx-auto max-w-7xl  sm:px-6 lg:px-8'>
      <Text fontWeight={"medium"} px={"5"} py='2' fontSize={"20"}>
        Child Profile
      </Text>

      {Data && (
        <>
          <Flex
            alignItems={"center"}
            borderRadius={"2xl"}
            border='1px solid #E2E8F0'
            gap='5'
            p='7'>
            <WrapItem>
              <Avatar
                size={"xl"}
                name='Dan Abrahmov'
                src='https://bit.ly/dan-abramov'
              />
            </WrapItem>
            {/* {data && data.map((index, data) => ( */}
            <Box w='full' bg='white'>
              <Text fontSize={"lg"} fontWeight={"medium"}>
                {Data.firstname} {Data.lastname}
              </Text>
              <Text color={"#A5AEBB"} fontSize={"sm"}>
                {Data.email}
              </Text>
              <Text color={"#A5AEBB"} fontSize={"sm"}>
                {Data.phone}
              </Text>
            </Box>
            {/* ))} */}
          </Flex>
          <PersonalInfo loadChildren={loadChildren} data={Data} />

          <ParentInfo loadChildren={loadChildren} data={Data} />
          <Address loadChildren={loadChildren} data={Data} />
          <CaseDetails loadCases={loadCases} data={Data} cases={CasesData} />
        </>
      )}
    </Box>
  );
};
