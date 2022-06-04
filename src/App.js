import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';

import { HomePage } from './components/home/HomePage';
import { PortfolioPage } from './components/portfolio/PortfolioPage';
import { AboutPage } from './components/about/AboutPage';

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

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Router>
        <Wrapper>

          <LogoContainer>
            <BackHome to="/">dev</BackHome>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu
            onClick={() => setShowMenu(!showMenu)}
            open={showMenu}
          >
            <MenuItem>
              <MenuItemLink
                className={({ isActive}) => isActive ? "active" : ""}
                to="/"
                onClick={() => setShowMenu(!showMenu)}>
                Home
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                className={({ isActive}) => isActive ? "active" : ""}
                to="/portfolio"
                onClick={() => setShowMenu(!showMenu)}>
                Portfolio
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                className={({ isActive}) => isActive ? "active" : ""}
                to="/about"
                onClick={() => setShowMenu(!showMenu)}>
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
