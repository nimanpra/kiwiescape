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
import PackageDetails from '../../components/PackageDetails';

const images = [
  '/images/northislandadventure-1.jpg',
  '/images/northislandadventure-2.jpg',
  '/images/northislandadventure-3.jpg',
  '/images/northislandadventure-4.jpg'
];

const itineraryData = [
  {
    day: 1,
    location: 'Auckland',
    description: 'Welcome to New Zealand! Your adventure of the volcanic North Island begins in Auckland – New Zealand\'s most populated city, fringed with beaches, harbours, volcanoes and farmland. You\'ll be met at the airport and transferred to your hotel, where you\'ll have a welcome meeting at 6 pm. After your meeting, get to know your group over dinner at a local bistro in the heart of the city, championing New Zealand producers.',
    accommodation: 'M Social or similar',
    activities: [
      'Airport Transfer',
      'Welcome Meeting',
      'Group Dinner'
    ]
  },
  {
    day: 2,
    location: 'Auckland (Waiheke Island)',
    description: 'Leave the bustle of the big city behind and head offshore to Waiheke Island, famed for its sandy beaches and local wine. Board a ferry from Auckland and spend the day sipping your way around the island, stopping off at three unique wineries to learn about their production methods and taste their wines. Enjoy an included lunch on the island and scenic drives with photo opportunities.',
    accommodation: 'M Social or similar',
    activities: [
      'Waiheke Island Ferry Trip',
      'Winery Visits with Wine Tasting',
      'Island Lunch Experience'
    ]
  },
  {
    day: 3,
    location: 'Auckland → Rotorua',
    description: 'Journey to the Waitomo Glow Worm Caves for an in-depth tour of the Ruakuri Cave with a local expert. See limestone formations, subterranean waterfalls, and luminous glow worms. Continue to Hobbiton for a guided tour of the Lord of the Rings movie set, including a drink at the Green Dragon Inn. End your day in Rotorua.',
    accommodation: 'Millennium Rotorua or similar',
    activities: [
      'Waitomo Glow Worm Caves Tour',
      'Hobbiton Movie Set Visit',
      'Green Dragon Inn Experience'
    ]
  },
  {
    day: 4,
    location: 'Rotorua',
    description: 'Explore Te Puia geothermal valley with its hot springs, mud pools, and geysers. Visit the Kiwi Conservation Centre and watch Maori carving demonstrations at the Ahua Gallery. Enjoy a traditional hangi feast for lunch. Optional evening geyser tour available.',
    accommodation: 'Millennium Rotorua or similar',
    activities: [
      'Te Puia Geothermal Valley Tour',
      'Kiwi Conservation Centre Visit',
      'Traditional Hangi Lunch'
    ]
  },
  {
    day: 5,
    location: 'Rotorua → Taupō',
    description: 'Travel to Taupō via the Waiotapu Thermal Wonderland. Walk through geothermal features including New Zealand\'s largest mud pool. Afternoon free to explore Lake Taupō with optional activities like sustainable sailing or scenic flights over Tongariro National Park.',
    accommodation: 'Millennium Taupo or similar',
    activities: [
      'Waiotapu Thermal Wonderland Visit',
      'Lake Taupō Exploration',
      'Optional Water Activities'
    ]
  },
  {
    day: 6,
    location: 'Taupō → Ohakune',
    description: 'Discover Tongariro National Park\'s natural wonders with a guided two-hour walk to the Taranaki Falls - an impressive 20m cascade tumbling over volcanic cliffs. Experience the spiritual significance and natural beauty of this UNESCO World Heritage site.',
    accommodation: 'The Powderhorn Chateau or similar',
    activities: [
      'Guided Taranaki Falls Walk',
      'Tongariro National Park Experience',
      'Scenic Mountain Views'
    ]
  }
];

const NorthIslandAdventure = () => {
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
            alt={`North Island Adventure ${index + 1}`}
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
            North Island Adventure
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
            Discover the volcanic wonders and cultural heritage
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Main Content */}
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
              Embark on a 6-day journey through New Zealand's North Island, exploring volcanic landscapes, ancient caves, and rich Maori culture. From the vibrant city of Auckland to the geothermal wonders of Rotorua, this adventure combines natural phenomena with cultural experiences.
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalOfferIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Cultural Experiences</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Guided Tours</Typography>
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
                        gap: '10px',
                      }}
                    >
                      <PlaceIcon sx={{ color: 'var(--primary-color)' }} />
                      Day {day.day}: {day.location}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'white', p: 3 }}>
                    <Typography sx={{ mb: 2, color: '#000000' }}>{day.description}</Typography>
                    {day.accommodation && (
                      <Typography sx={{ mb: 2, color: '#666666', fontStyle: 'italic' }}>
                        Accommodation: {day.accommodation}
                      </Typography>
                    )}
                    <List>
                      {day.activities.map((activity, actIndex) => (
                        <ListItem key={actIndex} sx={{ p: 0, mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: '30px' }}>
                            <CheckCircleOutlineIcon sx={{ color: 'var(--primary-color)', fontSize: '1.2rem' }} />
                          </ListItemIcon>
                          <ListItemText primary={activity} sx={{ m: 0 }} />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontSize: '2rem',
                fontFamily: "'Cormorant Garamond', serif",
                mb: 3,
                color: '#000000'
              }}
            >
              What to Pack
            </Typography>
            <Typography
              sx={{
                mb: 4,
                color: '#000000'
              }}
            >
              To make the most of your trip, we recommend packing comfortable walking shoes, weather-appropriate clothing, a camera to capture the breathtaking scenery, and an open mind ready for adventure.
            </Typography>

            {/* Included in the Package Section */}
            <Typography
              variant="h3"
              sx={{
                fontSize: '2rem',
                fontFamily: "'Cormorant Garamond', serif",
                mb: 3,
                color: '#000000'
              }}
            >
              Included in the Package
            </Typography>
            <List sx={{ mb: 4 }}>
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
                <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                  <ListItemIcon sx={{ minWidth: '32px' }}>
                    <CheckCircleOutlineIcon sx={{ color: '#000000', fontSize: '1.1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
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
          </Grid>

          {/* Package Details */}
          <Grid item xs={12} md={4}>
            <Box sx={{
              position: 'sticky',
              top: '100px'
            }}>
              <PackageDetails
                duration="8 Days"
                locations="Auckland, Rotorua, Taupō"
                maxPeople="12"
                price="$7,012"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NorthIslandAdventure;