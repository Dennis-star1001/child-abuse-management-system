import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { AiFillEdit } from "react-icons/ai"

export default function ParentInformation () {
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
            <ModalHeader>Parent/Gurdian Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} >
            <SimpleGrid columns={2} spacing={5}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl >
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
              <FormControl >
                <FormLabel>Email Address</FormLabel>
                <Input placeholder='john@gmail.com' />
              </FormControl>
              <FormControl >
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder='+234 *** **** **' />
              </FormControl>
              <FormControl >
                <FormLabel>Bio</FormLabel>
                <Textarea placeholder="Enter Bio" />
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