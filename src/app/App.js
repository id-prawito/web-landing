import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import GlobalStyles from "../config/GlobalStyles";
import ThemeContext from "../config/ThemeContext.js";
import { RouteSite } from "../config/Route";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./app.css";
import Header from "../components/header";
import Footer from "../components/footer";

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
