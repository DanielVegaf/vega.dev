import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';

import { Container } from './styles/ContainerStyles'
import { StyledHeader, LinkTitle, Title, HeaderLinks, Links } from './styles/NavegationStyles'

function App() {
  return (
    <Container>
      <Router>
        <StyledHeader>
          <LinkTitle to="/">
            <Title>dev</Title>
          </LinkTitle>
          <HeaderLinks>
            <Links to="/">Home</Links>
            <Links to="/portfolio">Portfolio</Links>
            <Links to="/about">About</Links>
          </HeaderLinks>
        </StyledHeader>
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
