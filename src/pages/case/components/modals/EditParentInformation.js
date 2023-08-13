import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { postData } from "../../../../api/api";
import { toast } from "react-toastify";

export default function ParentInformation({ loadChildren, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [dataValues, setDataValues] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataValues((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(dataValues, "defaultval");
  const handleSubmit = () => {
    const email = localStorage.getItem("client");
    if (email) setLoading(true);
    const url = `view/edit-first-section.php?email=${email}`;
    const formData = new FormData();
    formData.append("firstname", dataValues.firstname);
    formData.append("lastname", dataValues.lastname);
    formData.append("email", dataValues.email);
    formData.append("phone", dataValues.phone);
    formData.append("bio", dataValues.bio);
    toast(JSON.stringify(data));
    // postData(url, formData)
    //   .then((res) => {
    //     setLoading(false);
    //     loadChildren();
    //     onClose();
    //     toast.success(res.data);
    //   })
    //   .catch((err) => {
    //     toast.error("network error !");
    //     setLoading(false);
    //     onClose();
    //   });
  };

  return (
    <>
      <Button onClick={onOpen}>
        Edit <AiFillEdit />
      </Button>

      <Modal
        size={"4xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Parent/Gurdian Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={2} spacing={5}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>

              <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input
                  name='firstname'
                  onChange={handleChange}
                  value={dataValues.firstname}
                  placeholder='Last name'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input placeholder='john@gmail.com' />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder='+234 *** **** **' />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Textarea placeholder='Enter Bio' />
              </FormControl>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
