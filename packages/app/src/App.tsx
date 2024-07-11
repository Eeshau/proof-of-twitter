import { MainPage } from "./pages/MainPage";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { useLocation } from "react-use";
import styled from "styled-components";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Nav from './components/Nav'


const App = () => {
  const { pathname } = useLocation();
  return (
    <Router>
      <div>
        <Nav/>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<>Not found</>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

const Logo = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
`;

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: 12px;
// `;

const DocsLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  underline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
