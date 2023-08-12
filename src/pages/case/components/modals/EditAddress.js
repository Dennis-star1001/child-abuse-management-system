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
import { postData } from "../../../../api/api";

export default function EditAddress({ data, loadChildren }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  // console.log(data, "data");
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
    const url = `view/edit-third-section.php?email=${email}`;
    const formData = new FormData();
    formData.append("country", dataValues.country);
    formData.append("citystate", dataValues.citystate);
    formData.append("postal_code", dataValues.postal_code);
    formData.append("gurdian_address", dataValues.gurdian_address);
    formData.append("school_address", dataValues.school_address);
    formData.append("home_address", dataValues.home_address);
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
          <ModalHeader>Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={2} spacing={5}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input
                  onChange={handleChange}
                  value={dataValues.country}
                  name='country'
                  ref={initialRef}
                  placeholder='Country'
                />
              </FormControl>

              <FormControl>
                <FormLabel>City/State</FormLabel>
                <Input
                  onChange={handleChange}
                  value={dataValues.citystate}
                  name='citystate'
                  placeholder='City/State'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Postal Code</FormLabel>
                <Input
                  onChange={handleChange}
                  value={dataValues.postal_code}
                  name='postal_code'
                  placeholder='Postal Code'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Home Address</FormLabel>
                <Textarea
                  onChange={handleChange}
                  value={dataValues.home_address}
                  name='home_address'
                />
              </FormControl>
              <FormControl>
                <FormLabel>School/Office Address</FormLabel>
                <Textarea
                  onChange={handleChange}
                  value={dataValues.school_address}
                  name='school_address'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Parent/Gurdian Address</FormLabel>
                <Textarea
                  onChange={handleChange}
                  value={dataValues.gurdian_address}
                  name='gurdian_address'
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
