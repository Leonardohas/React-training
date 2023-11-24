import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MuiButton({variant, buttonText, primaryColor}) {

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
                <Button variant={variant} color="colors" onClick={test}>{buttonText}</Button>
            </Stack>
        </ThemeProvider>
    )
};

export default MuiButton
