import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Divider,
  Card,
  CardContent
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const tourPackages = [
  {
    title: "Premium New Zealand",
    duration: "15 Days",
    price: "$13,734",
  },
  {
    title: "North Island Adventure",
    duration: "8 Days",
    price: "$7,012",
  },
  {
    title: "South Island Explorer",
    duration: "8 Days",
    price: "$5,500",
  },
  {
    title: "Premium South Island",
    duration: "10 Days",
    price: "$9,136",
  },
  {
    title: "14 Day New Zealand",
    duration: "14 Days",
    price: "$9,850",
  },
  {
    title: "Sri Lankan Explorer",
    duration: "8 Days",
    price: "$5,500",
  },
  {
    title: "Premium Sri Lanka",
    duration: "14 Days",
    price: "$8,450",
  },
  {
    title: "Sri Lankan Discovery",
    duration: "15 Days",
    price: "$6,531",
  }
];

const BookOnline = () => {
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [travelDate, setTravelDate] = useState(null);
  const [travelers, setTravelers] = useState('');
  const [formType, setFormType] = useState('package'); // 'package' or 'custom'

  // Form fields for package booking
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Additional fields for custom inquiry
  const [preferredDestinations, setPreferredDestinations] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const packageName = params.get('package');
    if (packageName) {
      setSelectedPackage(packageName.replace(/-/g, ' '));
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPackage.toLowerCase() === 'premium new zealand') {
      window.location.href = 'https://buy.stripe.com/9AQ4k46SE45zgve7sv';
    } else if (selectedPackage.toLowerCase() === 'north island adventure') {
      window.location.href = 'https://buy.stripe.com/5kA8AkccY9pTfracMQ';
    } else if (selectedPackage.toLowerCase() === 'south island explorer') {
      window.location.href = 'https://buy.stripe.com/eVa2bW5OA9pTa6Q7sx';
    } else if (selectedPackage.toLowerCase() === 'premium south island') {
      window.location.href = 'https://buy.stripe.com/00g17Sgteby12EocMS';
    } else if (selectedPackage.toLowerCase() === '14 day new zealand') {
      window.location.href = 'https://buy.stripe.com/aEU4k40ug45z4Mw8wD';
    } else if (selectedPackage.toLowerCase() === 'sri lankan explorer') {
      window.location.href = 'https://buy.stripe.com/bIYaIsgte8lP1AkcMU';
    } else if (selectedPackage.toLowerCase() === 'premium sri lanka') {
      window.location.href = 'https://buy.stripe.com/cN217SccYby17YI3cl';
    } else if (selectedPackage.toLowerCase() === 'sri lankan discovery') {
      window.location.href = 'https://buy.stripe.com/4gw8Aka4Q9pT3IseV4';
    } else {
      // Add your form submission logic here
      console.log('Form submitted');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ bgcolor: '#F5FAFA', color: 'var(--text-dark)', py: 8, minHeight: '100vh', position: 'relative' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                width: '80px',
                height: '3px',
                backgroundColor: 'var(--gold)'
              }
            }}
          >
            Book Your Adventure
          </Typography>

          <Grid container spacing={4}>
            {/* Booking Type Selection */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
                <Button
                  variant={formType === 'package' ? 'contained' : 'outlined'}
                  onClick={() => setFormType('package')}
                  sx={{
                    bgcolor: formType === 'package' ? '#00A6B4' : 'transparent',
                    color: formType === 'package' ? '#FFFFFF' : '#00A6B4',
                    borderColor: '#00A6B4',
                    px: 4,
                    py: 1.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: formType === 'package' ? '#008C99' : 'rgba(0, 166, 180, 0.1)',
                      color: formType === 'package' ? '#FFFFFF' : '#00A6B4',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  Book a Package
                </Button>
                <Button
                  variant={formType === 'custom' ? 'contained' : 'outlined'}
                  onClick={() => setFormType('custom')}
                  sx={{
                    bgcolor: formType === 'custom' ? '#00A6B4' : 'transparent',
                    color: formType === 'custom' ? '#FFFFFF' : '#00A6B4',
                    borderColor: '#00A6B4',
                    px: 4,
                    py: 1.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: formType === 'custom' ? '#008C99' : 'rgba(0, 166, 180, 0.1)',
                      color: formType === 'custom' ? '#FFFFFF' : '#00A6B4',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  Custom Inquiry
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Card sx={{ 
                bgcolor: 'white', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 2,
                overflow: 'visible'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      {formType === 'package' && (
                        <Grid item xs={12}>
                          <FormControl fullWidth variant="outlined" sx={{ minWidth: 200 }}>
                            <InputLabel id="package-select-label" sx={{ 
                              color: 'var(--text-dark)',
                              '&.Mui-focused': {
                                color: 'var(--primary-color)'
                              }
                            }}>Select Package</InputLabel>
                            <Select
                              labelId="package-select-label"
                              label="Select Package"
                              value={selectedPackage}
                              onChange={(e) => setSelectedPackage(e.target.value)}
                              sx={{
                                '& .MuiSelect-select': {
                                  color: 'var(--text-dark)',
                                  padding: '12px 16px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 2
                                },
                                '& .MuiInputLabel-root': {
                                  color: 'var(--text-dark)'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(0,0,0,0.23)'
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'var(--primary-color)'
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'var(--primary-color)'
                                },
                                '& .MuiSelect-icon': {
                                  color: 'var(--primary-color)'
                                }
                              }}
                              MenuProps={{
                                PaperProps: {
                                  sx: {
                                    bgcolor: 'white',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    borderRadius: '8px',
                                    mt: 1,
                                    zIndex: 9999,
                                    position: 'absolute'
                                  }
                                },
                                anchorOrigin: {
                                  vertical: 'bottom',
                                  horizontal: 'left'
                                },
                                transformOrigin: {
                                  vertical: 'top',
                                  horizontal: 'left'
                                }
                              }}
                            >
                              {tourPackages.map((pack) => (
                                <MenuItem 
                                  key={pack.title} 
                                  value={pack.title}
                                  sx={{
                                    color: 'var(--text-dark)',
                                    padding: '12px 20px',
                                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                                    '&:last-child': {
                                      borderBottom: 'none'
                                    },
                                    '&:hover': {
                                      bgcolor: 'rgba(0, 166, 180, 0.08)'
                                    },
                                    '&.Mui-selected': {
                                      bgcolor: 'rgba(0, 166, 180, 0.15)',
                                      '&:hover': {
                                        bgcolor: 'rgba(0, 166, 180, 0.2)'
                                      }
                                    }
                                  }}
                                >
                                  <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    width: '100%', 
                                    alignItems: 'center'
                                  }}>
                                    <Typography 
                                      sx={{ 
                                        fontWeight: 500,
                                        color: 'var(--text-dark)',
                                        fontSize: '1rem'
                                      }}
                                    >
                                      {pack.title}
                                    </Typography>
                                    <Box sx={{ 
                                      display: 'flex', 
                                      alignItems: 'center',
                                      gap: 2
                                    }}>
                                      <Typography 
                                        sx={{ 
                                          color: 'var(--text-dark)',
                                          opacity: 0.7,
                                          fontSize: '0.9rem'
                                        }}
                                      >
                                        {pack.duration}
                                      </Typography>
                                      <Typography 
                                        sx={{ 
                                          color: 'var(--primary-color)',
                                          fontWeight: 600,
                                          fontSize: '0.95rem'
                                        }}
                                      >
                                        {pack.price}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      )}

                      {/* Common Fields */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0,0,0,0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '& input': {
                                color: 'var(--text-dark)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              color: 'var(--text-dark)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0,0,0,0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '& input': {
                                color: 'var(--text-dark)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              color: 'var(--text-dark)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0,0,0,0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '& input': {
                                color: 'var(--text-dark)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              color: 'var(--text-dark)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DatePicker
                          label="Travel Date"
                          value={travelDate}
                          onChange={(newValue) => setTravelDate(newValue)}
                          sx={{
                            width: '100%',
                            '& .MuiInputLabel-root': {
                              color: 'var(--text-dark)'
                            },
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0,0,0,0.23)'
                              },
                              '&:hover fieldset': {
                                borderColor: 'var(--primary-color)'
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'var(--primary-color)'
                              },
                              '& input': {
                                color: 'var(--text-dark)'
                              }
                            }
                          }}
                          renderInput={(params) => (
                            <TextField 
                              {...params} 
                              fullWidth
                              sx={{
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
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Number of Travelers"
                          type="number"
                          value={travelers}
                          onChange={(e) => setTravelers(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0,0,0,0.23)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'var(--primary-color)',
                              },
                              '& input': {
                                color: 'var(--text-dark)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              color: 'var(--text-dark)'
                            }
                          }}
                        />
                      </Grid>

                      {/* Custom Inquiry Fields */}
                      {formType === 'custom' && (
                        <>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Preferred Destinations"
                              value={preferredDestinations}
                              onChange={(e) => setPreferredDestinations(e.target.value)}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(0,0,0,0.23)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '& input': {
                                    color: 'var(--text-dark)'
                                  }
                                },
                                '& .MuiInputLabel-root': {
                                  color: 'var(--text-dark)'
                                }
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Preferred Duration"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(0,0,0,0.23)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '& input': {
                                    color: 'var(--text-dark)'
                                  }
                                },
                                '& .MuiInputLabel-root': {
                                  color: 'var(--text-dark)'
                                }
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Budget Range"
                              value={budget}
                              onChange={(e) => setBudget(e.target.value)}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(0,0,0,0.23)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '& input': {
                                    color: 'var(--text-dark)'
                                  }
                                },
                                '& .MuiInputLabel-root': {
                                  color: 'var(--text-dark)'
                                }
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              multiline
                              rows={4}
                              label="Additional Information"
                              value={additionalInfo}
                              onChange={(e) => setAdditionalInfo(e.target.value)}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: 'rgba(0,0,0,0.23)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'var(--primary-color)',
                                  },
                                  '& textarea': {
                                    color: 'var(--text-dark)'
                                  }
                                },
                                '& .MuiInputLabel-root': {
                                  color: 'var(--text-dark)'
                                }
                              }}
                            />
                          </Grid>
                        </>
                      )}

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{
                            bgcolor: '#00A6B4',
                            color: '#FFFFFF',
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            '&:hover': {
                              bgcolor: '#008C99',
                              transform: 'translateY(-2px)',
                              transition: 'all 0.3s ease'
                            }
                          }}
                        >
                          {formType === 'package' ? 'Book Now' : 'Send Inquiry'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default BookOnline;