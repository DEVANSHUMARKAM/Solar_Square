import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = () => {
  const offerings = [
    { label: 'Home', link: '/homes' },
    { label: 'Commercial', link: '/commercial' },
    { label: 'Housing Societies', link: '/housing-society' },
  ];

  const solarOptions = [
    { label: 'Off-grid Solar', link: '/off-grid-solar' },
    { label: 'On-grid Solar', link: '/on-grid-solar' },
  ];

  const [hoverOfferings, setHoverOfferings] = useState(false);
  const [hoverSolar, setHoverSolar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileSolarOpen, setMobileSolarOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  let offeringsTimeout;
  let solarTimeout;

  const handleOfferingsEnter = () => {
    clearTimeout(offeringsTimeout);
    setHoverOfferings(true);
  };
  const handleOfferingsLeave = () => {
    offeringsTimeout = setTimeout(() => setHoverOfferings(false), 200);
  };
  const handleSolarEnter = () => {
    clearTimeout(solarTimeout);
    setHoverSolar(true);
  };
  const handleSolarLeave = () => {
    solarTimeout = setTimeout(() => setHoverSolar(false), 200);
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 8 } }}>
          <Box component={Link} to="/">
            <img src={Logo} alt="SolarSquare Logo" style={{ height: '54px', cursor: 'pointer' }} />
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '40px' }}>
            <Box
              onMouseEnter={handleOfferingsEnter}
              onMouseLeave={handleOfferingsLeave}
              sx={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: 18 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                Our Offerings <ExpandMoreIcon sx={{ fontSize: 18 }} />
              </Box>
              {hoverOfferings && (
                <Box sx={{
                  position: 'absolute', top: '100%', left: 0, background: '#fff',
                  boxShadow: 2, borderRadius: 1, mt: 1, zIndex: 10
                }}>
                  {offerings.map(item => (
                    <Box
                      key={item.label}
                      component={Link}
                      to={item.link}
                      sx={{ px: 2, py: 1, color: '#333', textDecoration: 'none', display: 'block', whiteSpace: 'nowrap' }}
                    >
                      {item.label}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            <Box
              onMouseEnter={handleSolarEnter}
              onMouseLeave={handleSolarLeave}
              sx={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: 18 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                Solar Solutions <ExpandMoreIcon sx={{ fontSize: 18 }} />
              </Box>
              {hoverSolar && (
                <Box sx={{
                  position: 'absolute', top: '100%', left: 0, background: '#fff',
                  boxShadow: 2, borderRadius: 1, mt: 1, zIndex: 10
                }}>
                  {solarOptions.map(item => (
                    <Box
                      key={item.label}
                      component={Link}
                      to={item.link}
                      sx={{ px: 2, py: 1, color: '#333', textDecoration: 'none', display: 'block', whiteSpace: 'nowrap' }}
                    >
                      {item.label}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            {['Our Presence', 'Blog', 'More'].map(item => (
              <Box key={item} sx={{ fontWeight: 600, fontSize: 18, cursor: 'pointer' }}>
                {item}
              </Box>
            ))}

            <Box
              component={Link}
              to="/go-solar"
              sx={{
                background: 'linear-gradient(97.83deg, #101F9D 6.22%, #11111C 87.68%)',
                color: 'white', px: 3, py: 1, borderRadius: '50px',
                fontSize: 18, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap'
              }}
            >
              Sign up for free electricity →
            </Box>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="top" open={mobileOpen} onClose={toggleDrawer}>
        <List>
          {/* Our Offerings with dropdown */}
          <ListItem button onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}>
            <ListItemText primary="Our Offerings" />
            {mobileOfferingsOpen ? <ExpandLess /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={mobileOfferingsOpen} timeout="auto" unmountOnExit>
            {offerings.map(item => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.link}
                onClick={toggleDrawer}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </Collapse>

          {/* Solar Solutions with dropdown */}
          <ListItem button onClick={() => setMobileSolarOpen(!mobileSolarOpen)}>
            <ListItemText primary="Solar Solutions" />
            {mobileSolarOpen ? <ExpandLess /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={mobileSolarOpen} timeout="auto" unmountOnExit>
            {solarOptions.map(item => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.link}
                onClick={toggleDrawer}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </Collapse>

          {/* Other items */}
          {['Our Presence', 'Blog', 'More'].map(item => (
            <ListItem button key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}

          {/* CTA */}
          <ListItem button component={Link} to="/go-solar" onClick={toggleDrawer}>
            <ListItemText primary="Sign up for free electricity →" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
