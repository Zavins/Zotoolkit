import { Box, Grid } from '@mui/material';
import { ZotCourseIcon, ZotisticsIcon, AutoWebregIcon, CanvasIcon } from '../Items/IconButtons/IconButtons';
import DockContext from '../Contexts/DockContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

let HomePage = () => {
    let desktopIcons = [<ZotCourseIcon />, <ZotisticsIcon />, <AutoWebregIcon />, <CanvasIcon />]
    let dockIcons = [<ZotCourseIcon />, <ZotCourseIcon />,  <ZotisticsIcon />, <AutoWebregIcon />, <CanvasIcon />]
    return (
        <Box p="1rem" sx={{ flexGrow: 1 }} > 
            <Grid container rowSpacing="4vmin" justifyContent="flex-start" alignContent='flex-start'>
                {[<ZotCourseIcon />, <ZotisticsIcon />, <AutoWebregIcon />, <CanvasIcon />].map((element) => (
                    <Grid item xs={3} sm={2} md={2} lg={2} key={element.key} sx={{ transition: "all .5s ease-in-out" }}>
                        {element}
                    </Grid>
                ))}
            </Grid>
            <Box position="fixed"
                sx={{
                    top: 'auto',
                    left: '0',
                    right: '0',
                    bottom: '1rem',
                    height: { xs: '5.4rem', sm: '6rem', md: '6rem', lg: '8rem', xl: '8rem' },
                    width: '100%',
                }}>
                <AppBar elevation={0} position="relative"
                    sx={{
                        p: '0',
                        background: 'rgba(200, 200, 200 ,0.50)',
                        backdropFilter: 'blur(6px)',
                        width: { xs: '21rem', sm: '36rem', md: '36rem', lg: '60rem', xl: '60rem' },
                        margin: 'auto',
                        height: 'inherit',
                        justifyContent: 'center',
                        borderRadius: '2rem'
                    }}
                >
                    <Toolbar>
                        <Box sx={{ overflow: "scroll", scrollbarWidth: 'none', flexGrow: 1, borderRadius: '1rem' }}

                        >
                            <Grid container spacing={{ xs: 2, sm: 2 }} sx={{ flexWrap: 'nowrap' }} >
                                {dockIcons.map((element) => (
                                    <Grid item xs={3} sm={12/dockIcons.length} md={12/dockIcons.length} lg={12/dockIcons.length} key={element.key} sx={{ transition: "all .5s ease-in-out"}}>
                                        <DockContext.Provider value={{ onDock: true }}>
                                            {element}
                                        </DockContext.Provider>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    )
}

export default HomePage