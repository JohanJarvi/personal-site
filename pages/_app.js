import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "../styles/globals.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#154d5b",
    },
    secondary: {
      main: "#00213b",
    },
    info: {
      main: "#0075b1",
    },
    text: {
      primary: "#e2dbdb",
      secondary: "#f7eac6",
    },
    background: {
      default: "#f7eac6",
      paper: "#154d5b",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
