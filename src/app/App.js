import { GlobalStyles, ThemeContext } from "../config/index";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "../components";
import { RouteSite } from "../app/route";
import { useContext } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter basename="web-landing">
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <Header />
        <RouteSite />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
