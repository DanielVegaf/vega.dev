import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';

import {
  Container,
  Wrapper, 
  LogoContainer,
  BackHome,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon
} from './styles/NavegationStyles'

import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from 'react';

function App() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <Container>
      <Router>
        <Wrapper>
        
          <LogoContainer>
            <BackHome to="/">dev</BackHome>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMenu(!showMenu) }>
            { showMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMenu}>
            <MenuItem>
              <MenuItemLink
                to="/" 
                onClick={() => setShowMenu(!showMenu) }>
                Home
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/portfolio" 
                onClick={() => setShowMenu(!showMenu) }>
                Portfolio
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/about" 
                onClick={() => setShowMenu(!showMenu) }>
                About
              </MenuItemLink>
            </MenuItem>
          </Menu>

        </Wrapper>
        <main>
          <Routes>
            <Route exact path="/about" element={<AboutPage />}> </Route>
            <Route exact path="/portfolio" element={<PortfolioPage />}> </Route>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </main>
      </Router>
    </Container>
  );
}

export default App;
