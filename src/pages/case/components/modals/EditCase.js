import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { AiFillEdit } from "react-icons/ai"

export default function EditCase () {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Edit <AiFillEdit/></Button>
  
        <Modal size={'4xl'}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} >
            <SimpleGrid columns={2} spacing={5}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input ref={initialRef} placeholder='Country' />
              </FormControl>
  
              <FormControl >
                <FormLabel>City/State</FormLabel>
                <Input placeholder='City/State' />
              </FormControl>
              <FormControl >
                <FormLabel>Postal Code</FormLabel>
                <Input placeholder='Postal Code' />
              </FormControl>
              <FormControl >
                <FormLabel>Home Address</FormLabel>
                <Textarea />
              </FormControl>
              <FormControl >
                <FormLabel>School/Office Address</FormLabel>
                <Textarea />
              </FormControl>
              <FormControl >
                <FormLabel>Parent/Gurdian Address</FormLabel>
                <Textarea />
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