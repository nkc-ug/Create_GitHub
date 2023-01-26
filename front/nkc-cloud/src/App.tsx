import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import PageRouter from "./router/PageRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createContext, useState } from "react";

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

type FileAboutType = {
  title: string,
  comment: string,
  faileName: string,
  key: string,
  uri: string
}

type StateContextType = {
  state : string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export const FileAboutTitleContext = createContext<StateContextType>({} as StateContextType);
export const FileAboutCommentContext = createContext<StateContextType>({} as StateContextType);
export const FileAboutFileNameContext = createContext<StateContextType>({} as StateContextType);
export const FileAboutLimitContext = createContext<StateContextType>({} as StateContextType);
export const FileAboutKeyContext = createContext<StateContextType>({} as StateContextType);
export const FileAboutUrlContext = createContext<StateContextType>({} as StateContextType);

function App() {
  const [FileAboutTitle, setFileAboutTitle] = useState("");
  const [FileAboutComment, setFileAboutComment] = useState("");
  const [FileAboutFileName, setFileAboutFileName] = useState("");
  const [FileAboutLimit, setFileAboutLimit] = useState("");
  const [FileAboutKey, setFileAboutKey] = useState("");
  const [FileAboutUrl, setFileAboutUrl] = useState("");

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline/>
        <FileAboutTitleContext.Provider value={{state:FileAboutTitle, setState:setFileAboutTitle}}>
          <FileAboutCommentContext.Provider value={{state:FileAboutComment, setState:setFileAboutComment}}>
            <FileAboutFileNameContext.Provider value={{state:FileAboutFileName, setState:setFileAboutFileName}}>
              <FileAboutLimitContext.Provider value={{state:FileAboutLimit, setState:setFileAboutLimit}}>
                <FileAboutKeyContext.Provider value={{state:FileAboutKey, setState:setFileAboutKey}}>
                  <FileAboutUrlContext.Provider value={{state:FileAboutUrl, setState:setFileAboutUrl}}>
                    <PageRouter/>
                  </FileAboutUrlContext.Provider>
                </FileAboutKeyContext.Provider>
              </FileAboutLimitContext.Provider>
            </FileAboutFileNameContext.Provider>
          </FileAboutCommentContext.Provider>
        </FileAboutTitleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
