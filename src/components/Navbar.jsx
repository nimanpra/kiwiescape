import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '@fontsource/montserrat';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'HOME', path: '/' },
    { text: 'ABOUT', path: '/about' },
    { text: 'PACKAGES', path: '/packages' },
    { text: 'BOOK ONLINE', path: '/book-online' }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: trigger ? 'rgba(0, 166, 180, 0.95)' : 'rgba(0, 166, 180, 0.8)',
        backdropFilter: 'blur(8px)',
        boxShadow: trigger ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
        width: '100%',
        maxWidth: '100%',
        margin: 0,
        px: { xs: 1, md: 6 },
        py: { xs: 0.5, md: 1 },
        transition: 'all 0.3s ease'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          component={Link} 
          to="/" 
          sx={{ 
            color: '#FFFFFF', 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
            fontWeight: 400,
            letterSpacing: '2px',
            fontFamily: "'Times New Roman', serif",
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 0.9
            },
            '& span': {
              display: { xs: 'block', sm: 'block', md: 'inline' },
              lineHeight: { xs: '1.2', sm: '1.2', md: 'inherit' },
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700
            }
          }}
        >
          <Box
            component="img"
            src="/images/logo.png"
            alt="Kiwi Escape Tours Logo"
            sx={{
              height: { xs: '40px', md: '60px' },
              width: 'auto'
            }}
          />
          <span>Kiwi Escape Tours</span>
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 4 }}>
          {navItems.map((item) => (
            <Button 
              key={item.text}
              component={Link} 
              to={item.path} 
              sx={{ 
                color: '#FFFFFF', 
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '1.5px',
                position: 'relative',
                padding: '6px 0',
                '&::after': {
                  content: "''",
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: 0,
                  height: '2px',
                  backgroundColor: '#FFE5CC',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)'
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                  '&::after': {
                    width: '100%'
                  }
                }
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Mobile Navigation */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' }, ml: 2 }}
        >
          <MenuIcon sx={{ fontSize: '2rem' }} />
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              backgroundColor: 'rgba(0, 166, 180, 0.95)',
              backdropFilter: 'blur(8px)'
            },
          }}
        >
          <Box sx={{ textAlign: 'right', p: 1 }}>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Button
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    width: '100%',
                    color: '#FFFFFF',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: '1rem',
                    letterSpacing: '1.5px',
                    py: 2,
                    textAlign: 'left',
                    pl: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.text}
                </Button>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;