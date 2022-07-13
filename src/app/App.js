import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import GlobalStyles from "../config/GlobalStyles";
import ThemeContext from "../config/ThemeContext.js";
import { RouteSite } from "../config/Route";

import "./app.css";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter basename="web-landing">
                <ThemeProvider theme={{ theme }}>
                    <GlobalStyles />
                    <RouteSite />
                </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;