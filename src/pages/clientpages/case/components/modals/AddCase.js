import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"

export default function AddCase() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [data, setData] = useState({

    case_type: "",
    case_location: "",
    case_date: "",
    case_time: "",

  });
  const { case_type, case_location, case_date, case_time } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <>
      <Button mr='10' onClick={onOpen}>
        Add Case
      </Button>

      <Modal size={'3xl'}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}

      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Case</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={2} gap='10'>
              <FormControl>
                <FormLabel>Case Type</FormLabel>
                <Input ref={initialRef} placeholder='Case Type'
                  type='text'
                  name='case_type'
                  onChange={handleChange}
                  value={case_type} />
              </FormControl>

              <FormControl >
                <FormLabel>Case Location</FormLabel>
                <Input placeholder='Case Location'
                  type='text'
                  name='case_location'
                  onChange={handleChange}
                  value={case_location} />
              </FormControl>
              <FormControl >
                <FormLabel>Case Date</FormLabel>
                <Input type='date' placeholder='Case Date'
                  name='case_date'
                  onChange={handleChange}
                  value={case_date} />
              </FormControl>
              <FormControl >
                <FormLabel>Case Time</FormLabel>
                <Input placeholder='Case Time'  type='time'
                  name='case_time'
                  onChange={handleChange}
                  value={case_time} />
              </FormControl>

            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}