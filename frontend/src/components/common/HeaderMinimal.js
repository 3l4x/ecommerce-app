import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';

const HeaderMinimal = () => {
    return (
        <React.Fragment>

            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button
                        key={'Home'}
                        sx={{ my: 1, color: 'white', fontSize: 25, mx: 1 }}
                        href={'/'}
                    >
                        Home
                    </Button>
                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default HeaderMinimal