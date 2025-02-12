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
  '/images/franz-josef-glacier-ice-crevasses-3.webp',
  '/images/central-otago-wine-tour.jpg',
  '/images/premiumsouth-1.jpg',
  '/images/premiumsouth-2.jpg'
];

const itineraryData = [
  {
    day: 1,
    location: 'Christchurch',
    description: 'Arrive in the Garden City of Christchurch. After a VIP airport transfer, settle into your luxury accommodation. Enjoy a private guided tour of the city\'s revival, including the innovative Transitional Cathedral and the beautiful Botanic Gardens. End your day with a gourmet welcome dinner at a top local restaurant.',
    accommodation: 'The George Hotel or similar',
    activities: [
      'VIP Airport Transfer',
      'Private City Tour',
      'Botanic Gardens Visit',
      'Welcome Dinner'
    ],
  },
  {
    day: 2,
    location: 'Christchurch → Lake Tekapo',
    description: 'Journey through the Canterbury Plains to Lake Tekapo. Visit the iconic Church of the Good Shepherd and enjoy a private stargazing experience at the Mount John Observatory. Your evening includes a relaxing soak in private hot pools overlooking the turquoise lake.',
    accommodation: 'Mt John Observatory Luxury Suites or similar',
    activities: [
      'Church of the Good Shepherd Visit',
      'Private Stargazing Experience',
      'Hot Pool Experience'
    ]
  },
  {
    day: 3,
    location: 'Lake Tekapo → Mount Cook',
    description: 'Travel to Mount Cook National Park. Take a scenic helicopter flight with a glacier landing on the Tasman Glacier. Enjoy a gourmet picnic lunch with spectacular views. In the evening, experience fine dining at your luxury lodge.',
    accommodation: 'Mt Cook Lakeside Retreat or similar',
    activities: [
      'Helicopter Glacier Landing',
      'Gourmet Picnic Lunch',
      'Fine Dining Experience'
    ]
  },
  {
    day: 4,
    location: 'Mount Cook → Queenstown',
    description: 'Drive through the dramatic Lindis Pass to Queenstown. Stop at historic Arrowtown and visit premium wineries in the Gibbston Valley. Evening gondola dinner at Skyline Queenstown with spectacular views.',
    accommodation: 'Eichardt\'s Private Hotel or similar',
    activities: [
      'Arrowtown Visit',
      'Premium Wine Tasting',
      'Skyline Gondola Dinner'
    ]
  },
  {
    day: 5,
    location: 'Queenstown → Milford Sound',
    description: 'Experience a spectacular scenic flight to Milford Sound. Enjoy an exclusive fiord cruise away from the crowds. Spot seals, dolphins, and stunning waterfalls. Return flight via glaciers and hidden valleys.',
    accommodation: 'Eichardt\'s Private Hotel or similar',
    activities: [
      'Scenic Flight to Milford',
      'Private Fiord Cruise',
      'Wildlife Viewing'
    ]
  },
  {
    day: 6,
    location: 'Queenstown',
    description: 'Free morning to choose from Queenstown\'s premium activities. Afternoon private wine tour in Central Otago, visiting boutique vineyards and enjoying a long lunch at a renowned winery restaurant.',
    accommodation: 'Eichardt\'s Private Hotel or similar',
    activities: [
      'Optional Adventure Activities',
      'Private Wine Tour',
      'Winery Lunch Experience'
    ]
  },
  {
    day: 7,
    location: 'Queenstown → Franz Josef',
    description: 'Journey to the West Coast through Haast Pass. Stop at hidden waterfalls and pristine lakes. Arrive at Franz Josef for a glacier hot pool experience surrounded by rainforest.',
    accommodation: 'Te Waonui Forest Retreat or similar',
    activities: [
      'Haast Pass Journey',
      'Waterfall Walks',
      'Glacier Hot Pools'
    ]
  },
  {
    day: 8,
    location: 'Franz Josef',
    description: 'Morning helicopter tour with a glacier landing on Franz Josef Glacier. Afternoon spa treatments at your luxury lodge. Evening guided rainforest walk to spot glow worms.',
    accommodation: 'Te Waonui Forest Retreat or similar',
    activities: [
      'Helicopter Glacier Tour',
      'Spa Treatments',
      'Glow Worm Walk'
    ]
  },
  {
    day: 9,
    location: 'Franz Josef → Christchurch',
    description: 'Return to Christchurch via the TranzAlpine train - one of the world\'s most scenic rail journeys. Evening farewell dinner at a premium restaurant celebrating New Zealand cuisine.',
    accommodation: 'The George Hotel or similar',
    activities: [
      'TranzAlpine Train Journey',
      'Scenic Mountain Views',
      'Farewell Dinner'
    ]
  },
  {
    day: 10,
    location: 'Christchurch',
    description: 'After a leisurely breakfast, transfer to Christchurch Airport for your departure. End of your premium South Island journey.',
    accommodation: null,
    activities: [
      'Breakfast',
      'Airport Transfer'
    ]
  }
];

const PremiumSouthIsland = () => {
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
            alt={`Premium South Island Experience ${index + 1}`}
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
            Premium South Island
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
            Discover the South Island's most exclusive experiences
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
              Embark on a 10-day journey through New Zealand's South Island's most exclusive experiences. From glacier landings to premium wine tastings, this luxury tour combines natural wonders with unparalleled comfort and sophistication.
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalOfferIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Luxury Transportation</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Premium Experience</Typography>
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
                duration="10 Days"
                locations="Christchurch, Lake Tekapo, Queenstown"
                maxPeople="12"
                price="$9136"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PremiumSouthIsland;