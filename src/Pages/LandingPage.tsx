import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import DarkmodeSwitch from "../Items/DarkmodeSwitch"
import HomePage from './HomePage';

interface LandingPageProps {
    darkMode: boolean
    toggleDarkMode: () => void
}


let LandingPage = (props: LandingPageProps) => {
    let { darkMode, toggleDarkMode } = props

    return (
        <Box height="100%" sx={{ backgroundImage: !darkMode ? `linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )` : "linear-gradient( 109.6deg,  rgba(15,2,2,1) 11.2%, rgba(36,163,190,1) 91.1% )", backgroundSize: 'cover' }}>
            <>
                <AppBar position="relative" color="primary">
                    <Toolbar variant="dense" disableGutters >
                        <Box width="100%" ml="62px">
                            <Typography color="inherit" align='center' sx={{ ml: '2vmin', flex: 1 }}>
                                Zotoolkit
                            </Typography>
                        </Box>
                        <DarkmodeSwitch checked={darkMode} onClick={toggleDarkMode} sx={{ m: '1vmin' }} />
                    </Toolbar>
                </AppBar>
                <HomePage />
            </>
        </Box >
    )
}

export default LandingPage
