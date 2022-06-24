import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material'
import { useState } from 'react'
import { ZotCourseIcon, ZotisticsIcon, AutoWebregIcon, CanvasIcon } from '../Items/AppIcons'
import DockContext from '../Contexts/DockContext'
import EditContext from '../Contexts/EditContext'
import IconContext from '../Contexts/IconContext'


//temp
let _desktopIcons = [<CanvasIcon />, <AutoWebregIcon />, <CanvasIcon />, <AutoWebregIcon />, <ZotCourseIcon />, <ZotisticsIcon />, <ZotisticsIcon />]
let _dockIcons = [<AutoWebregIcon />, <AutoWebregIcon />, <AutoWebregIcon />, <ZotCourseIcon />, <ZotisticsIcon />, <ZotisticsIcon />, <ZotisticsIcon />, , <ZotisticsIcon />, <ZotisticsIcon />]

let HomePage = () => {
    let [desktopIcons, setDesktopIcons] = useState(_desktopIcons)
    let [dockIcons, setDockIcons] = useState(_dockIcons)
    let [isEditIcons, setIsEditIcons] = useState(false)

    let removeDesktopIcon = (index: number) =>{
        
        _desktopIcons.splice(index, 1)
        //setDesktopIcons(_desktopIcons => [..._desktopIcons, `${_desktopIcons.length}`])
    }

    let removeDockIcon = (index: number) =>{
        _dockIcons.splice(index, 1)
        setDockIcons(_dockIcons)
    }


    return (
        <EditContext.Provider value={{ isEdit: isEditIcons }}>
            <Button onClick={() => setIsEditIcons(!isEditIcons)}>test</Button>
            <Box p="1rem" sx={{ flexGrow: 1 }} >
                <Grid container rowSpacing="8vmin" justifyContent="flex-start" alignContent='flex-start'>
                    {desktopIcons.map((element, index) => (
                        <Grid item xs={3} sm={2} md={2} lg={2} key={index} sx={{ transition: "all .5s ease-in-out" }} padding="auto">
                            <IconContext.Provider value={{ index: index, callback: removeDesktopIcon}}>
                                {element}
                            </IconContext.Provider>
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
                            width: { xs: '20rem', sm: '36rem', md: '36rem', lg: '63rem', xl: '63rem' },
                            margin: 'auto',
                            height: 'inherit',
                            justifyContent: 'center',
                            borderRadius: '2rem'
                        }}
                    >
                        <Toolbar>
                            <Box sx={{ overflowX: "scroll", scrollbarWidth: 'none', flexGrow: 1, borderRadius: '1rem', paddingY: "0.2rem" }}>
                                <DockContext.Provider value={{ onDock: true }}>
                                    <Grid container sx={{ flexWrap: 'nowrap' }}>
                                        {dockIcons.map((element, index) => (
                                            <Grid item xs={3} sm={3} md={2} lg={1.5} key={index} sx={{ transition: "all .5s ease-in-out" }}>
                                                <IconContext.Provider value={{ index: index, callback: removeDesktopIcon}}>
                                                    {element}
                                                </IconContext.Provider>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </DockContext.Provider>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        </EditContext.Provider>
    )
}

export default HomePage
