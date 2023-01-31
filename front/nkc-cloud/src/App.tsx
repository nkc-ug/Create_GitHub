import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import PageRouter from "./router/PageRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createContext, useState } from "react";
import { FileAboutContextType, FileAboutType } from "./util/tsType";

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
        dark: '#E4DFCF'
      }
      // https://colorhunt.co/palette/fffbeb495579263159251749
  }
})

export const FileAboutContext = createContext<FileAboutContextType>({} as FileAboutContextType);

function App() {
  const [FileAbout, setFileAbout] = useState<FileAboutType>({
    title: "",
    comment: "",
    fileName: "",
    key: "",
    limit: "",
    url: ""
  });

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline/>
        <FileAboutContext.Provider value={{state:FileAbout, setState:setFileAbout}}>
          <PageRouter/>
        </FileAboutContext.Provider>
    </ThemeProvider>
  );
}

export default App;
