import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

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

    </ThemeProvider>
  );
}

export default App;
