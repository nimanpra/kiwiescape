import { Box, Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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

const SouthIslandExplorer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/franz-josef-glacier-ice-crevasses-3.webp',
    '/images/chard-farm-queenstown-1024x683.jpg',
    '/images/central-otago-wine-tour.jpg'
  ];

  const itineraryData = [
    {
      day: 1,
      title: 'Christchurch',
      description: 'Welcome to Aotearoa (New Zealand). Sparsely populated and spectacularly beautiful, the South Island is a paradise for lovers of nature, wildlife and the great outdoors. Your adventure begins in Christchurch with a welcome meeting at 6 pm.',
      activities: [
        'Welcome meeting at 6 pm',
        'Optional: Visit Christchurch Botanic Gardens',
        'Optional: Visit Canterbury Museum'
      ],
      accommodation: 'Hotel (1 night)',
      meals: 'No meals included',
      specialInfo: 'Important: Attendance at welcome meeting is required for insurance and emergency contact details collection.'
    },
    {
      day: 2,
      title: 'Christchurch / Lake Tekapo / Ohau',
      description: 'Explore the rebuilt Christchurch, including the innovative cardboard Cathedral. Drive to Lake Tekapo to see its stunning turquoise waters, purple lupins, and the Church of the Good Shepherd. Continue to Lake Ohau for overnight stay.',
      activities: [
        'Christchurch city exploration',
        'Visit to Christchurch Cathedral',
        'Lake Tekapo - Mt John Lookout',
        'Church of the Good Shepherd visit'
      ],
      accommodation: 'Hotel or Motel (1 night)',
      meals: 'Breakfast, Dinner'
    },
    {
      day: 3,
      title: 'Mackenzie Country / Queenstown',
      description: 'Journey through the Mackenzie Basin and Southern Alps, with scenic stops including Kawarau Gorge, famous for bungy jumping. Arrive in Queenstown, the adventure capital of the world.',
      activities: [
        'Scenic drive through Mackenzie Basin',
        'Southern Alps views',
        'Visit to Kawarau Gorge',
        'Optional: Kawarau Bridge Bungy - NZD320'
      ],
      accommodation: 'Hotel or Motel (1 night)',
      meals: 'Breakfast',
      optionalActivities: [
        'Walter Peak Lake Cruise with Gourmet Dinner - NZD189',
        'Kawarau Bridge Bungy - NZD320'
      ]
    },
    {
      day: 4,
      title: 'Queenstown',
      description: 'Free day to explore Queenstown\'s varied attractions, from adventure activities to wine tasting in Gibbston Valley or walking around Lake Wakatipu.',
      activities: [
        'Free day for optional activities'
      ],
      accommodation: 'Hotel or Motel (1 night)',
      meals: 'Breakfast',
      optionalActivities: [
        'Lord of the Rings 4WD Tour - NZD285',
        'Doubtful Sound Wilderness Cruise - NZD499',
        'Skyline Gondola - NZD64',
        'Milford Sound Fly-Cruise-Fly Day Trip - NZD674',
        'Milford Sound Coach-Cruise-Fly Day Trip - NZD789',
        'Milford Sound Coach-Cruise-Coach Day Trip - NZD274',
        'Time Tripper - NZD20',
        'Shotover River Jet Boat Ride - NZD169'
      ]
    },
    {
      day: 5,
      title: 'Queenstown / Wanaka',
      description: 'Drive through Crown Range Mountains to Wanaka, stopping at historic Arrowtown. Enjoy the afternoon in beautiful Wanaka, set against dramatic mountains and Lake Wanaka.',
      activities: [
        'Morning in Queenstown',
        'Scenic drive through Crown Range Mountains',
        'Visit to historic Arrowtown',
        'Optional afternoon activities in Wanaka'
      ],
      accommodation: 'Hotel or Motel (1 night)',
      meals: 'Breakfast',
      optionalActivities: [
        'Shotover River Jet Boat Ride - NZD169',
        'Time Tripper - NZD20',
        'Skyline Gondola - NZD64'
      ]
    },
    {
      day: 6,
      title: 'Wanaka',
      description: 'Visit Mou Waho Island, a predator-free reserve with a natural glacial-formed lake at its summit. Explore the unique island-in-a-lake-on-an-island formation and visit the famous #thatwanakatree.',
      activities: [
        'Mou Waho Island boat trip and walk',
        'Visit to the famous Wanaka Tree',
        'Free afternoon for exploring'
      ],
      accommodation: 'Hotel or Motel (1 night)',
      meals: 'Breakfast'
    },
    {
      day: 7,
      title: 'Wanaka / Franz Josef',
      description: 'Enjoy a free morning in Wanaka, then get back on the road and make tracks for Franz Josef. This is another incredible drive, so have your camera ready! Depending on the weather, stop off at either Lake Hawea or Lake Wanaka lookout points. Along the way, your leader will pause at some off the beaten track spots to snap some pictures and stretch your legs. Arrive in Franz Josef in the early evening and perhaps head out to one of the town\'s cosy pubs for dinner.',
      activities: [
        'Scenic drive to Franz Josef',
        'Lake Hawea or Lake Wanaka lookout stops',
        'Photo opportunities at scenic spots'
      ],
      accommodation: 'Hotel or Motel (1 night)',
      meals: 'Breakfast'
    },
    {
      day: 8,
      title: 'Franz Josef',
      description: 'Rise and shine – you\'re in one of the most beautiful places in the world, and there\'s so much to discover here. Known for the dazzling Franz Josef Glacier and awe-inspiring views of Mt Cook, this is natural beauty on the biggest scale. The region also has a cultural history that\'s every bit as captivating as its natural wonders.',
      activities: [
        'Franz Josef - Greenstone Pendant Carving'
      ],
      accommodation: 'Hotel or Motel (1 night)',
      meals: 'Breakfast',
      optionalActivities: [
        'Franz Josef - Glacier Lake Kayaking - NZD165',
        'Franz Josef - Skydiving - from - NZD399',
        'Franz Josef - Franz Josef Glacier Valley Walk - Free',
        'Franz Josef - Glacier Heli Hike - NZD795',
        'Franz Josef - Heli Experience with Snow Landing - NZD325'
      ]
    },
    
  
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section with Image Carousel */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          overflow: 'hidden',
          mb: 6
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt="South Island Explorer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 1
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontFamily: "'Cormorant Garamond', serif",
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            South Island Explorer
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Discover the natural wonders of New Zealand's South Island
          </Typography>
        </Box>

        <Button
          onClick={prevImage}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
          }}
        >
          <ArrowBackIosNewIcon />
        </Button>

        <Button
          onClick={nextImage}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Itinerary Section */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '2.5rem',
                fontFamily: "'Cormorant Garamond', serif",
                mb: 4,
                color: 'var(--primary-color)'
              }}
            >
              Your Journey
            </Typography>

            <Box sx={{ mb: 4 }}>
              {itineraryData.map((day, index) => (
                <Accordion key={index} sx={{ mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      bgcolor: 'rgba(0,0,0,0.02)'
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      Day {day.day}: {day.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {day.description && (
                      <Box sx={{ mb: 2 }}>
                        <Typography>{day.description}</Typography>
                      </Box>
                    )}
                    {day.activities && (
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
          </Grid>

          {/* What to Pack Section */}
          <Grid item xs={12} md={8}>
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
                locations="Christchurch, Mount Cook, Queenstown, Milford Sound, Franz Josef"
                maxPeople="12"
                price="$5,500"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SouthIslandExplorer;