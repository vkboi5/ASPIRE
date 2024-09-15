import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";

const AboutStartup = ({ formData, handleChange, handleSubmit, handleUploadPicture }) => {
  return (
    <Box>
      <Stack spacing={4}>
        <FormControl id="startupName" isRequired>
          <FormLabel>Startup Name</FormLabel>
          <Input
            type="text"
            name="startupName"
            value={formData.startupName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="fundingStatus" isRequired>
          <FormLabel>Funding Status</FormLabel>
          <Select
            name="fundingStatus"
            value={formData.fundingStatus}
            onChange={handleChange}
          >
            <option value="">Select funding status</option>
            <option value="funded">Funded</option>
            <option value="bootstrapped">Bootstrapped</option>
          </Select>
        </FormControl>

        <FormControl id="description" isRequired>
          <FormLabel>Brief Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a brief description of your startup"
          />
        </FormControl>

        <FormControl id="logo" isRequired>
          <FormLabel>Upload Startup Logo</FormLabel>
          <Input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleUploadPicture}
          />
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

export default AboutStartup;