import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button 
} from '@mui/material';
import { Link } from 'react-router-dom';

const tourPackages = [
  
  {
    title: "Premium New Zealand",
    duration: "15 Days",
    price: "$13,734",
    description: "Discover the best of North Island with exclusive experiences",
    image: "public/images/legendary-newzealand.jpeg"
  },
  {
    title: "14 Days New Zealand",
    duration: "14 Days",
    price: "$9,850",
    description: "Experience the legendary landscapes from Fiordland to Auckland",
    image: "public/images/legendary-newzealand.jpeg"
  },
  {
    title: "Premium South Island",
    duration: "10 Days",
    price: "$9,136",
    description: "Discover the majestic beauty of New Zealand's South Island",
    image: "public/images/premiumsouthisland.jpeg"
  },
  {
    title: "North Island Adventure",
    duration: "8 Days",
    price: "$7,012",
    description: "Explore volcanic landscapes and Maori culture",
    image: "public/images/northisland.jpeg"
  },
  {
    title: "South Island Explorer",
    duration: "8 Days",
    price: "$5,500",
    description: "Discover the natural wonders from Christchurch to Queenstown",
    image: "public/images/southislandexplorer.jpeg"
  },
  {
    title: "Sri Lankan Discovery",
    duration: "15 Days",
    price: "$6,531",
    description: "Experience the cultural heritage and natural wonders of Sri Lanka",
    image: "public/images/srilankandiscovery.jpeg"
  },
  {
    title: "Premium Sri Lanka",
    duration: "14 Days",
    price: "$8,450",
    description: "Indulge in luxury experiences across Sri Lanka's finest destinations",
    image: "public/images/premiumsrilanka.jpeg"
  },
  {
    title: "Sri Lankan Explorer",
    duration: "9 Days",
    price: "$5,680",
    description: "Discover the cultural heritage and natural wonders of Sri Lanka",
    image: "public/images/srilankanexplorer.jpeg"
  }
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
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
        <video
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            left: 0,
            top: 0
          }}
        >
          <source src="/videos/kiwiescape.mp4" type="video/mp4" />
        </video>
        
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 4
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '5rem' },
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              lineHeight: 1.2,
              mb: 4,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Discover New Zealand<br />
            with Kiwi Escape Tours
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              color: 'white',
              mb: 6,
              maxWidth: '800px',
              opacity: 0.9
            }}
          >
            Experience the breathtaking landscapes and rich culture of Aotearoa
          </Typography>
          <Button
            component={Link}
            to="/packages"
            variant="contained"
            sx={{
              bgcolor: '#00A6B4',
              color: '#FFFFFF',
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#008C99',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }
            }}
          >
            Explore Our Tours
          </Button>
        </Box>
      </Box>

      {/* Feature Buttons with Icons */}
      <Container maxWidth="lg" sx={{ mt: -5, mb: 8, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          {[
            { text: 'EXPLORE', image: '/images/explore.jpg', desc: 'Discover hidden gems' },
            { text: 'ADVENTURE', image: '/images/adventure.jpg', desc: 'Thrilling experiences' },
            { text: 'RELAX', image: '/images/relax.jpg', desc: 'Peaceful retreats' }
          ].map((item) => (
            <Grid item xs={12} md={4} key={item.text}>
              <Box
                sx={{
                  bgcolor: 'rgba(255,255,255,0.95)',
                  borderRadius: 0.125,
                  p: 0.5,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    '& .feature-image': {
                      transform: 'scale(1.03)'
                    }
                  }
                }}
              >
                <Box
                  className="feature-image"
                  component="img"
                  src={item.image}
                  alt={item.text}
                  sx={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: 0.125,
                    mb: 0.75,
                    transition: 'transform 0.3s ease'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    color: '#000000',
                    mb: 1
                  }}
                >
                  {item.text}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#000000',
                    opacity: 0.8
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Tour Packages section */}
      <Box sx={{ bgcolor: '#F5FAFA', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 6,
              color: '#000000',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 400,
              textAlign: 'center',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                backgroundColor: 'var(--gold)'
              }
            }}
          >
            Featured Tours
          </Typography>
          <Grid container spacing={4}>
            {tourPackages.map((pack, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={pack.image}
                    alt={pack.title}
                    sx={{ 
                      objectFit: 'cover',
                      objectPosition: 'center',
                      width: '100%'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      sx={{ 
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.75rem',
                        color: 'var(--primary-color)',
                        mb: 2,
                        fontWeight: 600
                      }}
                    >
                      {pack.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: 'var(--text-dark)',
                        opacity: 0.8
                      }}
                    >
                      {pack.description}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 'auto'
                    }}>
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: 'var(--accent-color)',
                            fontWeight: 600
                          }}
                        >
                          {pack.price}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'var(--text-dark)',
                            opacity: 0.7
                          }}
                        >
                          {pack.duration}
                        </Typography>
                      </Box>
                      <Button 
                        component={Link}
                        to={`/packages/${pack.title.toLowerCase().replace(/\s+days?\s+/g, '-days-').replace(/\s+/g, '-').replace(/\b(north|south)\s+island\b/g, '$1-island')}`}
                        variant="contained"
                        sx={{
                          bgcolor: '#00A6B4',
                          color: '#FFFFFF',
                          px: 4,
                          py: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: '#008C99',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;