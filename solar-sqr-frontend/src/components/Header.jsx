import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../assets/logo.png';

const Header = () => {
  const navItems = ['Our Offerings', 'Solar Solutions', 'Our Presence', 'Blog', 'More'];
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const offerings = [
    { label: 'Home', link: '/homes' },
    { label: 'Commercial', link: '/commercial' },
    { label: 'Housing Societies', link: '/housing-society' },
  ];

  if (!isAtTop) return null; // Hide header when not at top

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingY: '12px',
          paddingX: { xs: 3, md: 8 },
          minHeight: '80px',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            src={Logo}
            alt="SolarSquare Logo"
            style={{
              height: '54px',
              marginLeft: '200px',
              cursor: 'pointer',
            }}
          />
        </Link>

        {/* Navigation and CTA */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1,
            marginLeft: '64px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '60px',
            }}
          >
            {navItems.map((item) =>
              item === 'Our Offerings' ? (
                <Box
                  key={item}
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                  sx={{
                    position: 'relative',
                    fontSize: '20px',
                    color: '#0B131F',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    padding: '4px 6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Our Offerings
                    <ExpandMoreIcon sx={{ fontSize: 18 }} />
                  </Box>
                  {openDropdown && (
                    <Box
                      onMouseEnter={() => setOpenDropdown(true)}
                      onMouseLeave={() => setOpenDropdown(false)}
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0px 0px 12px 0px #0000001F',
                        padding: '10px 8px',
                        width: '12rem',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 10,
                        gap: '10px',
                      }}
                    >
                      {offerings.map((option) => (
                        <Link
                          key={option.label}
                          to={option.link}
                          style={{
                            backgroundColor: '#F5F8FD',
                            borderRadius: '8px',
                            padding: '8px',
                            color: '#2C3045',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '17px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {option.label}
                        </Link>
                      ))}
                    </Box>
                  )}
                </Box>
              ) : (
                <Box
                  key={item}
                  sx={{
                    fontSize: '20px',
                    color: '#0B131F',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    padding: '4px 6px',
                    cursor: 'pointer',
                  }}
                >
                  {item}
                </Box>
              )
            )}
          </Box>

          {/* CTA Button */}
          <Box
            component={Link}
            to="/go-solar"
            sx={{
              background: 'linear-gradient(97.83deg, #101F9D 6.22%, #11111C 87.68%)',
              color: 'white',
              px: 3,
              py: 1,
              borderRadius: '50px',
              fontSize: 20,
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Sign up for free electricity →
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
