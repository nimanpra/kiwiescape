import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const PackageDetails = ({ duration, locations, maxPeople, price }) => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: 2,
        p: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%'
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2rem',
          mb: 3,
          color: '#000000'
        }}
      >
        Package Details
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <AccessTimeIcon sx={{ color: '#000000' }} />
        <Typography sx={{ color: '#000000' }}>{duration}</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <PlaceIcon sx={{ color: '#000000' }} />
        <Typography sx={{ color: '#000000' }}>{locations}</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <GroupIcon sx={{ color: '#000000' }} />
        <Typography sx={{ color: '#000000' }}>Maximum {maxPeople} guests</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <LocalOfferIcon sx={{ color: '#000000' }} />
        <Typography 
          sx={{ 
            color: '#000000',
            fontSize: '1.1rem',
            fontWeight: 400
          }}
        >
          From NZD ${typeof price === 'number' ? new Intl.NumberFormat().format(price) : new Intl.NumberFormat().format(price.replace(/[^0-9]/g, ''))}
        </Typography>
      </Box>

      <Button
        component={Link}
        to="/book-online"
        variant="contained"
        fullWidth
        sx={{
          bgcolor: '#00A6B4',
          color: '#FFFFFF',
          py: 1.5,
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: '#008C99',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }
        }}
      >
        BOOK NOW
      </Button>
    </Box>
  );
};

export default PackageDetails;