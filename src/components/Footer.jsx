import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 8,
        mt: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 3,
                color: '#fff'
              }}
            >
              Kiwi Escape Tours
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8
              }}
            >
              86 Newlands Road Newlands
              <br />
              Wellington, New Zealand
              <br />
              info@kiwiescape.co.nz
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 3,
                color: '#fff'
              }}
            >
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              {[
                { icon: <InstagramIcon />, url: 'https://www.instagram.com/kiwi_escape_tours/' },
                { icon: <FacebookIcon />, url: 'https://www.facebook.com/share/15XD4xy6p9/?mibextid=wwXIfr' },
                { icon: <XIcon />, url: 'https://x.com/KiwiEscapeTours' },
                { icon: <LinkedInIcon />, url: '#' },
                { icon: <YouTubeIcon />, url: 'https://youtube.com/@kiwiescapetours?si=RS667PBLDCHfW8Gy' },
                { icon: <FaTiktok />, url: 'https://www.tiktok.com/@kiwiescapetours?_t=ZS-8toQOVO5jSJ&_r=1' }
              ].map((social, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    '&:hover': {
                      color: '#fff',
                      transform: 'translateY(-3px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.5)'
          }}
        >
          © {new Date().getFullYear()} Kiwi Escape Tours. All rights reserved.
          <br />
          <Typography 
            component="span" 
            sx={{ 
              display: 'block',
              mt: 1,
              fontSize: '0.8rem',
              opacity: 0.7
            }}
          >
            Developed by OpenLabs Research Limited
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;