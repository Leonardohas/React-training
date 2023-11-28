import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MuiButton({buttonText, primaryColor, handleclick}) {

    const theme = createTheme({
        palette: {
          colors: {
            main: primaryColor,
          },
        },
      });

        function test() {            
            console.log('Button clicked');
        };

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant='contained' color="colors" onClick={handleclick}>{buttonText}</Button>
            </Stack>
        </ThemeProvider>
    )
};

export default MuiButton
