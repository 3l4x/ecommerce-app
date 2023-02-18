import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Copyright from './Copyright';
import { footers } from '../../constants/uiConstants';
const Footer = () => {

    return (

        <Box
            component="footer"
            textAlign='center'
            sx={{
                width: '100%',
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 0,
                py: [3, 5],
            }}
        >

            <Container maxWidth='md'>


                <Grid container spacing={3} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ mt: 5 }} />


            </Container>
        </Box>

    )
}

export default Footer