import { Flex, Grid, useColorModeValue, ChakraProvider, Button, Icon, Box, Text, HStack, Badge } from "@chakra-ui/react";
import { FaCube, FaPenFancy, FaCoins } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import CoinModal from "../InAppMarketplace/InAppCoins"; // Import the CoinModal component
import avatar4 from "../assets/img/avatars/avatar4.png";
import ProfileBgImage from "../assets/img/ProfileBackground.png";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Conversations from "./components/Conversations";
import Projects from "./components/Projects";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import theme from "../../../utils/theme/theme";

function Profile(props) {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const { ...rest } = props;
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Use Chakra UI's useDisclosure hook
  const [coins, setCoins] = useState(0); // State to store user's coins
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    // Fetch user's coin data
    const fetchCoins = async () => {
      try {
        const response = await axios.get('/api/user/coins'); // Adjust the endpoint as needed
        setCoins(response.data.coins);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoins();
  }, []);

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        logoText={"AYUSH PORTAL"}
        display="none"
        sidebarVariant={sidebarVariant}
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
            <Flex direction="column">
              <Header
                backgroundHeader={ProfileBgImage}
                backgroundProfile={bgProfile}
                avatarImage={avatar4}
                name={userInfo.name}
                email={userInfo.email}
                tabs={[
                  {
                    name: "OVERVIEW",
                    icon: <FaCube w="100%" h="100%" />,
                  },
                  {
                    name: "TEAMS",
                    icon: <IoDocumentsSharp w="100%" h="100%" />,
                  },
                  {
                    name: "PROJECTS",
                    icon: <FaPenFancy w="100%" h="100%" />,
                  },
                ]}
              />
              <Button
                backgroundColor="yellow.200"
                variant="solid"
                onClick={onOpen}
                mb={4}
                width={"175px"} // Adjust width to fit content
                px={4} // Add padding for better spacing
              >
                <HStack spacing={2} alignItems="center">
                  <Icon as={FaCoins} color="yellow.500" boxSize={5} />
                  <Text fontSize="lg" fontWeight="bold">My Coins:</Text>
                  <Badge colorScheme="yellow" fontSize="lg">{100}</Badge>
                </HStack>
              </Button>
              <Grid
                templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }}
                gap="22px"
              >
                <PlatformSettings
                  title={"Platform Settings"}
                  subtitle1={"ACCOUNT"}
                  subtitle2={"APPLICATION"}
                />
                <ProfileInformation
                  title={"Profile Information"}
                  description={
                    "Hi, I’m " + userInfo.name + ", Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                  }
                  name={userInfo.name}
                  mobile={userInfo.mobile || "+91 9876543210"}
                  email={userInfo.email}
                  location={userInfo.location || "India"}
                />
                <Conversations title={"Conversations"} />
              </Grid>
              <Projects
                title={"Projects"}
                description={"Architects design houses"}
              />
            </Flex>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
      <CoinModal isOpen={isOpen} onClose={onClose} /> {/* Add the CoinModal component */}
    </ChakraProvider>
  );
}

export default Profile;