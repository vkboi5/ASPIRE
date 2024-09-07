import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  useColorModeValue,
  Heading,
  Divider,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import routes from "../routes.js";
import theme from "../../../utils/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import ContactInfo from "./components/AboutStartup.js";


const statesAndCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Korba"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana: ["Chandigarh", "Faridabad", "Gurgaon", "Panipat"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"],
  Meghalaya: ["Shillong", "Tura", "Nongpoh", "Jowai"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
  Sikkim: ["Gangtok", "Namchi", "Pelling", "Gyalshing"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Kailashahar", "Dharmanagar"],
  Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Jhansi"],
  "West Bengal": ["Kolkata", "Darjeeling", "Siliguri", "Durgapur"],
  "Andaman and Nicobar Islands": ["Port Blair"],
  Chandigarh: ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Silvassa", "Daman"],
  Lakshadweep: ["Kavaratti"],
  "Delhi NCR": ["New Delhi", "Gurgaon", "Noida", "Faridabad"],
  Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
};

function CompleteRegistration(props) {
  const { ...rest } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    website: "",
    mobileAppLink: "",
    state: "",
    city: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep === 1) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      setCurrentStep(2);
    } else {
      try {
        const response = await axios.post("https://aspirebackend-gywyy55s.b4a.run//api/register", {
          ...formData,
        });
        console.log("Registration successful:", response.data);
        alert("Registration successful!");
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
      }
    }
  };

  const cities = formData.state ? statesAndCities[formData.state] : [];

  return (
    <ChakraProvider theme={theme}>
      <Sidebar
        routes={routes}
        logoText={"AYUSH PORTAL"}
        display="none"
        sidebarVariant="transparent"
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <PanelContent>
          <PanelContainer>
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Complete Registration</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    Follow the steps to complete your registration ✌️
                  </Text>
                </Stack>
                <Box width="full">
                  <Stack direction="row" spacing={4} justify="center">
                    {["Contact Info", "About Startup", "Category", "Your interest"].map((step, index) => (
                      <Box
                        key={index}
                        flex="1"
                        textAlign="center"
                        fontWeight={currentStep === index + 1 ? "bold" : "normal"}
                        color={currentStep === index + 1 ? "blue.400" : "gray.500"}
                      >
                        {step}
                      </Box>
                    ))}
                  </Stack>
                  <Divider my={4} />
                </Box>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  {currentStep === 1 ? (
                    <Stack spacing={4}>
                      <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="confirmPassword" isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="state" isRequired>
                        <FormLabel>State</FormLabel>
                        <Select
                          placeholder="Select state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        >
                          {Object.keys(statesAndCities).map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl id="city" isRequired>
                        <FormLabel>City</FormLabel>
                        <Select
                          placeholder="Select city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          isDisabled={!formData.state}
                        >
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      <Button
                        loadingText="Submitting"
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
                  ) : (
                    <ContactInfo
                      formData={formData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                  )}
                </Box>
              
              </Stack>
            </Flex>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}

export default CompleteRegistration;