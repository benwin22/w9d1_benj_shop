import 'styled-components';
import { Theme } from '@mui/material/styles';

// whenever we refer to styled-compoenents it will auto default to THIS theme module
// we are extending/inheriting the defualt Theme and tweaking it
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}