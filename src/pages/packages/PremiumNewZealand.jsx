import { Box, Container, Typography, Grid, Button, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import PackageDetails from '../../components/PackageDetails';
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
  '/images/premiumnz-1.jpg',
  '/images/premiumnz-2.avif',
  '/images/premiumnz-3.jpeg',
  '/images/premiumnz-4.jpg'
];

const itineraryData = [
  {
    day: 1,
    location: 'Auckland',
    description: 'Welcome to New Zealand! Your adventure of the volcanic North Island begins in Auckland – New Zealand\'s most populated city, fringed with beaches, harbours, volcanoes and farmland. You\'ll be met at the airport and transferred to your hotel, where you\'ll have a welcome meeting at 6 pm. If you arrive early, you might like to uncover the story of New Zealand rugby during an interactive All Blacks experience. After your meeting, get to know your group over dinner at a local bistro in the heart of the city, championing New Zealand producers.',
    accommodation: 'M Social or similar',
    activities: [
      'Welcome Dinner',
      'Complimentary Arrival Transfer',
      'Optional All Blacks Experience'
    ],
    meals: ['Dinner']
  },
  {
    day: 2,
    location: 'Auckland (Waiheke Island)',
    description: 'Leave the bustle of the big city behind and head offshore to Waiheke Island, famed for its sandy beaches and local wine. Board a ferry from Auckland – if you\'re lucky, you may even see dolphins or orcas along the way. The day will be spent sipping your way around the island, stopping off at three unique wineries to learn about their production methods, and of course tasting the goods yourself. You\'ll also enjoy an included lunch on the island, not to mention a few scenic drives with plenty of opportunities for photos.',
    accommodation: 'M Social or similar',
    activities: [
      'Waiheke Island Day Trip by Ferry',
      'Winery Visits with Wine Tasting & Lunch'
    ],
    meals: ['Breakfast', 'Lunch']
  },
  {
    day: 3,
    location: 'Auckland via Waitomo & Hobbiton to Rotorua',
    description: 'After breakfast this morning, hit the road and drive to the Waitomo Glow Worm Caves – an extensive underground network of tunnels and caverns decorated with stalactites, stalagmites and luminous glow worms. Join a local expert for an in-depth tour of the Ruakuri Cave, descending a spiral entrance to the world below. See the limestone formations, hear the roar of subterranean waterfalls and learn about the glow worms that light up the caves. Continue to Hobbiton, where the epic Lord of the Rings movies were shot. Take a tour around the set with a local guide, hear stories about the production of these iconic films, explore Hobbit holes and enjoy a drink at the mythical Green Dragon Inn.',
    accommodation: 'Millennium Rotorua or similar',
    activities: [
      'Ruakuri Glow Worm Cave Visit',
      'Hobbiton Movie Set Tour',
      'Drink at the Green Dragon'
    ],
    meals: ['Breakfast']
  },
  {
    day: 4,
    location: 'Rotorua',
    description: 'Wake up in Rotorua to the unmistakable scent of sulphur coming off the town\'s many geothermal pools. After breakfast, visit to Te Puia – over 70 hectares of land within the Te Whakarewarewa Geothermal Valley is dotted with hot springs, mud pools and geysers. A local expert will take you on a walk to learn about these geothermal wonders, including Pohutu – the largest geyser in the southern hemisphere. Next, head to the Kiwi Conservation Centre where you\'ll have the chance to observe the beloved nocturnal bird (the kiwi) in a darkened enclosure and learn about the sanctuary\'s efforts to protect them. Swing by the Ahua Gallery and watch culturally significant Maori carving and weaving demonstrations. Lunch today will be a traditional hangi feast cooked beneath the earth in the traditional style.',
    accommodation: 'Millennium Rotorua or similar',
    activities: [
      'Te Puia Geothermal Valley Tour',
      'Kiwi Conservation Centre Visit',
      'Ahua Gallery & Cultural Demonstrations',
      'Traditional Hangi Lunch'
    ],
    meals: ['Breakfast', 'Dinner']
  },
  {
    day: 5,
    location: 'Rotorua to Taupo',
    description: 'Say goodbye to Rotorua and drive on to Taupo – sitting on the shores of Lake Taupo, the largest lake in New Zealand, this is a popular and scenic town. On the way, visit Waiotapu Thermal Wonderland, where you\'ll walk through thousands of years of geothermal history and volcanic features, including New Zealand\'s largest mud pool and bubbling basins bursting with vibrant colours. The rest of the day is yours to discover all that this picturesque part of the country has to offer.',
    accommodation: 'Millenium Taupo or similar',
    activities: [
      'Waiotapu Thermal Wonderland Visit',
      'Optional Lake Taupo Sailing Adventure'
    ],
    meals: ['Breakfast']
  },
  {
    day: 6,
    location: 'Rotorua → Hobbiton → Taupo',
    description: 'Private tour of the Hobbiton Movie Set with exclusive access to areas normally closed to the public. Continue to Lake Taupo for a scenic cruise.',
    accommodation: 'Huka Lodge or similar',
    activities: [
      'Private Hobbiton Movie Set Tour',
      'Green Dragon Inn Experience',
      'Lake Taupo Cruise'
    ]
  },
  {
    day: 7,
    location: 'Taupo',
    description: 'Enjoy a helicopter tour to White Island, New Zealand\'s most active volcano. Afternoon relaxation at your luxury lodge.',
    accommodation: 'Huka Lodge or similar',
    activities: [
      'White Island Helicopter Tour',
      'Volcanic Activity Viewing',
      'Luxury Lodge Experience'
    ]
  },
  {
    day: 8,
    location: 'Taupo → Wellington',
    description: 'Travel to Wellington, New Zealand\'s capital city. Private tour of Te Papa Museum and exclusive after-hours access to Weta Workshop.',
    accommodation: 'InterContinental Wellington or similar',
    activities: [
      'Te Papa Museum Private Tour',
      'Weta Workshop Exclusive Visit',
      'Capital City Orientation'
    ]
  },
  {
    day: 9,
    location: 'Wellington → Marlborough',
    description: 'Fly to Blenheim and explore the Marlborough wine region. Private tastings at premium wineries and a seafood cruise in the Marlborough Sounds.',
    accommodation: 'Bay of Many Coves Resort or similar',
    activities: [
      'Premium Wine Tastings',
      'Seafood Cruise',
      'Luxury Lodge Stay'
    ]
  },
  {
    day: 10,
    location: 'Marlborough → Kaikoura',
    description: 'Travel to Kaikoura for whale watching by private helicopter and luxury boat. Afternoon at leisure with optional spa treatments.',
    accommodation: 'Hapuku Lodge & Tree Houses or similar',
    activities: [
      'Helicopter Whale Watching',
      'Marine Wildlife Encounter',
      'Luxury Tree House Stay'
    ]
  },
  {
    day: 11,
    location: 'Kaikoura → Christchurch',
    description: 'Journey to Christchurch for a private city tour including punting on the Avon River and exclusive garden tours.',
    accommodation: 'The George or similar',
    activities: [
      'Private City Tour',
      'Punting on Avon',
      'Botanical Gardens Visit'
    ]
  },
  {
    day: 12,
    location: 'Christchurch → Mount Cook',
    description: 'Travel to Mount Cook National Park. Enjoy a scenic flight and glacier landing on Tasman Glacier, followed by a gourmet picnic lunch.',
    accommodation: 'Mt Cook Lakeside Retreat or similar',
    activities: [
      'Scenic Glacier Flight',
      'Glacier Landing Experience',
      'Gourmet Picnic Lunch'
    ]
  },
  {
    day: 13,
    location: 'Mount Cook → Queenstown',
    description: 'Journey to Queenstown through the dramatic Lindis Pass. Evening gondola dinner at Skyline Queenstown with premium wine matching.',
    accommodation: 'Eichardt\'s Private Hotel or similar',
    activities: [
      'Scenic Mountain Drive',
      'Skyline Gondola Dinner',
      'Premium Wine Matching'
    ]
  },
  {
    day: 14,
    location: 'Queenstown',
    description: 'Full-day private tour to Milford Sound including scenic flight return. Exclusive fiord cruise with gourmet lunch.',
    accommodation: 'Eichardt\'s Private Hotel or similar',
    activities: [
      'Scenic Flight to Milford',
      'Private Fiord Cruise',
      'Gourmet Lunch Experience'
    ]
  },
  {
    day: 15,
    location: 'Queenstown',
    description: 'Final day at leisure with optional activities. Evening farewell dinner at a premium vineyard restaurant.',
    accommodation: 'Eichardt\'s Private Hotel or similar',
    activities: [
      'Optional Activities',
      'Premium Vineyard Dinner',
      'Farewell Celebration'
    ]
  }
];

const PremiumNewZealand = () => {
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
            alt={`Premium New Zealand Experience ${index + 1}`}
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
            Premium New Zealand
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
            Discover the finest experiences New Zealand has to offer
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
              Embark on a 15-day journey through New Zealand's most exclusive and luxurious experiences. From private helicopter tours to premium wine tastings, this comprehensive tour showcases the very best of both islands with unparalleled comfort and style.
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
                      gap: 2 
                    }}>
                      <CheckCircleOutlineIcon sx={{ 
                        color: '#000000',
                        fontSize: '1.2rem',
                        mt: 0.3 
                      }} />
                      <Typography sx={{ 
                        color: '#000000',
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                      }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Package Details */}
          <Grid item xs={12} md={4}>
            <Box sx={{
              position: 'sticky',
              top: '100px'
            }}>
              <PackageDetails
                duration="15 Days"
                locations="Auckland, Rotorua, Queenstown"
                maxPeople="12"
                price="$13,734"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PremiumNewZealand;