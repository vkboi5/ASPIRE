import { Box, useColorModeValue, IconButton } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import SidebarContent from "./SidebarContent";

// FUNCTIONS

function Sidebar(props) {
  // to check for active links and opened collapses
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";

  const { logoText, routes, sidebarVariant } = props;

  //  Chakra Color Mode
  const opaqueBg = useColorModeValue("white", "gray.700");
  const transparentBg = "none";
  const sidebarBg = sidebarVariant === "opaque" ? opaqueBg : transparentBg;

  const sidebarRadius = sidebarVariant === "opaque" ? "16px" : "0px";
  const sidebarMargins = sidebarVariant === "opaque" ? "16px 0px 16px 16px" : "0px";

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={toggleSidebar}
        position="fixed"
        top="80px"  // Adjusted to lower the button
        left="20px"
        zIndex="1000"
      />
      {isOpen && (
        <Box display={{ sm: "none", xl: "block" }} position="fixed" top="120px">
          <Box
            bg={sidebarBg}
            transition={variantChange}
            w="260px"
            maxW="260px"
            ms={{ 
              sm: "16px",
            }}
            my={{
              sm: "16px",
            }}
            h="calc(100vh - 32px)"
            ps="20px"
            pe="20px"
            m={sidebarMargins}
            borderRadius={sidebarRadius}
            overflowY="auto"
          >
            <SidebarContent
              routes={routes}
              logoText={"AYUSH PORTAL"}
              display="none"
              sidebarVariant={sidebarVariant}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Sidebar;