import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Heading,
    Textarea,
    useDisclosure,
    Alert,
    AlertIcon,
    Fade,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  function Interest({ formData, handleChange, handleSubmit }) {
    const [showAlert, setShowAlert] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleNext = () => {
      handleSubmit(); // Call the handleSubmit function
      setShowAlert(true); // Show the alert after submission
      setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
    };
  
    return (
      <Box
        rounded={"xl"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        maxW="md"
        mx="auto"
        mt={8}
        borderWidth={1}
        borderColor={useColorModeValue("gray.200", "gray.600")}
      >
        <Stack spacing={4}>
          <Heading fontSize={"2xl"} mb={4}>
            Your Interest
          </Heading>
  
          <FormControl id="interest" isRequired>
            <FormLabel fontWeight={"bold"}>Interest</FormLabel>
            <Input
              type="text"
              name="interest"
              placeholder="Enter your interest"
              value={formData.interest || ""}
              onChange={handleChange}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />
          </FormControl>
  
          <Stack direction="row" spacing={4} mt={6}>
            <Button
              onClick={handleNext}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              size="lg"
              px={6}
              py={4}
              fontSize="md"
            >
              Submit
            </Button>
          </Stack>
  
          {/* Alert Message */}
          {showAlert && (
            <Fade in={showAlert}>
              <Alert status="success" variant="subtle" mt={4}>
                <AlertIcon />
                Form submitted successfully!
              </Alert>
            </Fade>
          )}
  
          {/* Terms of Use Section */}
          <Box
            mt={8}
            p={6}
            borderWidth={1}
            borderColor={useColorModeValue("gray.300", "gray.600")}
            rounded={"md"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Heading fontSize={"lg"} mb={4}>
              Terms of Use
            </Heading>
            <Box fontSize={"md"} lineHeight={"tall"}>
              <p>
                Welcome to the Ayush Portal. By using this portal, you agree to
                the following terms and conditions:
              </p>
              <p>
                1. **Eligibility**: You must be at least 18 years old to use this
                portal.
              </p>
              <p>
                2. **User Responsibilities**: You agree to provide accurate
                information and to use the portal in a lawful manner.
              </p>
              <p>
                3. **Data Privacy**: Your data will be handled in accordance with
                our privacy policy.
              </p>
              <p>
                4. **Intellectual Property**: All content on the portal is owned
                by us or our licensors. You may not reproduce or distribute it
                without permission.
              </p>
              <p>
                5. **Limitation of Liability**: We are not liable for any
                damages arising from your use of the portal.
              </p>
              <p>
                6. **Changes**: We may update these terms from time to time, and
                you are responsible for reviewing them periodically.
              </p>
              <p>
                By using the Ayush Portal, you acknowledge that you have read and
                agree to these terms of use.
              </p>
            </Box>
          </Box>
        </Stack>
      </Box>
    );
  }
  
  export default Interest;
  