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
  '/images/srilanka-2.jpg',
  '/images/srilanka-1.jpg',
  '/images/srilanka-3.jpg'
];

const itineraryData = [
  {
    day: 1,
    location: "Colombo",
    description: "Welcome to Sri Lanka! Upon arrival at Bandaranaike International Airport, transfer to your hotel in Colombo. Evening city tour and welcome dinner.",
    accommodation: "5-star hotel in Colombo",
    meals: "Welcome Dinner",
    activities: ["Airport Transfer", "Evening City Tour", "Welcome Dinner"],
    specialInfo: "Important to attend the welcome dinner for tour briefing and meeting your fellow travelers."
  },
  {
    day: 2,
    location: "Sigiriya & Dambulla",
    description: "Visit the ancient rock fortress of Sigiriya and explore the cave temples of Dambulla.",
    accommodation: "Luxury resort in Sigiriya",
    meals: "Breakfast, Lunch",
    activities: ["Sigiriya Rock Fortress Visit", "Dambulla Cave Temple Exploration", "Cultural Performance"],
    specialInfo: "Good fitness level required for Sigiriya climb. Temple visits require modest dress code."
  },
  {
    day: 3,
    location: "Kandy",
    description: "Visit the Temple of the Tooth Relic and enjoy a traditional cultural show.",
    accommodation: "Heritage hotel in Kandy",
    meals: "Breakfast, Dinner",
    activities: ["Temple of the Tooth Visit", "Traditional Dance Show", "Spice Garden Tour"],
    specialInfo: "Temple visit requires appropriate dress code. Evening cultural show is a highlight."
  },
  {
    day: 4,
    location: "Nuwara Eliya",
    description: "Travel to Nuwara Eliya, visit tea plantations and enjoy the cool climate. Experience the British colonial heritage and learn about tea production.",
    accommodation: "Colonial hotel in Nuwara Eliya",
    meals: "Breakfast, High Tea",
    activities: ["Tea Factory Visit", "Tea Tasting Session", "Colonial Architecture Tour"],
    specialInfo: "The climate is cooler in Nuwara Eliya, bring warm clothing. Tea factory visits are subject to factory operating hours."
  },
  {
    day: 5,
    location: "Yala",
    description: "Morning and evening safari drives to spot wildlife including leopards and elephants. Experience the thrill of wildlife photography and learn about conservation efforts.",
    accommodation: "Luxury tented camp in Yala",
    meals: "Breakfast, Lunch, Dinner",
    activities: ["Morning Safari Drive", "Evening Safari Drive", "Wildlife Photography Session"],
    specialInfo: "Early morning start for best wildlife viewing. Bring appropriate clothing and camera equipment."
  },
  {
    day: 6,
    location: "Galle",
    description: "Explore the historic Galle Fort, a UNESCO World Heritage site, and enjoy the coastal atmosphere. Walk through charming streets lined with boutiques and cafes.",
    accommodation: "Boutique hotel in Galle Fort",
    meals: "Breakfast",
    activities: ["Guided Fort Walking Tour", "Sunset Rampart Walk", "Local Craft Shopping"],
    specialInfo: "Best to explore the fort early morning or late afternoon to avoid heat. Many photo opportunities throughout the fort."
  },
  {
    day: 7,
    location: "Unawatuna",
    description: "Free day to relax on the beautiful beaches of the south coast. Enjoy water sports, sunbathing, or explore nearby coastal villages.",
    accommodation: "Beach resort in Unawatuna",
    meals: "Breakfast",
    activities: ["Beach Activities", "Optional Water Sports", "Coastal Village Visit"],
    specialInfo: "Water sports activities are subject to weather conditions. Sun protection is essential."
  },
  {
    day: 8,
    location: "Bentota",
    description: "Optional water sports activities and river safari in Bentota. Experience the thrill of various water sports and explore the mangrove ecosystem.",
    accommodation: "Luxury resort in Bentota",
    meals: "Breakfast, Farewell Dinner",
    activities: ["Water Sports Activities", "River Safari", "Mangrove Tour", "Farewell Dinner"],
    specialInfo: "Water sports activities are subject to weather conditions. River safari best during morning hours."
  },
  {
    day: 9,
    location: "Colombo",
    description: "Transfer to Colombo airport for your departure flight. Time for last-minute shopping if schedule permits.",
    accommodation: "None",
    meals: "Breakfast",
    activities: ["Airport Transfer", "Optional Shopping"],
    specialInfo: "Departure transfer will be arranged based on your flight time. Please ensure to check out before 12 PM."
  }
];

const SriLankanExplorer = () => {
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
            alt={`Sri Lankan Explorer ${index + 1}`}
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
            Sri Lankan Explorer
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
            Discover the Essence of Paradise
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
              Embark on a 9-day journey through Sri Lanka's most captivating destinations. This luxury tour combines ancient wonders, wildlife encounters, and coastal relaxation with premium accommodations and expert guides.
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalOfferIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Premium Transportation</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Luxury Experience</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2rem' },
                  fontFamily: "'Cormorant Garamond', serif",
                  mb: 3,
                  color: '#000000'
                }}
              >
                Itinerary Highlights
              </Typography>

              {itineraryData.map((day, index) => (
                <Accordion key={index} sx={{ mb: 2, bgcolor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' } }}
                  >
                    <Typography sx={{ fontWeight: 600, color: '#000000' }}>
                      Day {day.day}: {day.location}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ mb: 2, color: '#000000' }}>{day.description}</Typography>
                    {day.accommodation && (
                      <Typography sx={{ mb: 2, color: '#666666', fontStyle: 'italic' }}>
                        Accommodation: {day.accommodation}
                      </Typography>
                    )}
                    <List>
                      {day.activities.map((activity, actIndex) => (
                        <ListItem key={actIndex} sx={{ py: 0.5 }}>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon sx={{ color: 'var(--gold)' }} />
                          </ListItemIcon>
                          <ListItemText primary={activity} sx={{ color: '#000000' }} />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>

            {/* What to Pack */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2rem' },
                  fontFamily: "'Cormorant Garamond', serif",
                  mb: 3,
                  color: '#000000'
                }}
              >
                What to Pack
              </Typography>
              <List>
                {[
                  'Lightweight, breathable clothing',
                  'Modest attire for temple visits',
                  'Comfortable walking shoes',
                  'Sun protection (hat, sunscreen, sunglasses)',
                  'Insect repellent',
                  'Camera equipment',
                  'Light jacket for hill country',
                  'Swimwear and beach essentials',
                  'Travel adapter',
                  'Basic first-aid kit'
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon sx={{ color: 'var(--gold)' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} sx={{ color: '#000000' }} />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Included in Package */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2rem' },
                  fontFamily: "'Cormorant Garamond', serif",
                  mb: 3,
                  color: '#000000'
                }}
              >
                Included in Package
              </Typography>
              <List>
                {[
                  'Luxury accommodation as specified',
                  'Daily breakfast and selected meals',
                  'Private air-conditioned transportation',
                  'Professional English-speaking guide',
                  'All entrance fees to mentioned sites',
                  'Safari jeep and naturalist in Yala',
                  'Welcome and farewell dinners',
                  'Airport transfers',
                  '24/7 customer support',
                  'All applicable taxes'
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon sx={{ color: 'var(--gold)' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} sx={{ color: '#000000' }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Package Details */}
          <Grid item xs={12} md={4}>
            <PackageDetails
              duration="9 Days / 8 Nights"
              locations="Colombo, Sigiriya, Kandy, Nuwara Eliya, Yala, Galle, Unawatuna, Bentota"
              maxPeople={12}
              price={5680}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SriLankanExplorer;