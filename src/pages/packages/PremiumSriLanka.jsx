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
  '/images/srilanka-9.jpg',
  '/images/srilanka-7.jpg',
  '/images/srilanka-8.jpg',
  '/images/srilanka-1.jpg'
];

const itineraryData = [
  {
    day: 1,
    location: 'Negombo',
    description: 'Ayubowan! Welcome to Sri Lanka. When you arrive at Bandaranaike International Airport in Colombo, you\'ll be met by an Intrepid representative and transferred to your hotel in nearby Negombo. Here, you\'ll meet your leader and fellow travellers at a 6 pm welcome meeting. If you arrive early, maybe take some time to relax on the beach under the blue sky. After your welcome meeting, your leader will take you to a local restaurant for a seafood dinner. Sri Lankan food is famous for its rich scents, spices and flavours, and this evening you\'ll find out why as you sample some local favourites like pol sambol (a tasty coconut dish) and roast paan (crispy roasted bread).',
    accommodation: 'Pledge Scape Hotel or similar (1 night)',
    activities: [
      'Complimentary Arrival Transfer',
      'Negombo - Welcome Dinner'
    ],
    meals: ['Dinner']
  },
  {
    day: 2,
    location: 'Dambulla',
    description: 'Rise early this morning for a visit to the Negombo fish market. Morning is the best time to visit the market – your leader will help you navigate the organised frenzy of vendors displaying things like crabs, lobsters and squid. Then, say goodbye to Negombo and make the drive to Dambulla, where you\'ll spend the next three nights. Settle into your hotel and in the late afternoon, head out for one of the highlights of any visit to Sri Lanka – the magnificent UNESCO World Heritage site of the palace of Sigiriya (Lion Rock). This dramatic rocky outcrop, rising from the surrounding plains, is topped by a ruined palace. It\'s a good workout to get to the top, but the sight makes it well worth it. Your leader will share stories of the ancient civilisation who once lived atop the rock as you climb. In the evening, return to Dambulla for a Sri Lankan style barbecue.',
    accommodation: 'Jetwing Lake Dambulla Hotel or similar (1 night)',
    activities: [
      'Sigiriya - Lion Rock Fortress Visit',
      'Negombo - Fish market',
      'Dambulla - Local BBQ dinner'
    ],
    meals: ['Breakfast', 'Dinner']
  },
  {
    day: 3,
    location: 'Dambulla',
    description: 'Today, you\'ll head to Anuradhapura, the northern point of Sri Lanka\'s \'cultural triangle\', which also contains Polonnaruwa to the east and Kandy to the south-west. This area is bursting with stunning temples and sites of cultural and religious importance. The city of Anuradhapura is one of the country\'s most historically significant places and its first ancient capital. Take a step back in time as your leader guides you through the giant stupas of Ruwanweliseya and Jetawanaramaya, and ponder the rise and fall of ancient civilisations as you explore crumbling temples and ruins.',
    accommodation: 'Jetwing Lake Dambulla Hotel or similar (1 night)',
    activities: [
      'Anuradhapura - Bodhi Tree Temple',
      'Anuradhapura - World Heritage Site of ancient kingdom ruins',
      'Anuradhapura - Isurumuniya Temple',
      'Anuradhapura - Ruwanweliseya Stupa',
      'Anuradhapura - Jetawanaramaya Stupa'
    ],
    meals: ['Breakfast']
  },
  {
    day: 4,
    location: 'Dambulla',
    description: 'After breakfast, you\'ll make your way to Polonnaruwa to continue your explorations of the cultural triangle. Following Anuradhapura as the Sinhalese and Chola capital in the 10th century, the area is strewn with ancient riches. Discover well-preserved temples, tombs and stupas in Polonnaruwa\'s Quadrangle complex – it\'s not hard to imagine what this place looked like in all its former glory.',
    accommodation: 'Jetwing Lake Dambulla Hotel or similar (1 night)',
    activities: [
      'Polonnaruwa ancient ruins',
      'Polonnaruwa - Statue of Parakramabahu I',
      'Polonnaruwa - Rankot Vihara',
      'Polonnaruwa - Quadrangle',
      'Polonnaruwa - Lankatilaka',
      'Polonnaruwa - Gal Vihara'
    ],
    meals: ['Breakfast']
  },
  {
    day: 5,
    location: 'Kandy',
    description: 'This morning, you\'ll take a short drive to the incredible Dambulla Cave Temple. Here, you\'ll discover five caves filled with around 150 beautiful statues and paintings of Buddha – some as many as 2000 years old. Explore the magical cave complex as your leader explains why this World Heritage-listed site has been a place of worship for thousands of years. In the afternoon, start your journey to Kandy. Along the way, stop off in the city of Matale where you will visit a local spice garden and learn about the spices that have played such an important role in Sri Lanka\'s cultural heritage. Continue to Kandy where you\'ll have a free evening to explore. Though it\'s the second-largest city in the country, Kandy maintains a laidback atmosphere. Maybe take a peaceful stroll around the city\'s centrepiece lake or ask your leader where you can get your hands on a tasty Sri Lankan curry.',
    accommodation: 'Amaya Hills or similar (1 night)',
    activities: [
      'Matale - Spice Garden',
      'Dambulla - Cave Temples'
    ],
    meals: ['Breakfast']
  },
  {
    day: 6,
    location: 'Kandy',
    description: 'This morning, meet with a local botanist for their expert insight as you take a guided tour of the Royal Botanical Gardens. Your guide will help you spot Yellow Fronted Barbets, Layards Parakeets and Sri Lankan Hanging Parrots, and introduce you to an unbelievable array of orchids. You\'ll also visit the gem museum and lapidary, where you can learn about the history of gem mining in Sri Lanka and see how gems are turned into beautiful pieces of jewellery. Today\'s lunch is particularly special as you dine at Hela Bojun – a social enterprise founded by the Sri Lankan government to empower, train and employ women from rural communities. In the afternoon, you\'ll be welcomed into the home of a local dancer where you\'ll have the unique opportunity to watch an exclusive cultural performance in an intimate environment. This evening, visit the famous Temple of the Tooth Relic. Located in the heart of town, this is the most important shrine in the country, housing a relic of a tooth of Buddha taken from his funeral pyre. Arrive in time and you may have the chance to witness the pooja – a small ceremony of reverence involving drummers and dancers.',
    accommodation: 'Amaya Hills or similar (1 night)',
    activities: [
      'Kandy - Botanical Gardens',
      'Kandy - Temple of the Tooth',
      'Kandy - Hela Bojun social enterprise lunch',
      'Kandy - Gem museum & lapidary workshop visit',
      'Kandy - Private Cultural Dance Performance'
    ],
    meals: ['Breakfast', 'Lunch']
  },
  {
    day: 7,
    location: 'Nuwara Eliya',
    description: 'Depart Kandy and board a morning train bound for Nuwara Eliya. Situated deeper into tea plantation country, Nuwara Eliya sits at an elevation of 1800 m, making it one of the coolest regions in Sri Lanka. Once favoured by the Scottish and the English, remnants of the past can be seen in sculpted gardens and manor homes decorating the city. When you arrive, explore the charming town at your own pace before heading to your accommodation. Tucked away among tea plantations and scenic hills is the Grand Hotel – a gorgeous National Heritage Property first established in 1891 and your Feature Stay for the next two nights. A nod to the region\'s history, rooms are classically decorated with all modern amenities. At its core is the hotel\'s sustainable practices – they\'ve eliminated single-use plastic and are striving for a zero-waste future. This afternoon, enjoy a high tea experience at your hotel. Converted from the former home of a British governor, the hotel now offers an impressive selection of tea paired with finger food and confectionery. This evening, maybe explore the hotel\'s palatial gardens or settle in for a first-class dining experience at the on-site restaurant.',
    accommodation: 'Grand Hotel or similar (1 night)',
    activities: [
      'Nuwara Eliya - High Tea',
      'Kandy - Scenic train ride to Nuwara Eliya'
    ],
    meals: ['Breakfast']
  },
  {
    day: 8,
    location: 'Nuwara Eliya',
    description: 'After breakfast, head to the sky-scraping Single Tree temple and embark on a short 40-minute hike to Single Tree Hill viewpoint to witness spectacular views of the surrounding hills and tea fields. After your hike, head to a nearby tea factory. This fascinating factory still features some original pieces of machinery. You\'ll have a new appreciation for your humble morning brew after learning about the production process and discovering how the finest tea leaves are transformed into Ceylon black tea. If touring the factory inspires a thirst, you\'ll have the chance to sample some of the final product yourself. Head back to the city to sit down for a well-deserved lunch at the prestigious Nuwara Eliya Golf Club – one of the oldest golf clubs in Asia.',
    accommodation: 'Grand Hotel (feature stay) or similar (1 night)',
    activities: [
      'Nuwara Eliya - Visit to Tea State & Tea Factory',
      'Nuwara Eliya - Single Tree Hill hiking',
      'Nuwara Eliya - Lunch at Nuwara Eliya Golf Club'
    ],
    meals: ['Breakfast', 'Lunch']
  },
  {
    day: 9,
    location: 'Yala',
    description: 'This morning, make your way to the sacred town of Kataragama. On the way there, make a stop at a beautiful small town in the highlands – Ella – and visit Ella Gap which offers beautiful vistas out across the plains. In the evening, head to Yala National Park – Sri Lanka\'s premier wildlife reserve. Here, you\'ll board a 4WD for a safari through open grasslands, lush forest and lagoons. Your guide will carefully listen out for the rustling of concealed animals that would go unnoticed by those not in the know. There\'s a good chance of spotting crocodiles, elephants, monkeys and buffalo and if you\'re lucky, you may even spot a leopard – the park is considered one of the best places in the world to see these elusive big cats. After a day of wildlife spotting, retire to your resort for dinner. Located near the less-visited back gate of Yala National Park, your accommodation offers quick access to wildlife without the large coaches frequently found at the front gates.',
    accommodation: 'Chaarya Resort & Spa or similar (1 night)',
    activities: [
      'Ella - Ella Gap view point',
      'Yala/Bundala National Park - Wildlife safari'
    ],
    meals: ['Breakfast', 'Dinner'],
    specialInfo: 'From September to mid-October the Wildlife Conservation Department of Sri Lanka close Yala National Park for the development of infrastructure as well as for plant and wildlife rejuvenation. During this time our jeep safari today will be in Bundala National Park. Bundala National Park is home to elephants, crocodiles, monkeys, and wild boar.'
  },
  {
    day: 10,
    location: 'Yala',
    description: 'Today, you\'ll enjoy another safari in Yala National Park. As Sri Lanka\'s second largest national park, there\'s so much to uncover here. Maybe take the chance to do some birdwatching – Yala is home to some 215 bird species, including the Sri Lanka wood pigeon, painted stork and Crimson-fronted Barbet. Keep an eye out for prideful peacocks strutting their way through the park. If Yala is closed today, the group will visit the fantastic Bundala National Park instead. Enjoy an included dinner at your resort this evening.',
    accommodation: 'Chaarya Resort & Spa or similar (1 night)',
    activities: [
      'Yala/Bundala National Park - Wildlife safari'
    ],
    meals: ['Breakfast', 'Dinner'],
    specialInfo: 'From September to mid-October the Wildlife Conservation Department of Sri Lanka closes Yala National Park for the development of infrastructure as well as for plant and wildlife rejuvenation. During this time our jeep safari today will be in Bundala National Park. Bundala National Park is home to elephants, crocodiles, monkeys, and wild boar.'
  },
  {
    day: 11,
    location: 'Galle',
    description: 'Take an optional visit Kataragama Temple this morning to see the shrine dedicated to Kataragama Deviyo (the resident god). Later, you\'ll transfer to Galle – a beautiful seaside town near Sri Lanka\'s southernmost tip. Settle into your hotel, then head just outside Galle toa small village for a Beeralu lace weaving activity in a local\'s home – this is a traditional weaving method in Sri Lanka. An Exclusive Experience, you\'ll also have the chance to participate in the weaving and if you like, you can choose to support the village by buying some products to take home. After, follow your leader on a walking tour through the best-preserved Dutch town in Sri Lanka. At its core lies a fort surrounded on three sides by the ocean with a treasure trove of ancient mosques and churches, museums, boutiques and more on its streets. Uncover Galle\'s glory as your leader shares tales from its past through to the present day.',
    accommodation: 'Le Grand Galle or similar (1 night)',
    activities: [
      'Galle - Galle Fort Walking tour',
      'Galle - Beeralu lace weaving activity'
    ],
    meals: ['Breakfast'],
    specialInfo: 'Your total travel time today will be approximately 2.5 hours.'
  },
  {
    day: 12,
    location: 'Galle',
    description: 'This morning is yours to spend at your leisure. Maybe visit a cinnamon plantation just outside of Galle to learn about the process of making the spice. Bird watchers may wish to explore the Hiyare Rainforest Reservoir on the outskirts of the city. As always, you can speak to your knowledgeable leader for information on how to book or access these activities. In the evening, you\'ll join your leader who will take you to the local markets to learn about all the fresh ingredients that make up Sri Lanka\'s flavoursome and fragrant recipes. After perusing the colourful market stalls, head to your local host\'s home and take part in a Sri Lankan cooking class followed by a delicious dinner. Get a behind the scenes look at Sri Lankan cuisine as you conjure up some Ambulthiyal fish curry, lentil dhal, eggplant curry and something sweet for dessert.',
    accommodation: 'Le Grand Galle or similar (1 night)',
    activities: [
      'Galle - Farmer\'s market and home cooking class'
    ],
    meals: ['Breakfast', 'Dinner']
  },
  {
    day: 13,
    location: 'Colombo',
    description: 'Bid farewell to Galle and make your way to Colombo, Sri Lanka\'s bustling capital city. When you arrive, head to a courtyard restaurant in the former home of a family from Jaffna and sit down for a northern Sri Lankan lunch. In the afternoon, head out on a leader-led orientation walk. Make a stop at the Pettah fruit and vegetable market where you\'ll be fully immersed in the sights, sounds and smells of Colombo as you watch vendors and shoppers go about their business. Visit the striking candy cane coloured Red Mosque and its soaring minarets that can be seen from across the city. Further explorations will reveal Dutch and British influenced architecture, a hangover from the city\'s past. This evening you may like to join your leader and fellow travellers for a final group dinner to see out your Sri Lankan adventure.',
    accommodation: 'The Kingsbury Hotel or similar (1 night)',
    activities: [
      'Colombo - City walking tour'
    ],
    meals: ['Breakfast', 'Lunch'],
    specialInfo: 'Your total travel time today will be approximately 2.5 hours.'
  },
  {
    day: 14,
    location: 'Colombo',
    description: 'Your trip comes to an end after breakfast this morning.',
    meals: ['Breakfast']
  }
];

const PremiumSriLanka = () => {
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
            alt={`Premium Sri Lanka Experience ${index + 1}`}
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
            Premium Sri Lanka
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
            Experience the cultural richness and natural beauty of Sri Lanka
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
              Embark on a 14-day journey through Sri Lanka's most iconic cultural and historical sites. From ancient cities to pristine beaches, this premium tour showcases the very best of the Pearl of the Indian Ocean with unparalleled comfort and authentic experiences.
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalOfferIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Premium Transportation</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon sx={{ color: '#000000' }} />
                <Typography sx={{ color: '#000000', fontWeight: 500 }}>Cultural Experience</Typography>
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
                    
                    {day.activities && day.activities.length > 0 && (
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

                    {day.meals && day.meals.length > 0 && (
                      <Box sx={{ mt: 2 }}>
                        <Typography 
                          sx={{ 
                            fontWeight: 600,
                            color: 'var(--primary-color)',
                            mb: 1
                          }}
                        >
                          Included Meals:
                        </Typography>
                        <Typography sx={{ color: '#000000' }}>
                          {day.meals.join(', ')}
                        </Typography>
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
                  mb: 3,
                  color: '#000000'
                }}
              >
                What to Pack
              </Typography>
              <Typography sx={{ color: '#000000', mb: 3, lineHeight: 1.6 }}>
                To make the most of your trip, we recommend packing comfortable walking shoes, weather-appropriate clothing, a camera to capture the breathtaking scenery, and an open mind ready for adventure.
              </Typography>
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
                Included in the Package
              </Typography>
              <List sx={{ pl: 2 }}>
                {[
                  'Accommodation in top-rated hotels',
                  'Guided tours with experienced and knowledgeable guides',
                  'All transportation during the tour',
                  'Select meals featuring local cuisine',
                  'All entrance fees to attractions',
                  'Welcome and farewell dinners',
                  '24/7 tour support',
                  'Comprehensive travel insurance'
                ].map((item, idx) => (
                  <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>
                      <CheckCircleOutlineIcon sx={{ color: '#000000 !important', fontSize: '1.1rem' }} />
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
            </Box>
          </Grid>

          {/* Package Details Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: '100px' }}>
              <PackageDetails
                duration="14 Days"
                locations="Multiple Locations"
                maxPeople={12}
                price={8450}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PremiumSriLanka;