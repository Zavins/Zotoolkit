import React, { Fragment } from 'react';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import { Clear } from '@mui/icons-material'
import { motion, useAnimation } from "framer-motion"

import { EditAnimation, IdleAnimation } from "../../Animations/IconAnimations"
import DockContext from '../../Contexts/DockContext'
import EditContext from '../../Contexts/EditContext'

interface AppIconBaseProps {
    name: string,
    link: string,
    icon: string,
}

let AppIconBase = (props: AppIconBaseProps) => {
    const { onDock } = React.useContext(DockContext)
    const { isEdit } = React.useContext(EditContext)
    const controls = useAnimation()
    let { name, link, icon } = props

    let openApp = () => {
        isEdit ?? (window.location.href = link)
    }

    isEdit ? controls.start(EditAnimation) : controls.start(IdleAnimation)

    return (
        <Fragment >
            <Box sx={{
                height: { xs: '3.6rem', sm: '4rem', lg: '6rem' },
                width: { xs: '4.5rem', sm: '5.5rem', lg: '7.5rem' },
                my: { xs: '0.35rem', sm: "0.5rem" },
                mx: "auto"
            }}>
                <motion.div animate={controls} style={{
                    height: "inherit",
                    width: "inherit"
                }}>
                    <Paper elevation={0}
                        sx={{
                            margin: 'auto',
                            height: "inherit",
                            width: { xs: '3.6rem', sm: '4rem', lg: "6rem" },
                            borderRadius: { xs: '0.8rem', sm: '1rem', md: '1rem', lg: '1.6rem' },
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#DDDDDD',
                            backgroundImage: `url(${icon})`,
                            backgroundSize: 'cover'
                        }}
                        onClick={() => openApp()}
                    >
                        {isEdit && (<IconButton size="small" sx={{
                            left: { xs: '-0.44rem', sm: '-0.5rem', md: '-0.5rem', lg: '-0.6rem', xl: '-0.6rem' },
                            top: { xs: '-0.55rem', sm: '-0.6rem', md: '-0.6rem', lg: '-0.6rem', xl: '-0.6rem' },
                            height: "34%",
                            width: "34%",
                            background: 'rgba(200, 200, 200 ,0.80)',
                            backdropFilter: 'blur(6px)'
                        }}
                            //TODO
                            onClick={() => alert("hi")}>
                            <Clear fontSize="inherit" sx={{
                                height: "120%",
                                width: "120%",
                                color: "#444444"
                            }} />
                        </IconButton>)}
                    </Paper>
                    {!onDock && <Typography position='relative' align='center' fontSize={{ xs: '0.65rem', sm: '0.65rem', md: '0.7rem', lg: '1rem', xl: '1rem' }} fontWeight={{ xs: '800', md: '600' }} sx={{ mt: "1vmin", userSelect: "none", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</Typography>}
                </motion.div>
            </Box>
        </Fragment>
    )
}

export default AppIconBase