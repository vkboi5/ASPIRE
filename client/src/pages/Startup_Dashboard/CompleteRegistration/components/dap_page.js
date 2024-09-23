import React, { useEffect, useState } from 'react';
import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DAP from './DAP';
import { useReactToPrint } from 'react-to-print';

const DAPPage = () => {
  const navigate = useNavigate();
  const dapRef = React.useRef();
  const [dapData, setDapData] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.email) {
      const storedDapData = JSON.parse(localStorage.getItem("dapData"));
      if (storedDapData && storedDapData.email === userInfo.email) {
        setDapData(storedDapData);
      }
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => dapRef.current,
  });

  if (!dapData) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box textAlign="center">
          <p>No DAP data available. Please complete the application first.</p>
          <Button onClick={() => navigate('/startup/startupregistration')} mt={4}>Go to Application</Button>
        </Box>
      </Flex>
    );
  }

  return (
    <Box>
      <DAP data={dapData} ref={dapRef} />
    </Box>
  );
};

export default DAPPage;