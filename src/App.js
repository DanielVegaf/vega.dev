import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';

import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/about/AboutPage';

import {
  Container,
  Wrapper,
  LogoContainer,
  BackHome,
  Menu,
  MenuItem,
  MenuItemLink,
  MenuItemCV,
  MobileIcon
} from './styles/NavegationStyles'

import Pdf from './assets/CV-DenilsonVega.pdf'

import { FaTimes, FaBars } from "react-icons/fa";

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Router>
        <Wrapper>

          <LogoContainer>
            <BackHome to="/">V</BackHome>
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
                className={({ isActive }) => isActive ? "active" : ""}
                to="/"
                onClick={() => setShowMenu(!showMenu)}>
                Portfolio
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                className={({ isActive }) => isActive ? "active" : ""}
                to="/about"
                onClick={() => setShowMenu(!showMenu)}>
                About
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemCV
                href={Pdf}
                target="_blank"
                rel='noreferrer'
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={() => setShowMenu(!showMenu)}>
                Curriculum
              </MenuItemCV>
            </MenuItem>
          </Menu>

        </Wrapper>

        <main>
          <Routes>
            <Route exact path="/about" element={<AboutPage />}> </Route>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </main>
      </Router>
    </Container>
  );
}

export default App;
