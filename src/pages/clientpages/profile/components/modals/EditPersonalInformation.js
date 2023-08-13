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
  Spinner,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { postData } from "../../../../../api/api";

export default function PersonalInfo({ loadChildren, data }) {
  console.log(data.username, "change");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataValues, setDataValues] = useState(data);
  const [loading, setLoading] = useState(false);
console.log("load",loadChildren)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataValues((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = () => {
    const email = localStorage.getItem("client");
    if (email) {
      setLoading(true);
      const url = `view/edit-first-section.php?email=${email}`;
      const formData = new FormData();
      formData.append("firstname", dataValues.firstname);
      formData.append("lastname", dataValues.lastname);
      formData.append("email", dataValues.email);
      formData.append("phone", dataValues.phone);
      formData.append("bio", dataValues.bio);
      console.log("Email",email)
      postData(url, formData)
        .then((res) => {
          setLoading(false);
          loadChildren();
          onClose();
          toast.success(res.data);
        })
        .catch((err) => {
          toast.error("network error !");
          setLoading(false);
          onClose();
        });
    } else {
      toast.error("Session Expired please log out");
    }
    loadChildren();

  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  console.log(dataValues, "datValues");
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
          <ModalHeader>Personal Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={2} spacing={5}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  value={dataValues.firstname}
                  ref={initialRef}
                  name='firstname'
                  onChange={handleChange}
                  placeholder='First name'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input
                  name='lastname'
                  value={dataValues.lastname}
                  onChange={handleChange}
                  placeholder='Last name'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  onChange={handleChange}
                  name='email'
                  value={dataValues.email}
                  placeholder='john@gmail.com'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  name='phone'
                  onChange={handleChange}
                  value={dataValues.phone}
                  placeholder='+234 *** **** **'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Textarea
                  value={dataValues.bio}
                  onChange={handleChange}
                  name='bio'
                  placeholder='Enter Bio'
                />
              </FormControl>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
              {loading ? <Spinner /> : "Save"}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
