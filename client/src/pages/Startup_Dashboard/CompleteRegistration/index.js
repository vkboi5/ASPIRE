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
  ChakraProvider,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import routes from "../routes.js";
import theme from "../../../utils/theme/theme";
import Category from './components/Category.js';
import Interest from './components/Interest.js';
import AboutStartup from './components/AboutStartup.js';
import { useNavigate } from "react-router-dom";
import DAP from './components/DAP';
import { useReactToPrint } from 'react-to-print';

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
  const navigate = useNavigate();
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
  const [isRegistered, setIsRegistered] = useState(false);
  const [dapData, setDapData] = useState({
    profilePicture: 'https://via.placeholder.com/100',
    name: 'John Doe',
    dapId: 'DAP123456789',
    qrCodeLink: 'https://example.com',
    category: 'Startup',
    specialization: 'Ayurveda',
    contactDetails: 'john.doe@example.com, +1234567890',
    location: 'City, State, Country',
    foundingDate: '01-01-2020',
    registrationNumber: 'REG123456',
    certifications: 'Certification 1, Certification 2',
    complianceStatus: 'Compliant',
    productServiceListings: 'Product 1, Service 1',
    certificationDetails: 'Certification Detail 1, Certification Detail 2',
    licenseNumbers: 'License 1, License 2',
    awards: 'Award 1, Award 2',
    milestones: 'Milestone 1, Milestone 2',
    previousInvestments: 'Investment 1, Investment 2',
    legalStatus: 'Legal',
    pastViolations: 'None',
    certificationExpiryDates: '01-01-2023',
    partneredStartups: 'Startup 1, Startup 2',
    collaborations: 'Collaboration 1, Collaboration 2',
    followerCount: '1000',
    coinBalance: '100',
    redeemableVouchers: 'Voucher 1, Voucher 2',
    transactionHistory: 'Transaction 1, Transaction 2',
    digitalSignature: 'Signature',
    expiryDate: '01-01-2025',
    dynamicUpdateLink: 'https://example.com/update'
  });

  const dapRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => dapRef.current,
  });

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

        const dapData = {
          profilePicture: 'https://via.placeholder.com/100',
          name: formData.startupName,
          dapId: 'DAP123456789',
          qrCodeLink: 'https://example.com',
          category: formData.industry,
          specialization: formData.sector,
          contactDetails: formData.services,
          location: formData.udyogAadhaar,
          complianceStatus: formData.natureOfEntity,
          interest: formData.interest,
        };

        navigate("/startup/dap", { state: { dapData } });
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
      }
    }
  };


  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleUploadPicture = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      logo: file,
    });
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
                      handleUploadPicture={handleUploadPicture}
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
      {isRegistered && (
        <>
          <DAP data={dapData} ref={dapRef} />
          <Button onClick={handlePrint} mt={4}>Download DAP as PDF</Button>
        </>
      )}
    </ChakraProvider>
  );
}

export default StartupRegistration;