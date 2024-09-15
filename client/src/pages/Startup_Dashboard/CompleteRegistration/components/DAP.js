import React, { forwardRef } from 'react';
import {
  Box,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  Flex,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { QRCodeCanvas } from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';

const DAP = forwardRef(({ data }, ref) => {
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <Box p={8} bg="white" color="black" rounded="xl" boxShadow="lg" maxW="800px" mx="auto">
      <Button
        onClick={handlePrint}
        bg="pink.300"
        color="white"
        mb={4}
        _hover={{ bg: "pink.500" }}
      >
        Download as PDF
      </Button>
      <Box ref={ref} p={8} bg="white" color="black" rounded="xl" boxShadow="lg">
        <Stack spacing={4}>
          {/* Header Section */}
          <Flex justify="space-between" align="center">
            <Image
              src="https://via.placeholder.com/150" // Replace with your logo
              alt="Logo"
              boxSize="100px"
            />
            <Heading as="h1" size="lg">Digital Ayush Passport</Heading>
            <Image
              borderRadius="full"
              boxSize="100px"
              src={data.profilePicture}
              alt="Profile Picture"
            />
          </Flex>
          <Text textAlign="center" fontSize="lg" color="gray.500">Unique DAP ID: {data.dapId}</Text>
          <Flex justify="center">
            <QRCodeCanvas value={data.qrCodeLink} size={100} />
          </Flex>

          <Divider />

          {/* Basic Information */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="blue.500">Basic Information</Heading>
              <Text>Category: {data.category}</Text>
              <Text>Specialization: {data.specialization}</Text>
              <Text>Contact: {data.contactDetails}</Text>
              <Text>Location: {data.location}</Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Startup/Professional Information */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="green.500">Startup/Professional Information</Heading>
              <Text>Founding Date: {data.foundingDate}</Text>
              <Text>Registration Number: {data.registrationNumber}</Text>
              <Text>Certifications & Licenses: {data.certifications}</Text>
              <Text>Compliance Status: {data.complianceStatus}</Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Product/Service Portfolio */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="purple.500">Product/Service Portfolio</Heading>
              <Text>Products/Services: {data.productServiceListings}</Text>
              <Text>Certification Details: {data.certificationDetails}</Text>
              <Text>License Numbers: {data.licenseNumbers}</Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Achievements & Recognitions */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="orange.500">Achievements & Recognitions</Heading>
              <Text>Awards & Recognitions: {data.awards}</Text>
              <Text>Milestones: {data.milestones}</Text>
              <Text>Previous Investments: {data.previousInvestments}</Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Compliance & Legal Verification */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="red.500">Compliance & Legal Verification</Heading>
              <Text>Legal Status: {data.legalStatus}</Text>
              <Text>Past Violations: {data.pastViolations}</Text>
              <Text>Certification Expiry Dates: {data.certificationExpiryDates}</Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Investor/Partner Connections */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="teal.500">Investor/Partner Connections</Heading>
              <Text>Partnered Startups: {data.partneredStartups}</Text>
              <Text>Collaborations: {data.collaborations}</Text>
              <Text>Follower Count: {data.followerCount}</Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Coin & Wallet Information */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="cyan.500">Coin & Wallet Information</Heading>
              <Text>Coin Balance: {data.coinBalance}</Text>
              <Text>Redeemable Vouchers: {data.redeemableVouchers}</Text>
              <Text>Transaction History: {data.transactionHistory}</Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Additional Features */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Heading as="h3" size="md" color="pink.500">Additional Features</Heading>
              <Text>Digital Signature: {data.digitalSignature}</Text>
              <Text>Expiry Date: {data.expiryDate}</Text>
              <Text>Dynamic Update Link: {data.dynamicUpdateLink}</Text>
            </GridItem>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
});

export default DAP;