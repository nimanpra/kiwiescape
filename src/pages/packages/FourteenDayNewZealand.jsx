import { Box, Container, Typography, Grid, Button, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  '/images/legendary1.jpg',
  '/images/legendary2.jpg',
  '/images/legendary3.jpg'
];

const itineraryData = [
  {
    day: 1,
    location: 'Christchurch',
    description: 'Welcome to New Zealand! Your adventure begins in Christchurch, the vibrant gateway to the South Island. Known for its beautiful gardens, modern architecture, and cultural resilience, you\'ll explore highlights such as the Botanic Gardens, Canterbury Museum, and the Christchurch Tram. Visit the Cardboard Cathedral and the 185 Empty White Chairs memorial before settling into your accommodation.',
    accommodation: 'Beating Heart of Christchurch or similar',
    activities: [
      'Christchurch Botanic Gardens',
      'Canterbury Museum',
      'Christchurch Tram Ride',
      'Cardboard Cathedral & 185 Empty White Chairs'
    ]
  },
  {
    day: 2,
    location: 'Christchurch → Lake Tekapo',
    description: 'Set off on a scenic drive towards Lake Tekapo, stopping at Rakaia Gorge for breathtaking photos. Upon arrival, visit the famous Church of the Good Shepherd and enjoy panoramic views from Mt. John Observatory, home to some of the clearest night skies in the world.',
    accommodation: 'Colonial Motel or similar',
    activities: [
      'Rakaia Gorge photo stop',
      'Church of the Good Shepherd',
      'Mt. John Observatory'
    ]
  },
  {
    day: 3,
    location: 'Christchurch → Twizel',
    description: 'Today\'s journey takes you through picturesque landscapes as you travel towards Twizel, a charming town known for its proximity to Aoraki/Mount Cook National Park. Enjoy stunning alpine scenery and relax in Twizel for the evening.',
    accommodation: 'Local lodge or similar',
    activities: []
  },
  {
    day: 4,
    location: 'Twizel → Milford Sound → Queenstown',
    description: 'Depart early for Milford Sound, one of New Zealand\'s most famous fjords. Stop at Eglinton Valley, Mirror Lakes, and The Chasm before embarking on a breathtaking scenic cruise through the fjord. Later, continue to the adventure capital of New Zealand, Queenstown.',
    accommodation: 'Ramada Suites by Wyndham Queenstown Remarkables Park or similar',
    activities: [
      'Milford Sound Scenic Cruise',
      'Stops at Eglinton Valley, Mirror Lakes, and The Chasm'
    ]
  },
  {
    day: 5,
    location: 'Queenstown',
    description: 'Explore Queenstown with thrilling activities. Take the Skyline Gondola and Luge Rides, visit the historic Arrowtown, and relax by Lake Wakatipu. A scenic drive to Glenorchy offers postcard-perfect views.',
    accommodation: 'Ramada Suites by Wyndham Queenstown Remarkables Park or similar',
    activities: [
      'Skyline Gondola & Luge Rides',
      'Arrowtown historic visit',
      'Glenorchy scenic drive'
    ]
  },
  {
    day: 6,
    location: 'Queenstown → Franz Josef',
    description: 'A scenic drive to Franz Josef Glacier takes you through the stunning West Coast. Explore the glacier valley and take an optional helicopter tour for breathtaking aerial views.',
    accommodation: 'Alpine Glacier Motel or similar',
    activities: [
      'Franz Josef Glacier exploration',
      'Optional helicopter tour'
    ]
  },
  {
    day: 7,
    location: 'Queenstown → Wellington (Flight)',
    description: 'Fly from Queenstown to Wellington, New Zealand\'s capital. Visit the Museum of New Zealand Te Papa, ride the Wellington Cable Car, and enjoy panoramic views from the Botanical Gardens.',
    accommodation: 'Ramada by Wyndham Wellington Taranaki Street or similar',
    activities: [
      'Te Papa Museum',
      'Wellington Cable Car',
      'Botanical Gardens'
    ]
  },
  {
    day: 8,
    location: 'Wellington → Taupo',
    description: 'Take a scenic drive to Taupo, stopping at the stunning Huka Falls for a thrilling jet boat ride. Stroll along the shores of Lake Taupo, a caldera lake formed by one of the largest volcanic eruptions in history.',
    accommodation: 'Lakeland Resort Taupo or similar',
    activities: [
      'Huka Falls visit & jet boat ride',
      'Stroll along Lake Taupo'
    ]
  },
  {
    day: 9,
    location: 'Taupo → Rotorua',
    description: 'A short drive brings you to Rotorua, a geothermal wonderland. Visit Wai-O-Tapu Thermal Wonderland to see bubbling mud pools and steaming geysers. Experience a Mitai Māori Village cultural performance and hangi dinner, followed by an enchanting Redwood Tree Walk.',
    accommodation: 'Pure Motel or similar',
    activities: [
      'Wai-O-Tapu Thermal Wonderland',
      'Mitai Māori Village Tour & Hangi Dinner',
      'Redwood Tree Walk'
    ]
  },
  {
    day: 10,
    location: 'Rotorua → Matamata (Hobbiton)',
    description: 'Head to Matamata for a magical Hobbiton Movie Set Tour, where you\'ll step into the world of Middle-earth. Enjoy a lunch at The Green Dragon Inn, then explore the charming farmlands.',
    accommodation: 'Norton Motel or similar',
    activities: [
      'Hobbiton Movie Set Tour',
      'Lunch at The Green Dragon Inn'
    ]
  },
  {
    day: 11,
    location: 'Matamata → Waitomo → Hamilton',
    description: 'Drive to Waitomo to explore the Glowworm Caves, an underground marvel filled with thousands of bioluminescent glowworms. Later, arrive in Hamilton and visit the serene Hamilton Gardens.',
    accommodation: 'Norton Motel or similar',
    activities: [
      'Waitomo Glowworm Caves tour',
      'Hamilton Gardens visit'
    ]
  },
  {
    day: 12,
    location: 'Hamilton → Auckland',
    description: 'Arrive in Auckland, New Zealand\'s largest city. Visit Maungawhau/Mount Eden, War Memorial Museum, Sky Tower, and Viaduct Harbour. Enjoy leisure time for shopping and exploring the Auckland Harbour Bridge.',
    accommodation: 'Imagine Beach Road or similar',
    activities: [
      'Maungawhau/Mount Eden',
      'War Memorial & Museum',
      'Sky Tower & Viaduct Harbour',
      'Auckland Harbour Bridge'
    ]
  },
  {
    day: 13,
    location: 'Auckland',
    description: 'Continue exploring Auckland with a free day to discover more of the city\'s attractions and hidden gems.',
    accommodation: 'Imagine Beach Road or similar',
    activities: []
  },
  {
    day: 14,
    location: 'Auckland (Departure)',
    description: 'Your incredible New Zealand adventure comes to an end. Transfer to Auckland Airport for your onward journey. Safe travels!',
    accommodation: null,
    activities: []
  }
];

const FourteenDayNewZealand = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box sx={{ bgcolor: '#F5FAFA', color: 'var(--text-dark)', minHeight: 'calc(100vh - 80px)' }}>
      {/* Hero Banner */}
      <Box
        sx={{
          width: '100%',
          height: '500px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
            zIndex: 1
          }
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`14 Day New Zealand Tour ${index + 1}`}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        ))}
        
        {/* Navigation Arrows */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            zIndex: 2
          }}
        >
          <Button
            onClick={handlePrevious}
            sx={{
              minWidth: '40px',
              height: '40px',
              borderRadius: '50%',
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.5)'
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </Button>
          <Button
            onClick={handleNext}
            sx={{
              minWidth: '40px',
              height: '40px',
              borderRadius: '50%',
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.5)'
              }
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            width: '100%',
            px: 4
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            14 Days New Zealand
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              opacity: 0.9
            }}
          >
            Experience the legendary landscapes from Fiordland to Auckland
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Package Details */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontFamily: "'Cormorant Garamond', serif",
                mb: 4,
                color: '#000000',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '60px',
                  height: '3px',
                  backgroundColor: 'var(--gold)'
                }
              }}
            >
              Tour Overview
            </Typography>

            <Typography sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, color: '#000000' }}>
              Embark on a 14-day journey through New Zealand's most iconic landscapes and cultural experiences. From the geothermal wonders of Rotorua to the majestic peaks of Queenstown, this comprehensive tour showcases the very best of both islands.
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalOfferIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Transport: Private Vehicle</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Min Age: 15 years</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.8rem',
                  fontFamily: "'Cormorant Garamond', serif",
                  mb: 3,
                  color: '#000000'
                }}
              >
                Itinerary Highlights
              </Typography>
              
              {itineraryData.map((day, index) => (
                <Accordion 
                  key={index}
                  sx={{
                    mb: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      margin: '0 0 16px 0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'var(--primary-color)' }} />}
                    sx={{
                      backgroundColor: 'white',
                      '&.Mui-expanded': {
                        minHeight: '48px',
                        borderBottom: '1px solid rgba(0,0,0,0.12)'
                      }
                    }}
                  >
                    <Typography 
                      sx={{ 
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: 'var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      Day {day.day} • {day.location}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'white', p: 3 }}>
                    <Typography sx={{ mb: 2, color: '#000000', lineHeight: 1.6 }}>
                      {day.description}
                    </Typography>
                    
                    {day.accommodation && (
                      <Box sx={{ mb: 2 }}>
                        <Typography 
                          sx={{ 
                            fontWeight: 600,
                            color: 'var(--primary-color)',
                            mb: 1
                          }}
                        >
                          Accommodation:
                        </Typography>
                        <Typography sx={{ color: '#000000' }}>
                          {day.accommodation}
                        </Typography>
                      </Box>
                    )}
                    
                    {day.activities.length > 0 && (
                      <Box>
                        <Typography 
                          sx={{ 
                            fontWeight: 600,
                            color: 'var(--primary-color)',
                            mb: 1
                          }}
                        >
                          Included Activities:
                        </Typography>
                        <List sx={{ pl: 2 }}>
                          {day.activities.map((activity, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                              <ListItemIcon sx={{ minWidth: '32px' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#000000 !important', fontSize: '1.1rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={activity}
                                sx={{
                                  m: 0,
                                  '& .MuiListItemText-primary': {
                                    color: '#000000',
                                    fontSize: '1rem'
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.8rem',
                  fontFamily: "'Cormorant Garamond', serif",
                  mb: 4,
                  color: '#000000'
                }}
              >
                What to Pack
              </Typography>
              <Typography sx={{ color: '#000000', lineHeight: 1.8, fontSize: '1.1rem' }}>
                To make the most of your trip, we recommend packing comfortable walking shoes, weather-appropriate clothing, a camera to capture the breathtaking scenery, and an open mind ready for adventure.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.8rem',
                  fontFamily: "'Cormorant Garamond', serif",
                  mb: 4,
                  color: '#000000'
                }}
              >
                Included in the Package
              </Typography>
              <Grid container spacing={3}>
                {[
                  'Accommodation in top-rated hotels',
                  'Guided tours with experienced and knowledgeable guides',
                  'All transportation during the tour',
                  'Select meals featuring local cuisine',
                  'All entrance fees to attractions',
                  'Welcome and farewell dinners',
                  '24/7 tour support',
                  'Comprehensive travel insurance'
                ].map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 0.5,
                      minHeight: '24px',
                      p: 0,
                      '&:hover': {
                        bgcolor: 'rgba(0, 166, 180, 0.04)',
                        borderRadius: 1
                      }
                    }}>
                      <CheckCircleOutlineIcon sx={{ 
                        color: '#000000',
                        fontSize: '1.2rem',
                        mt: 0.3
                      }} />
                      <Typography 
                        sx={{ 
                          color: '#000000',
                          lineHeight: 1.4
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Booking Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                position: 'sticky',
                top: '100px',
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 2
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--primary-color)',
                    mb: 3
                  }}
                >
                  Package Details
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <AccessTimeIcon sx={{ color: 'var(--primary-color)' }} />
                    <Typography sx={{ color: '#000000' }}>14 Days</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <PlaceIcon sx={{ color: 'var(--primary-color)' }} />
                    <Typography sx={{ color: '#000000' }}>Auckland, Rotorua, Queenstown</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <GroupIcon sx={{ color: 'var(--primary-color)' }} />
                    <Typography sx={{ color: '#000000' }}>Max 12 people</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocalOfferIcon sx={{ color: 'var(--primary-color)' }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600
                      }}
                    >
                      $9,850
                    </Typography>
                  </Box>
                </Box>

                <Button
                  component={Link}
                  to="/book-online?package=legendary-new-zealand"
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: '#00A6B4',
                    color: '#FFFFFF',
                    py: 2,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#008C99',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FourteenDayNewZealand;