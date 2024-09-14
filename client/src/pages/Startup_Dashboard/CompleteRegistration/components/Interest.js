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