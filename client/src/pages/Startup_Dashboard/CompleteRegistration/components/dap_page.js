import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import DAP from './DAP';
import { useReactToPrint } from 'react-to-print';

const DAPPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dapData = location.state?.dapData;

  const dapRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => dapRef.current,
  });

  if (!dapData) {
    return (
      <Box>
        <p>No DAP data available. Please complete the registration first.</p>
        <Button onClick={() => navigate('/startup/registration')}>Go to Registration</Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button onClick={handlePrint} mt={4}>Download DAP as PDF</Button>
      <DAP data={dapData} ref={dapRef} />
    </Box>
  );
};

export default DAPPage;