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
  '/images/srilanka-4.jpg',
  '/images/srilanka-5.jpg',
  '/images/srilanka-6.jpg'
];

const itineraryData = [
  {
    day: 1,
    location: 'Negombo',
    description: 'Welcome to Sri Lanka! Your adventure begins in the town of Negombo, close to the international airport, with a welcome meeting at 5.30 pm. You can explore the local fishing craft and feast on fresh seafood, or explore the beautiful countryside by bicycle.',
    accommodation: 'Hotel',
    meals: 'No meals included',
    activities: [],
    specialInfo: 'Important to attend the welcome meeting for insurance details and next of kin information. Please inform if you will be late. Be cautious of unauthorized local guides offering excursions.'
  },
  {
    day: 2,
    location: 'Anuradhapura',
    description: 'Visit the Negombo Fish Markets in the morning, then travel to ancient Anuradhapura. Stop at the small town of Chilaw for lunch. Anuradhapura is a major Buddhist pilgrimage site with ruins of ancient temples, including Anuradhapura Maha Viharaya and the Jaya Sri Maha Bodhi - the oldest living planted tree in the world!',
    accommodation: 'Hotel',
    meals: 'Breakfast',
    activities: ['Negombo Fish Markets visit', 'Travel to Anuradhapura', 'Optional visit to Mihintale'],
    specialInfo: 'Travel time approximately 5 hours. Negombo Fish Markets are closed on Sundays and Catholic Holidays.'
  },
  {
    day: 3,
    location: 'Anuradhapura',
    description: 'Take a guided bicycle tour of the city, visiting the sacred old Bo Tree and exploring the ancient ruins spread across woodlands. Free afternoon to explore local cuisine.',
    accommodation: 'Hotel',
    meals: 'Breakfast',
    activities: ['Guided bicycle tour', 'Bodhi Tree Temple visit'],
    specialInfo: 'Temple visits require removing shoes (socks acceptable) and covering shoulders and legs.'
  },
  {
    day: 4,
    location: 'Polonnaruwa',
    description: 'Travel to UNESCO World Heritage site Polonnaruwa by public bus and private vehicle. Visit palaces, temples, stupas, and massive stone Buddhas. The museum features scale models showing how the buildings existed in their time.',
    accommodation: 'Hotel',
    meals: 'Breakfast',
    activities: ['Polonnaruwa bike tour', 'Museum visit'],
    specialInfo: 'Travel time approximately 2.5 hours.'
  },
  {
    day: 5,
    location: 'Dambulla',
    description: 'Explore the amazing Dambulla Cave Temples, featuring 150 Buddha images and fascinating frescoes. Optional afternoon wildlife safari to Minneriya, Kaudulla or Eco National Park to spot wild elephants.',
    accommodation: 'Hotel',
    meals: 'Breakfast',
    activities: ['Dambulla Cave Temples visit', 'Optional wildlife safari'],
    specialInfo: 'Travel time approximately 2.5 hours.'
  },
  {
    day: 6,
    location: 'Sigiriya - Kandy',
    description: 'Early morning visit to Sigiriya fortress, a UNESCO World Heritage site. Optional visit to a spice garden for lunch. Continue to Kandy to visit the Dalada Maligawa (Temple of the Tooth) - Sri Lanka\'s most important Buddhist site.',
    accommodation: 'Hotel',
    meals: 'No meals included',
    activities: ['Sigiriya Lion Rock Fortress visit', 'Temple of the Tooth visit', 'Optional spice garden visit'],
    specialInfo: 'Travel time approximately 3.5 hours. Good fitness level required for Sigiriya climb due to steep stone steps.'
  },
  {
    day: 7,
    location: 'Kandy',
    description: 'Today, you\'ll visit a nearby tea factory for a guided tour to learn about the production of Sri Lanka\'s best-known beverage. You\'ll sample some of the delicious varieties of locally produced tea. Later, head back to your hotel in Kandy, located far from the noise of the city - a great place to unwind with lovely views over the town.',
    accommodation: 'Hotel (1 night)',
    meals: 'Breakfast',
    activities: [
      'Kandy - Tea factory visit',
      'Optional: Kandy - Cultural Dance Performance - USD7',
      'Optional: Kandy - Botanical Gardens - USD10'
    ],
    specialInfo: ''
  },
  {
    day: 8,
    location: 'Bandarawela',
    description: 'Start your day with a scenic train journey to Bandarawela, passing through tea plantations and winding along mountains into the highlands. When you arrive, you\'ll visit a local home for a cooking demonstration to learn some secrets of traditional Sri Lankan cuisine. After, enjoy the delicious meal for dinner with your hosts.',
    accommodation: 'Hotel (1 night)',
    meals: 'Breakfast, Dinner',
    activities: [
      'Bandarawela - Cooking demonstration & local meal',
      'Kandy to Bandarawela – Scenic train ride'
    ],
    specialInfo: 'Your travel time today will be approximately 7 hours. Train tickets are in very high demand. We always try our best to secure tickets, but on the rare occasion that we cannot book them, you will continue your journey by private vehicle.'
  },
  {
    day: 9,
    location: 'Haputale/Bandarawela',
    description: 'Today, you\'ll drive to Haputale – at 1431 m above sea level, this area has a rich biodiversity, dense with various flora and fauna. Surrounded by hills and covered with cloud forests and tea plantations, it\'s the perfect starting point for your hike today through plantations and small Tamil villages. For lunch, enjoy a home-cooked meal at a local Tamil tea worker\'s house.',
    accommodation: 'Hotel (1 night)',
    meals: 'Breakfast, Lunch',
    activities: [
      'Hill Country trek'
    ],
    specialInfo: 'Your travel time today will be approximately 1 hour. Your hiking distance will be approximately 12 km or 4 to 5 hours. The hike requires good walking shoes, as the track will be rocky, and if there has been recent rain it can get very muddy and slippery. Although the walk is not too demanding, it can be difficult walking on the rough and unsteady ground.'
  },
  {
    day: 10,
    location: 'Udawalawe Jungle Camp',
    description: 'Embrace an early start this morning and take the train to Idalgashinna. Head out on a hike to explore the beautiful surroundings of Sri Lanka\'s Hill Country. Meet tea pickers along the way and stop for lunch in Haldummulla. After, drive to tonight\'s jungle camp accommodation at Udawalawe, stopping at Diyaluma Falls along the way.',
    accommodation: 'Permanent tented camp (with basic facilities) (1 night)',
    meals: 'Breakfast, Lunch, Dinner',
    activities: [
      'Hill Country hiking',
      'Optional village tour'
    ],
    specialInfo: 'Your travel time today will be approximately 3 hours. Your hiking distance will be approximately 10 km or 4.5 hours. If you don\'t feel up to the hike today, you can be driven to Haldummulla to wait for the group.'
  },
  {
    day: 11,
    location: 'Mirissa',
    description: 'This morning, you can take an optional excursion to Udawalawe National Park to look for elephants – just keep in mind this activity will require a wake-up call of around 4.30 am. Alternatively, you could sleep in, then maybe head to the ayurvedic medicine manufacturing centre. Later, set off to Mirissa by private bus – this is your paradise accommodation for two days of relaxation.',
    accommodation: 'Hotel (1 night)',
    meals: 'Breakfast',
    activities: [
      'Optional: Udawalawe National Park - Entrance fee - USD30',
      'Optional: Udawalawe National Park - Jeep hire (minimum 6 pax) per jeep - USD30'
    ],
    specialInfo: 'Your travel time today will be approximately 3.5 hours.'
  },
  {
    day: 12,
    location: 'Mirissa',
    description: 'Today is all about laying beachside in Mirissa. The beach itself is a long curve of sand with clear waters perfect for swimming – it\'s also a great spot to watch the sunset! Consider taking a bike ride or tuk-tuk to nearby Weligama, where colorful fishing boats bring fresh fish to sell along the shore or maybe explore the UNESCO World Heritage coastal city of Galle by bike.',
    accommodation: 'Hotel (1 night)',
    meals: 'Breakfast',
    activities: [
      'Optional: Explore Galle by Bicycle - USD25',
      'Optional: Explore Galle by bicycle with market visit and local lunch - USD35'
    ],
    specialInfo: 'Previous travellers have raised animal welfare concerns about whale watching experiences in Mirissa. Intrepid follows the best practice guidelines for whale and dolphin watching provided by our Intrepid Foundation partner, Whale & Dolphin Conservation. Unfortunately, there are currently no operators in Mirissa that comply with these guidelines. For this reason, we are currently not able to offer or recommend whale and dolphin watching as an optional activity here.'
  },
  {
    day: 7,
    location: 'Nuwara Eliya → Ella',
    description: 'Morning hike to World\'s End in Horton Plains National Park. Continue to Ella, visiting waterfalls en route. Evening cooking class featuring local cuisine.',
    accommodation: '98 Acres Resort or similar',
    activities: [
      'World\'s End Hike',
      'Waterfall Visit',
      'Cooking Class'
    ]
  },
  {
    day: 8,
    location: 'Ella',
    description: 'Hike to Little Adam\'s Peak and Nine Arch Bridge. Afternoon tea tasting session. Evening yoga session with mountain views.',
    accommodation: '98 Acres Resort or similar',
    activities: [
      'Mountain Hiking',
      'Tea Tasting',
      'Yoga Session'
    ]
  },
  {
    day: 9,
    location: 'Ella → Yala',
    description: 'Travel to Yala National Park. Afternoon and evening safari drives to spot leopards, elephants, and other wildlife. Luxury camping experience.',
    accommodation: 'Wild Coast Tented Lodge or similar',
    activities: [
      'Wildlife Safaris',
      'Luxury Camping',
      'Sundowner Experience'
    ]
  },
  {
    day: 10,
    location: 'Yala → Galle',
    description: 'Morning safari before heading to the historic Galle Fort. Walking tour of the Dutch colonial architecture. Sunset cocktails on the ramparts.',
    accommodation: 'Amangalla or similar',
    activities: [
      'Morning Safari',
      'Fort Walking Tour',
      'Sunset Experience'
    ]
  },
  {
    day: 11,
    location: 'Galle',
    description: 'Free morning to explore Galle Fort\'s boutiques and cafes. Afternoon cooking class in a historic home. Evening food tour through local streets.',
    accommodation: 'Amangalla or similar',
    activities: [
      'Shopping Time',
      'Cooking Class',
      'Food Tour'
    ]
  },
  {
    day: 12,
    location: 'Galle → Bentota',
    description: 'Travel along the coast to Bentota. Visit a turtle hatchery en route. Afternoon Ayurvedic spa treatment. Evening river safari.',
    accommodation: 'Taj Bentota Resort & Spa or similar',
    activities: [
      'Turtle Hatchery Visit',
      'Spa Treatment',
      'River Safari'
    ]
  },
  {
    day: 13,
    location: 'Galle',
    description: 'Head further down the coast to Galle – home to an impressive UNESCO World Heritage-listed Dutch fort with extensive walls and many old buildings. When you arrive, head to a local female artisan\'s workshop for a demonstration on Beeralu lace weaving. Learn about this practise and how the local artisan hails from a family of traditional Beeralu lace makers. Beeralu is a form of pillow lace that\'s hand woven in intricate patterns, often in delicate shades of white. Believed to have been introduced by the Portuguese in the 16th century, you\'ll learn more about the history of this art. In the evening, take a stroll around the historic fort and watch the sunset from the ramparts.',
    accommodation: 'Guesthouse (1 night)',
    meals: 'Breakfast',
    activities: [
      'Galle - Walking tour',
      'Galle - Beeralu lace weaving experience'
    ],
    specialInfo: 'Your travel time today will be approximately 1 hour.'
  },
  {
    day: 14,
    location: 'Colombo',
    description: 'Leaving Galle, you\'ll travel on to Colombo – the nation\'s capital. Stop by some of the city\'s main sights on a bus tour including Independence Square, Parliament and the National Museum, finishing with a shopping opportunity for a good cause at the Barefoot Fairtrade Store. Here, you can find a collection of handicrafts from around the country and support small cottage industries. If you\'re lucky enough to be in Colombo on a Saturday, you\'ll visit Good Market – a local market full of stalls showcasing social enterprises and responsible businesses. Tonight, there\'s an optional group dinner to celebrate your journey together.',
    accommodation: 'Hotel (1 night)',
    meals: 'Breakfast',
    activities: ['Colombo - City tour by bus'],
    specialInfo: 'Your travel time today will be approximately 3 hours.'
  },
  {    day: 15,
    location: 'Colombo',
    description: 'Your trip comes to an end today, with no activities planned. If you\'d like to stay longer, just speak to your booking agent.',
    accommodation: '',
    meals: 'No meals included',
    activities: [],
    specialInfo: ''
  }
];

const SriLankanDiscovery = () => {
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
            alt={`Sri Lankan Discovery ${index + 1}`}
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
            Sri Lankan Discovery
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
            Experience the Pearl of the Indian Ocean
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
              Embark on a 15-day journey through Sri Lanka's most enchanting destinations. From ancient cities to pristine beaches, this luxury tour combines cultural heritage with natural wonders and unparalleled comfort.
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
                  'Comfortable walking shoes',
                  'Sun protection (hat, sunscreen, sunglasses)',
                  'Insect repellent',
                  'Camera',
                  'Power adapter',
                  'Light jacket for hill country',
                  'Modest clothing for temple visits',
                  'Swimming attire',
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
                Included in the Package
              </Typography>
              <List>
                {[
                  'Luxury accommodation throughout the journey',
                  'Daily breakfast and selected meals',
                  'Private luxury vehicle with professional driver',
                  'Expert local guides for all sightseeing',
                  'All entrance fees to monuments and attractions',
                  'Wildlife safari jeep rides',
                  'First-class train tickets',
                  'Airport transfers',
                  'Welcome and farewell dinners',
                  '24/7 on-ground support'
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
            <Box sx={{
              position: 'sticky',
              top: '100px'
            }}>
              <PackageDetails
                duration="15 Days"
                locations="Colombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Galle, Bentota"
                maxPeople="12"
                price="6,531"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SriLankanDiscovery;