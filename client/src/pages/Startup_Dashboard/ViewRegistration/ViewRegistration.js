import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import routes from "../routes.js";
import theme from "../../../utils/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
function ViewRegistration(props) {
  const { ...rest } = props;
  const [formData, setFormData] = useState(null);
  const startupName = "Healtycure"; // Replace with the actual startup name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://aspirebackend-gywyy55s.b4a.run/api/startup/${startupName}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching registration data:", error);
      }
    };

    fetchData();
  }, [startupName]);

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
              bg={"gray.50"}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Your Registration Details</Heading>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={"white"}
                  boxShadow={"lg"}
                  p={8}
                >
                  {!formData ? (
                    <Text>Loading...</Text>
                  ) : (
                    <Stack spacing={4}>
                      <FormControl id="startupName">
                        <FormLabel>Startup Name</FormLabel>
                        <Input type="text" value={formData.startupName} isReadOnly />
                      </FormControl>

                      <FormControl id="fundingStatus">
                        <FormLabel>Funding Status</FormLabel>
                        <Input type="text" value={formData.fundingStatus} isReadOnly />
                      </FormControl>

                      <FormControl id="description">
                        <FormLabel>Brief Description</FormLabel>
                        <Input type="text" value={formData.description} isReadOnly />
                      </FormControl>

                      <FormControl id="industry">
                        <FormLabel>Industry</FormLabel>
                        <Input type="text" value={formData.industry} isReadOnly />
                      </FormControl>

                      <FormControl id="sector">
                        <FormLabel>Sector</FormLabel>
                        <Input type="text" value={formData.sector} isReadOnly />
                      </FormControl>

                      <FormControl id="services">
                        <FormLabel>Services</FormLabel>
                        <Input type="text" value={formData.services} isReadOnly />
                      </FormControl>

                      <FormControl id="udyogAadhaar">
                        <FormLabel>UDYOG AADHAAR</FormLabel>
                        <Input type="text" value={formData.udyogAadhaar} isReadOnly />
                      </FormControl>

                      <FormControl id="natureOfEntity">
                        <FormLabel>Nature of Entity</FormLabel>
                        <Input type="text" value={formData.natureOfEntity} isReadOnly />
                      </FormControl>

                      <FormControl id="interest">
                        <FormLabel>Interest</FormLabel>
                        <Input type="text" value={formData.interest} isReadOnly />
                      </FormControl>
                    </Stack>
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

export default ViewRegistration;