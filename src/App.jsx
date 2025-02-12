import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import BookOnline from './pages/BookOnline';
import Footer from './components/Footer';
import FourteenDayNewZealand from './pages/packages/FourteenDayNewZealand';
import PremiumNewZealand from './pages/packages/PremiumNewZealand';
import PremiumSouthIsland from './pages/packages/PremiumSouthIsland';
import NorthIslandAdventure from './pages/packages/NorthIslandAdventure';
import SouthIslandExplorer from './pages/packages/SouthIslandExplorer';
import SriLankanDiscovery from './pages/packages/SriLankanDiscovery';
import PremiumSriLanka from './pages/packages/PremiumSriLanka';
import SriLankanExplorer from './pages/packages/SriLankanExplorer';

function App() {
  return (
    <Router>
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'transparent',
        width: '100%'
      }}>
        <Navbar />
        <Box sx={{ pt: '80px' }}>
          <Container 
            maxWidth="lg" 
            sx={{ 
              flex: 1,
              px: { xs: 2, sm: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/14-days-new-zealand" element={<FourteenDayNewZealand />} />
              <Route path="/packages/premium-new-zealand" element={<PremiumNewZealand />} />
              <Route path="/packages/premium-south-island" element={<PremiumSouthIsland />} />
              <Route path="/packages/north-island-adventure" element={<NorthIslandAdventure />} />
              <Route path="/packages/south-island-explorer" element={<SouthIslandExplorer />} />
              <Route path="/packages/sri-lankan-discovery" element={<SriLankanDiscovery />} />
              <Route path="/packages/premium-sri-lanka" element={<PremiumSriLanka />} />
              <Route path="/packages/sri-lankan-explorer" element={<SriLankanExplorer />} />
              <Route path="/book-online" element={<BookOnline />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;