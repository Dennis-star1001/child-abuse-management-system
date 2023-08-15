import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, SimpleGrid, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { AiFillEdit } from "react-icons/ai"

export default function EditCase () {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Edit <AiFillEdit/></Button>
  
        <Modal 
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Case Status</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} >
            <SimpleGrid columns={1} spacing={5}>
              
             
              <FormControl >
                <FormLabel>Status</FormLabel>
                <Select placeholder="Update cases status">
                  <option>Pending</option>
                  <option>Solved</option>
                  
                </Select>
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