import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, Text, useToast } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import Logo from '../../../../assets/logo2.png';
import MinistryLogo from '../../../../assets/Ministry AYUSH Logo.png';
import BurgerIcon from '../../assets/svg/BurgerIcon';
import Sidebar from '../Nav/Sidebar';
import Backdrop from '../Elements/Backdrop';
import AuthApi from '../../../../utils/Api/Auth';
import AuthContext from '../../../../utils/Api/AuthContext';

const notifications = [
  {
    _id: '1',
    chat: [
      {
        isGroupChat: false,
        chatName: 'Chat Name',
        users: [{ name: 'User' }],
      },
    ],
  },
];
const user = { name: 'Current User' };

const TopNavbar = () => {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [notification, setNotification] = useState(notifications);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showNetworks, setShowNetworks] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await AuthApi.logout();
      logout();
      toast({
        title: "Successfully Logged out",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      toast({
        title: "Logout failed",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  const getSender = (user, users) => {
    return users[0].name === user.name ? users[1].name : users[0].name;
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate"
        style={y > 100 ? { height: '60px' } : { height: '80px' }}
      >
        <NavInner className="container flexSpaceCenter">
          <ScrollLink className="pointer flexNullCenter" to="home" smooth={true}>
            <RouterLink to="/">
              <img
                src={MinistryLogo}
                width="80"
                height="10"
                alt="AYUSH Logo"
              />
            </RouterLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <RouterLink to="/">
              <img src={Logo} alt="QDRA Logo" width="160" height="160" />
            </RouterLink>
          </ScrollLink>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <RouterLink to="/" style={{ padding: '10px 15px' }}>
                Home
              </RouterLink>
            </li>
            <DropdownWrapper onMouseEnter={() => setShowAboutUs(true)} onMouseLeave={() => setShowAboutUs(false)}>
              <li className="semiBold font15 pointer">
                <div style={{ padding: '10px 15px' }}>
                  About Us
                </div>
                {showAboutUs && (
                  <DropdownMenu>
                    <RouterLink to="/startup-india-initiative">Startup India Initiative</RouterLink>
                    <RouterLink to="/apply-startup-india-logo">Apply for Startup India Logo</RouterLink>
                    <RouterLink to="/newsletter">Newsletter</RouterLink>
                    <RouterLink to="/faqs">FAQs</RouterLink>
                    <RouterLink to="/startup-india-action-plan">Startup India Action Plan</RouterLink>
                    <RouterLink to="/contact-us">Contact Us</RouterLink>
                    <RouterLink to="/evolution-startup-india">Evolution Of Startup India | 5-Year Report</RouterLink>
                    <RouterLink to="/startup-india-way-ahead">Startup India | Way Ahead</RouterLink>
                  </DropdownMenu>
                )}
              </li>
            </DropdownWrapper>
            <DropdownWrapper onMouseEnter={() => setShowResources(true)} onMouseLeave={() => setShowResources(false)}>
              <li className="semiBold font15 pointer">
                <div style={{ padding: '10px 15px' }}>
                  Resources
                </div>
                {showResources && (
                  <DropdownMenu>
                    <RouterLink to="/online-learning">Online Learning</RouterLink>
                    <RouterLink to="/partnered-services">Partnered Services for Registered Startups</RouterLink>
                    <RouterLink to="/market-research-reports">Market Research Reports</RouterLink>
                    <RouterLink to="/intellectual-property-rights">Intellectual Property Rights</RouterLink>
                    <RouterLink to="/startup-idea-bank">Startup Idea Bank</RouterLink>
                    <RouterLink to="/startup-india-blogs">Startup India Blogs</RouterLink>
                    <RouterLink to="/startup-guide-book">Startup Guide Book</RouterLink>
                    <RouterLink to="/explore-more">Explore More</RouterLink>
                  </DropdownMenu>
                )}
              </li>
            </DropdownWrapper>
            <DropdownWrapper onMouseEnter={() => setShowNetworks(true)} onMouseLeave={() => setShowNetworks(false)}>
              <li className="semiBold font15 pointer">
                <div style={{ padding: '10px 15px' }}>
                  Networks
                </div>
                {showNetworks && (
                  <DropdownMenu>
                    <RouterLink to="/networks">Networks</RouterLink>
                    <RouterLink to="/networks">Startups</RouterLink>
                    <RouterLink to="/networks">Mentors</RouterLink>
                    <RouterLink to="/networks">Incubators</RouterLink>
                    <RouterLink to="/networks">Investors</RouterLink>
                    <RouterLink to="/networks">Government Bodies</RouterLink>
                  </DropdownMenu>
                )}
              </li>
            </DropdownWrapper>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {isAuthenticated ? (
              <li className="semiBold font15 pointer">
                <button
                  onClick={handleLogout}
                  className="h-10 text-[#000] bg-white w-24 rounded-lg text-sm font-semibold border-solid shadow-md"
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li className="semiBold font15 pointer">
                <button
                  onClick={handleLogin}
                  className="h-10 text-[#000] bg-white w-24 rounded-lg text-sm font-semibold border-solid shadow-md"
                >
                  Log In
                </button>
              </li>
            )}
          </UlWrapperRight>
          <Menu>
            <MenuButton p="1" className="notification-badge-container">
              <BellIcon fontSize="2xl" m="1" />
              {notification.length > 0 && (
                <span className="notification-badge">
                  {notification.length > 9 ? '9+' : notification.length}
                </span>
              )}
            </MenuButton>
            <MenuList>
              {!notification.length && <Text pl="2">No New Messages</Text>}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat[0]);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat[0].isGroupChat
                    ? `New Message in ${notif.chat[0].chatName}`
                    : `New Message from ${getSender(user, notif.chat[0].users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <UserMenuWrapper onMouseEnter={() => setShowUserMenu(true)} onMouseLeave={() => setShowUserMenu(false)}>
            <div className="pointer">
              <FaUserCircle className="user-icon" />
            </div>
            {showUserMenu && (
              <DropdownMenu>
                <RouterLink to="/view-profile">View Profile</RouterLink>
                <RouterLink to="/edit-profile">Edit Profile</RouterLink>
                <RouterLink to="/my-connections">My Connections</RouterLink>
                <RouterLink to="/notifications">Notifications</RouterLink>
                <RouterLink to="/settings">Settings</RouterLink>
                {isAuthenticated ? (
                    <RouterLink to="/" onClick={handleLogout}>Logout</RouterLink>
                  ) : (
                    <RouterLink to="/login" onClick={handleLogin}>Login</RouterLink>
                  )}
              </DropdownMenu>
            )}
          </UserMenuWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.nav`
  width: 100%; /* Full width without any margin */
  margin: 0; /* Removed margin */
  position: fixed;
  top: 0; /* Adjusted from top */
  left: 0;
  right: 0;
  z-index: 999;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2); /* Transparent background */
  backdrop-filter: blur(10px); /* Glassmorphism effect */
  border-radius: 0; /* No curved edges */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Border for glass effect */
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  position: absolute;
  background-color: white;
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  left: 0;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 200px; /* Adjusted width */

  a {
    color: black;
    padding: 8px 12px; /* Adjusted padding */
    text-decoration: none;
    font-size: 14px; /* Adjusted font size */
  }

  a:hover {
    background-color: #ddd;
  }
`;

const UserMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .user-icon {
    font-size: 24px;
    color: blue;
  }
`;

export default TopNavbar;