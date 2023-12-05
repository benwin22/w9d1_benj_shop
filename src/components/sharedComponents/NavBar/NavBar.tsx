import * as _React from 'react';
import { useState } from 'react';//useState is a React Hook
import {
    Button,
    Drawer,
    ListItemButton,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Stack,//flexbox
    Typography,
    Divider,//this is literally just a line
    CssBaseline,
    Box,//this is just a div
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';;
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';;
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';;
import StoreIcon from '@mui/icons-material/Store';;


//internal imports
import { theme } from '../../../Theme/themes';

// building a CSS object/dictionary to refernce inside our html for styling
const drawerWidth = 200;

const navStyles = {
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp, //number of mls
            duration: theme.transitions.duration.leavingScreen, // string calculation of the duration
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transitions: theme.transitions.create(['margin', 'width'],{
            easing: theme.transitions.easing.easeOut,//number
            duration: theme.transitions.duration.enteringScreen//cacl of duration
        })
    },
    menuButton: {
        marginRights: theme.spacing(2)//default to 8px * 2 = 16px
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: theme.spacing(1),
        // using the spread operator ... to grabe all the properties from the default toobar in theme
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    toolbar: {
        display: 'flex'
    },
    toolbarButton: {
        marginLeft: 'auto',
        color: theme.palette.primary.contrastText
    },
    signInStack: {
        position: 'absolute',
        top: '20%',
        right: '50px'
    }
}

export const NavBar = () => {
    // setup all your hooks & variables
    const [ open, setOpen ] = useState(false)//setting initaial state to false as in NOT open
    const navigate = useNavigate();

    // 2 functions to help us set our hook
    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }
    // dictionary/object for our NavLinks

    const navLinks = [
        {
            text: 'Home',
            icon: <DirectionsCarIcon/>,
            onClick: () => navigate('/')
        },
        {
            text: 'Shop',
            icon: <RequestQuoteIcon/>,
            onClick: () => navigate('/shop')
        },
        {
            text: 'Cart',
            icon: <AddShoppingCartIcon/>,
            onClick: () => navigate('/cart')
        }
    ]

    return(
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar
                sx={ open ? navStyles.appBarShift: navStyles.appBar}
                position = 'fixed'
                
                >
                    <Toolbar sx={ navStyles.toolbar}>
                        <IconButton 
                            color='inherit'
                            aria-label='open drawer'
                            onClick = { handleDrawerOpen }
                            edge='start'
                            sx = { open ? navStyles.hide : navStyles.menuButton}
                        >
                            <StoreIcon/>
                        </IconButton>
                    </Toolbar>
                    <Stack 
                        direction='row' 
                        justifyContent='space-between' 
                        alignItems='center'
                        sx = { navStyles.signInStack}>
                            <Typography variant='body2' sx={{color: 'inherit'}}>
                                4R user
                            </Typography>
                            <Button 
                                variant='contained'
                                color = 'info'
                                size = 'large'
                                sx = {{ marginLeft: '20px'}}
                            
                            >
                                Sign In
                            </Button>


                        </Stack>

            </AppBar>
            <Drawer 
                sx= { open ? navStyles.drawer : navStyles.hide}
                variant = 'persistent'
                anchor = 'left'
                open = {open} //either true or false
            
            >
                <Box sx = {navStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <RequestQuoteIcon/>
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    { navLinks.map( (item) => {
                        // using variable deconstruction to deconstruct our object/dictionary
                        const { text, icon, onClick } = item;
                        return (
                            <ListItemButton key={text} onClick={onClick}>
                                <ListItemText primary={text}/>
                                { icon }
                            </ListItemButton>
                        )


                    })}
                </List>

            </Drawer>
        </Box>
    )

}