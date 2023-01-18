import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import PageRouter from "./router/PageRouter";

const mainTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Noto Sans JP"', 
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(',')
  }
})

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline/>
      <PageRouter/>
    </ThemeProvider>
  );
}

export default App;
