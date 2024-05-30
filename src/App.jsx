import styled, { ThemeProvider } from "styled-components"
import {darkTheme} from "./utils/Themes";
import Navbar from "./Components/Navbar";
import {BrowserRouter} from "react-router-dom"
import './index.css';
import Hero from "./Components/Sections/Hero";

const Body = styled.div`
  background-color: ${({ theme})=> theme.bg};
  width: 100%;
  height: 90vh;
  overflow-x:hidden;
  position: relative;

`;

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Navbar/>
      <Body>
        <Hero/>
      </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
