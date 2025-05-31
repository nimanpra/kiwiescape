import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';

const tourPackages = [
  {
    title: "Premium New Zealand",
    duration: "15 Days",
    price: "$13,734",
    description: "Discover the best of North Island with exclusive experiences",
    image: "/images/legendary-newzealand.jpeg",
    route: "/packages/premium-new-zealand",
    highlights: [
      "Auckland City Tour",
      "Waiheke Island Wine Tasting",
      "Hobbiton Movie Set",
      "Rotorua Thermal Wonders",
      "Waitomo Glow Worm Caves",
      "Traditional Hangi Feast"
    ],
    locations: "Auckland, Waiheke Island, Waitomo, Rotorua, Taupo"
  },
  {
    title: "North Island Adventure",
    duration: "8 Days",
    price: "$7,012",
    description: "Explore volcanic landscapes and Maori culture",
    image: "/images/northisland.jpeg",
    route: "/packages/north-island-adventure",
    highlights: [
      "Wellington City Tour",
      "Tongariro Crossing",
      "Maori Cultural Experience",
      "Hot Springs Visit"
    ],
    locations: "Wellington, Taupo, Rotorua, Auckland"
  },
  {
    title: "South Island Explorer",
    duration: "8 Days",
    price: "$5,500",
    description: "Experience the stunning landscapes and adventures of New Zealand's South Island",
    image: "/images/southislandexplorer.jpeg",
    route: "/packages/south-island-explorer",
    highlights: [
      "Milford Sound Cruise",
      "Franz Josef Glacier",
      "Queenstown Adventures",
      "Mount Cook National Park"
    ],
    locations: "Christchurch, Queenstown, Franz Josef, Te Anau"
  },
  {
    title: "Premium South Island",
    duration: "10 Days",
    price: "$9,136",
    description: "Luxury journey through New Zealand's South Island with premium experiences",
    image: "/images/premiumsouthisland.jpeg",
    route: "/packages/premium-south-island",
    highlights: [
      "Helicopter Tours",
      "Wine Tasting",
      "Luxury Accommodations",
      "Private Guided Tours"
    ],
    locations: "Christchurch, Wanaka, Queenstown, Dunedin"
  },
  {
    title: "14 Days New Zealand",
    duration: "14 Days",
    price: "$9,850",
    description: "The ultimate New Zealand experience combining both islands' best attractions",
    image: "/images/14-day-newzealand.png",
    route: "/packages/14-days-new-zealand",
    highlights: [
      "Complete Island Tour",
      "Cultural Experiences",
      "Adventure Activities",
      "Scenic Landscapes"
    ],
    locations: "Auckland, Rotorua, Wellington, Queenstown, Christchurch"
  },
  {
    title: "Sri Lankan Explorer",
    duration: "8 Days",
    price: "$5,500",
    description: "Embark on a luxury journey through Sri Lanka's most captivating destinations, combining ancient wonders, wildlife encounters, and coastal relaxation.",
    image: "/images/srilankan-explorer.png",
    route: "/packages/sri-lankan-explorer",
    highlights: [
      "Ancient Rock Fortress of Sigiriya",
      "Temple of the Tooth Relic",
      "Tea Plantations",
      "Yala Wildlife Safari"
    ],
    locations: "Colombo, Sigiriya, Kandy, Nuwara Eliya, Yala, Galle, Unawatuna, Bentota"
  },
  {
    title: "Premium Sri Lanka",
    duration: "14 Days",
    price: "$8,450",
    description: "Experience the cultural richness and natural beauty of Sri Lanka",
    image: "/images/premiumsrilanka.jpeg",
    route: "/packages/premium-sri-lanka",
    highlights: [
      "Cultural Triangle Exploration",
      "Ancient Temples and Ruins",
      "Premium Accommodations",
      "Traditional Experiences"
    ],
    locations: "Negombo, Dambulla, Anuradhapura, Polonnaruwa"
  },
  {
    title: "Sri Lankan Discovery",
    duration: "15 Days",
    price: "$6,531",
    description: "Discover the hidden gems of Sri Lanka with this comprehensive tour package",
    image: "/images/srilankandiscovery.jpeg",
    route: "/packages/sri-lankan-discovery",
    highlights: [
      "Ancient Cities Tour",
      "Wildlife Safari",
      "Beach Relaxation",
      "Cultural Immersion"
    ],
    locations: "Colombo, Kandy, Nuwara Eliya, Ella, Mirissa"
  }
];

const Packages = () => {
  return (
    <Box sx={{ bgcolor: '#F5FAFA', color: 'var(--text-dark)', minHeight: 'calc(100vh - 80px)' }}>
      {/* Banner Section */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          mb: 8,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
            zIndex: 1
          }
        }}
      >
        <Box
          component="img"
          src="/images/packages.png"
          alt="Tour Packages"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </Box>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 6,
            textAlign: 'center',
            position: 'relative',
            color: '#000000',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '3px',
              backgroundColor: 'var(--gold)'
            }
          }}
        >
          Our Tour Packages
        </Typography>

        <Grid container spacing={4}>
          {tourPackages.map((pack, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ 
                    height: '300px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  image={pack.image}
                  alt={pack.title}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <Box>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontFamily: "'Cormorant Garamond', serif",
                        color: 'var(--primary-color)',
                        mb: 2,
                        fontWeight: 600
                      }}
                    >
                      {pack.title}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTimeIcon sx={{ color: 'var(--primary-color)' }} />
                        <Typography sx={{ color: 'var(--text-dark)', fontWeight: 500 }}>{pack.duration}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PlaceIcon sx={{ color: 'var(--primary-color)' }} />
                        <Typography sx={{ color: 'var(--text-dark)', fontWeight: 500 }}>{pack.locations}</Typography>
                      </Box>
                    </Box>

                    <Typography 
                      sx={{ 
                        mb: 3,
                        color: 'var(--text-dark)',
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                      }}
                    >
                      {pack.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'var(--primary-color)',
                          mb: 2,
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 600
                        }}
                      >
                        Highlights
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {pack.highlights.map((highlight, i) => (
                          <Chip 
                            key={i}
                            label={highlight}
                            sx={{
                              bgcolor: 'rgba(0, 166, 180, 0.1)',
                              color: 'var(--primary-color)',
                              mb: 1,
                              fontWeight: 500,
                              '&:hover': {
                                bgcolor: 'rgba(0, 166, 180, 0.2)'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                    <Button
                      component={Link}
                      to={pack.route || `/packages/${pack.title.toLowerCase().replace(/\s+days?\s+/g, '-days-').replace(/\s+/g, '-').replace(/\b(north|south)\s+island\b/g, '$1-island')}`}
                      variant="outlined"
                      sx={{
                        color: '#00A6B4',
                        borderColor: '#00A6B4',
                        px: 4,
                        py: 1.5,
                        flex: 1,
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        mt: 'auto',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#008C99',
                          color: '#008C99',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      component={Link}
                      to={`/book-online?package=${pack.title.toLowerCase().replace(/\s+days?\s+/g, '-days-').replace(/\s+/g, '-').replace(/\b(north|south)\s+island\b/g, '$1-island')}`}
                      variant="contained"
                      sx={{
                        bgcolor: '#00A6B4',
                        color: '#FFFFFF',
                        px: 4,
                        py: 1.5,
                        flex: 1,
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        mt: 'auto',
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Packages;