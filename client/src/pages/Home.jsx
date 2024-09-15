import {Container,Box,Text,Tab,TabList,TabPanel,TabPanels,Tabs,} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login, Signup } from "../components";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      console.log("User is not logged in. Redirecting to /login");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container maxWidth="5xl">
     
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="https://img.freepik.com/free-vector/dark-blue-abstract-background_1378-176.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="none"
      ></Box>
      <Box
        URL={"https://img.freepik.com/free-vector/dark-blue-abstract-background_1378-176.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid"}
        w="65%"
        margin="auto"
        backgrou=""
        border=""
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" marginTop="5rem">
            <Tab background="#45474B" textColor={"white"} padding="10px" margin="6px">
              Login
            </Tab>
            <Tab background="#45474B" textColor={"white"} padding="10px" margin="6px">
              Sign Up
            </Tab>
      </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
