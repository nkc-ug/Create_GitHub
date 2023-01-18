import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import PageRouter from "./router/PageRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const mainTheme = createTheme({
  typography: {
    fontFamily:[
      'Roboto',
      '"Noto Sans JP"', 
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(',')
  },
  palette:{
      primary:{
        main: '#263159',
        light: '#495579',
        dark: '#251749'
      },
      secondary:{
        main: '#FFFBEB',
        dark: '#ccc8b9'
      }
      // https://colorhunt.co/palette/fffbeb495579263159251749
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
