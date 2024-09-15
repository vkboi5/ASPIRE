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
  Text,
  Link,
} from "@chakra-ui/react";

const Interest = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Box
      rounded={"xl"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Stack spacing={4}>
        <Heading fontSize={"2xl"}>Your Interest</Heading>

        <FormControl id="interest" isRequired>
          <FormLabel>Interest</FormLabel>
          <Textarea
            placeholder="Describe your interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          />
        </FormControl>

        <Box mt={4}>
          <Text textAlign="center" fontSize="sm" color="gray.500">
            Privacy Policy: We value your privacy and are committed to protecting your personal information. By submitting this form, you agree to our privacy practices as outlined below:
          </Text>
          <Text fontSize="sm" color="gray.500" mt={2}>
            1. Information Collection: We collect personal information that you provide to us, such as your name, email address, and any other details you include in your submission.
          </Text>
          <Text fontSize="sm" color="gray.500" mt={2}>
            2. Use of Information: The information we collect is used to understand your interests and provide you with relevant information and services. We may also use your information to improve our offerings and communicate with you.
          </Text>
          <Text fontSize="sm" color="gray.500" mt={2}>
            3. Information Sharing: We do not share your personal information with third parties without your consent, except as required by law or to protect our rights.
          </Text>
          <Text fontSize="sm" color="gray.500" mt={2}>
            4. Data Security: We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
          </Text>
          <Text fontSize="sm" color="gray.500" mt={2}>
            5. Your Rights: You have the right to access, update, or delete your personal information. If you have any questions or concerns about our privacy practices, please contact us.
          </Text>
        </Box>

        <Button
          size="lg"
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Interest;