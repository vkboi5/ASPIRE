import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  useColorModeValue,
  Heading,
  Textarea,
} from "@chakra-ui/react";

const Category = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Box
      rounded={"xl"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Stack spacing={4}>
        <Heading fontSize={"2xl"}>Category Details</Heading>

        <FormControl id="industry" isRequired>
          <FormLabel>Industry</FormLabel>
          <Select
            placeholder="Select industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="IT">IT</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            {/* Add more industries as needed */}
          </Select>
        </FormControl>

        <FormControl id="sector" isRequired>
          <FormLabel>Sector</FormLabel>
          <Input
            type="text"
            name="sector"
            placeholder="Enter sector"
            value={formData.sector}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="services" isRequired>
          <FormLabel>Services</FormLabel>
          <Textarea
            placeholder="Describe the services"
            name="services"
            value={formData.services}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="udyogAadhaar" isRequired>
          <FormLabel>UDYOG AADHAAR</FormLabel>
          <Input
            type="text"
            name="udyogAadhaar"
            placeholder="Enter UDYOG AADHAAR"
            value={formData.udyogAadhaar}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="natureOfEntity" isRequired>
          <FormLabel>Nature of Entity</FormLabel>
          <Select
            placeholder="Select nature of entity"
            name="natureOfEntity"
            value={formData.natureOfEntity}
            onChange={handleChange}
          >
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Partnership">Partnership</option>
            <option value="Private Limited">Private Limited</option>
            <option value="Public Limited">Public Limited</option>
            <option value="LLP">LLP</option>
            {/* Add more entity types as needed */}
          </Select>
        </FormControl>

        <Button
          size="lg"
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Category;