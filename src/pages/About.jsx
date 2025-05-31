import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const About = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('kJw40HqQbLrKs5hQu');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      await emailjs.send(
        'service_le3ida1',
        'template_dvnrlt1',
        templateParams
      );

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <Box sx={{ bgcolor: '#F5FAFA', color: 'var(--text-dark)', minHeight: 'calc(100vh - 80px)' }}>
      <Container maxWidth="lg">
        {/* Add Image Banner */}
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
            src="/images/about-banner.png"
            alt="New Zealand Landscape"
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

        <Grid container spacing={8}>
          {/* About Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 4,
                position: 'relative',
                color: '#000000',
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
              About Us
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#000000'
              }}
            >
              Kiwi Escape Tours is a New Zealand-based travel company offering unforgettable guided tours across the country. We specialize in customized itineraries, covering must-visit destinations like Auckland, Rotorua, Taupo, Queenstown, and more.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#000000'
              }}
            >
              At Kiwi Escape Tours, we are passionate about creating memorable experiences for our clients. Our team is dedicated to crafting unique travel itineraries tailored to your preferences, ensuring a perfect blend of adventure and leisure.
            </Typography>

            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  mb: 2,
                  color: 'var(--primary-color)',
                  fontWeight: 600
                }}
              >
                Visit Us
              </Typography>
              <Typography sx={{ mb: 1, color: '#000000' }}>86 Newlands Road Newlands</Typography>
              <Typography sx={{ mb: 1, color: '#000000' }}>Wellington, New Zealand</Typography>
              <Typography sx={{ mb: 1, color: '#000000' }}>info@kiwiescapetours.co.nz</Typography>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: 'white',
                p: 4,
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  mb: 4,
                  color: 'var(--primary-color)',
                  fontWeight: 600
                }}
              >
                Contact Us
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(0,0,0,0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'var(--primary-color)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'var(--primary-color)',
                        }
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(0,0,0,0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'var(--primary-color)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'var(--primary-color)',
                        }
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--primary-color)',
                    }
                  },
                }}
              />

              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--primary-color)',
                    }
                  },
                }}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
                required
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-color)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--primary-color)',
                    }
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#00A6B4',
                  color: '#FFFFFF',
                  py: 1.5,
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#008C99',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;