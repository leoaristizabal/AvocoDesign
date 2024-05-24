import styled, { ThemeProvider } from "styled-components"
import {darkTheme} from "./utils/Themes";
import Navbar from "./Components/Navbar";
import {BrowserRouter} from "react-router-dom"
import './index.css';

const Body = styled.div`
  background-color: ${({ theme})=> theme.bg};
  width: 100%;
  overflow-x:hidden;
  position: relative;

`;

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Navbar/>
      <Body>
      </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
