import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./utils/Themes";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom"
import Hero from "./Components/Sections/Hero";
import Servicios from "../src/Components/Sections/Servicios"
import Nosotros from "./Components/Sections/Nosotros";
import Testimonio from "./Components/Sections/Testimonio";
import StartCanvas from "./Components/Canvas/Stars"
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x:hidden;
  position: relative;

`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(200, 106, 18, 0.15) 0%,
      rgba(200, 106, 18, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(175, 220, 52, 0) 50%,
      rgba(229, 255, 127, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StartCanvas/>
          <div>
            <Wrapper>
              <Hero/>
              <Servicios/>
              <Nosotros/>
              <Projects/>
              <Testimonio/>
               <Contact/>
            </Wrapper>
          </div>
           
      <Footer/>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
