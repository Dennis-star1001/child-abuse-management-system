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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { postData } from "../../../../../api/api";
import { useNavigate } from "react-router-dom";

export default function AddCase({ loadCases, name }) {

  const ChildCaseType = [
   
    'International Child Abduction',
    'Child Abuse and Neglect',
    'Adoption',
    'Guardianship',
    'Educational Rights',
    'Parental Rights and Termination',
    "Foster Care and Adoption Agency Disputes",
    "Minors' Privacy and Consent",
    "Child Exploitation and Online Safety",
    "Gender Identity and LGBTQ+ Rights"
    
  ]
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(name, "loklo");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const randomNumber = Math.floor(Math.random() * 4000) + 1;
  const [data, setData] = useState({
    type: "",
    location: "",
    date: "",
    time: "",
    caseId: `CASE/18/${randomNumber}`,
    description:
      "change this value to empty string when you create a form input for description...............................................",
  });
  const { type, location, date, time } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    // toast.dark(JSON.stringify(data));
    setLoading(true);
    const formData = new FormData();
    const email = localStorage.getItem("client");
    formData.append("type", type);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("description", data.description);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("caseId", data.caseId);
    const url = "/view/add-case.php";
    postData(url, formData)
      .then((res) => {
        toast.success(res.data);
        setLoading(false);
        onClose();
        navigate("/client");
        loadCases();
      })
      .catch((err) => {
        setLoading(false);
        onClose();
        toast.error(err);
      });
    console.log("UserID",data.caseId)
  };
  
  return (
    <>
      <Button mr='10' onClick={onOpen}>
        Add Case
      </Button>

      <Modal
        size={"3xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Case</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SimpleGrid columns={2} gap='10'>
              <FormControl>
                <FormLabel>Case Type</FormLabel>
                <Select ref={initialRef}
                  placeholder= 'Select Case Type'
                  type='text'
                  name='type'
                  onChange={handleChange}
                  value={type}>
                  {ChildCaseType.map(item =>(
                    
                    <option>{item}</option>
                  ))}
                  
                 
                </Select>
               
              </FormControl>

              <FormControl>
                <FormLabel>Case Location</FormLabel>
                <Input
                  placeholder='Case Location'
                  type='text'
                  name='location'
                  onChange={handleChange}
                  value={location}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Case Date</FormLabel>
                <Input
                  type='date'
                  placeholder='Case Date'
                  name='date'
                  onChange={handleChange}
                  value={date}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Case Time</FormLabel>
                <Input
                  placeholder='Case Time'
                  type='time'
                  name='time'
                  onChange={handleChange}
                  value={time}
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
