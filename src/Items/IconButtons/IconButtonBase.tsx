import { Button, Paper, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import DockContext from '../../Contexts/DockContext'

interface IconButtonBaseProps {
    key: string,
    name: string,
    link: string,
    icon: string,
    onDocker?: boolean,
}



let IconButtonBase = (props: IconButtonBaseProps) => {
    const { onDock } = React.useContext(DockContext);
    let { key, name, link, icon } = props

    return (
        <Fragment>
            <Paper elevation={0}
                sx={{
                    margin: 'auto',
                    height: { xs: '4rem', sm: '4rem', md: '4rem', lg: '6rem', xl: '6rem' },
                    width: { xs: '4rem', sm: '4rem', md: '4rem', lg: '6rem', xl: '6rem' },
                    borderRadius: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.6rem' },
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#DDDDDD',
                    backgroundImage: `url(${icon})`,
                    backgroundSize: 'cover'
                }}
            >
                <Button
                    sx={{
                        height: 'inherit',
                        width: 'inherit',
                        borderRadius: 'inherit'
                    }}

                    onClick={() => window.location.href = link}

                />
            </Paper>
            {!onDock && <Typography position='relative' align='center'  fontSize={{ xs: '0.65rem', sm: '0.75rem', md: '0.75rem', lg: '0.9rem', xl: '1.2rem' }} fontWeight={{ xs: '900', md: '600'}} sx = {{mt: "1vmin", userSelect: "none"}}>{name}</Typography>}
        </Fragment >
    )
}

export default IconButtonBase