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
import Category from './components/Category.js';
import Interest from './components/Interest.js';  // Import Interest component
import AboutStartup from './components/AboutStartup.js';
import { useNavigate } from "react-router-dom";


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

function StartupRegistration(props) {
  const { ...rest } = props;
  const history = useNavigate();
  const [formData, setFormData] = useState({
    startupName: "",
    fundingStatus: "",
    description: "",
    industry: "",
    sector: "",
    services: "",
    udyogAadhaar: "",
    natureOfEntity: "",
    interest: "",
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
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      try {
        const response = await axios.post("https://aspirebackend-gywyy55s.b4a.run/api/startup", {
          ...formData,
        });
        console.log("Registration successful:", response.data);
        alert("Registration successful!");
        history.push("/startup/viewregistration");
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
      }
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

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
                    {["About Startup", "Category", "Your Interest"].map((step, index) => (
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
                    <AboutStartup
                      handleChange={handleChange}
                      formData={formData}
                      handleSubmit={handleSubmit}
                    />
                  ) : currentStep === 2 ? (
                    <>
                      <Category
                        handleChange={handleChange}
                        formData={formData}
                        handleSubmit={handleSubmit}
                      />
                      <Button mt={4} colorScheme="teal" onClick={handleBack}>
                        Back
                      </Button>
                    </>
                  ) : currentStep === 3 ? (
                    <>
                      <Interest
                        handleChange={handleChange}
                        formData={formData}
                        handleSubmit={handleSubmit}
                      />
                      <Button mt={4} colorScheme="teal" onClick={handleBack}>
                        Back
                      </Button>
                    </>
                  ) : null}
                </Box>
              </Stack>
            </Flex>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}

export default StartupRegistration;