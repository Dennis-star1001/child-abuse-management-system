import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { deleteFunc } from "../api/api";
import { toast } from "react-toastify";
import { useState } from "react";
// import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function DeleteModal({ child, loadChildren }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id, username } = child;
  const handleDelete = () => {
    setLoading(true);
    const url = `view/delete-child.php?id=${id}`;
    deleteFunc(url)
      .then((res) => {
        setLoading(false);
        // navigate("/admin");
        toast.success(res.data);
        loadChildren();
        // onClose();
      })
      .catch((err) => {
        // console.log("load2");
        setLoading(false);
        toast.error(err);
      });
    setTimeout(function () {
      // body
      onClose();
    }, 2000);
  };
  return (
    <>
      <Button
        bg={"red.500"}
        color={"white"}
        rounded={0}
        height={"36px"}
        fontSize={"15px"}
        onClick={onOpen}>
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Child ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure to delete {username} ?</ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' width={"100px"} onClick={handleDelete}>
              {loading ? <Spinner /> : "Delete"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default DeleteModal;
