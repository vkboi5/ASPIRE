import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import Logo from '../../../../assets/logo2.png';
import BurgerIcon from '../../assets/svg/BurgerIcon';
import Sidebar from '../Nav/Sidebar';
import Backdrop from '../Elements/Backdrop';

// Example notifications and user data
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Check authentication on component mount
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Update isAuthenticated state
    setIsAuthenticated(false);
    // Redirect to home or any other desired route after logout
    navigate('/');
  };

  const getSender = (user, users) => {
    return users[0].name === user.name ? users[1].name : users[0].name;
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: '60px' } : { height: '80px' }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img
              src="https://cdn.expresspharma.in/wp-content/uploads/2019/07/23170458/Ministry-of-AYUSH-logo-1-3.jpg"
              width="80"
              height="10"
              alt="AYUSH Logo"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={Logo} alt="QDRA Logo" width="160" height="160" />
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: '10px 15px' }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: '10px 15px' }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Features
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: '10px 15px' }}
                to="eligibility"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Eligibility Criteria
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: '10px 15px' }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <a
                href="https://creator.us.uneeq.io/try/7254fa33-6a73-4102-9c95-52d36f4641e7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual mentor
              </a>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {isAuthenticated ? (
              <li className="semiBold font15 pointer">
                <button
                  onClick={handleLogout}
                  className="h-10 text-[#FFC700] w-24 rounded-lg text-sm font-semibold border-solid"
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
                <li className="semiBold font15 pointer">
                  <button
                    onClick={handleLogin}
                    className="h-10 text-[#000] bg-white w-24 rounded-lg text-sm font-semibold border-solid shadow-md"
                  >
                    Log In
                  </button>
                </li>
                
              </>
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
        </NavInner>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
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

export default TopNavbar;
