
import './App.css';
import HomePage from './pages/HomePage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
