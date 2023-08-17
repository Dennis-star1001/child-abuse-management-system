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
  Select,
  SimpleGrid,
  Spinner,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { postData } from "../../../../api/api";
import { toast } from "react-toastify";

export default function EditCase({ loadCases }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = () => {
    const email = localStorage.getItem("client");
    const url = `view/edit-case.php?email=${email}`;
    setLoading(true);
    const formData = new FormData();
    formData.append("status", status);
    postData(url, formData)
      .then((res) => {
        setLoading(false);
        toast.success(res.data);
        loadCases();
        onClose();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Button onClick={onOpen}>
        Edit <AiFillEdit />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Case Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={1} spacing={5}>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder='Update cases status'>
                  <option>Pending</option>
                  <option>Solved</option>
                </Select>
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
