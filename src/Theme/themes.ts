import { createTheme } from'@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: 'Impact, Haettenschweiler, sans-serif'
    },
    palette: {
        primary: {
            main: 'rgb(140,51,66)'
        },
        secondary: {
            main: '#242625',
            light: '#1B2929'
        },
        info: {
            main: '#CF851B'
        }
    }
})