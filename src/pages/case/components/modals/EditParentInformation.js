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
import { postData } from "../../../../api/api";
import { toast } from "react-toastify";

export default function ParentInformation({ loadChildren, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(data, "plop");
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
    const url = `view/edit-second-section.php?email=${email}`;
    const formData = new FormData();
    formData.append("guardian_name", dataValues.guardian_name);
    formData.append("guardian_phone", dataValues.guardian_phone);
    formData.append("guardian_email", dataValues.guardian_email);
    formData.append("guardian_bio", dataValues.guardian_bio);
    // formData.append("bio", dataValues.bio);
    // toast(JSON.stringify(data));
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
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={handleChange}
                  value={dataValues.guardian_name}
                  name='guardian_name'
                  ref={initialRef}
                  placeholder='Name'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  onChange={handleChange}
                  value={dataValues.guardian_email}
                  name='guardian_email'
                  placeholder='john@gmail.com'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  onChange={handleChange}
                  value={dataValues.guardian_phone}
                  name='guardian_phone'
                  placeholder='+234 *** **** **'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Textarea
                  onChange={handleChange}
                  value={dataValues.guardian_bio}
                  name='guardian_bio'
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
