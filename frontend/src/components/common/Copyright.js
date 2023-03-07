import React from 'react'

import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import { STORE_NAME } from '../../constants/uiConstants';
const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="localhost:3000">
                {STORE_NAME}
            </Link>{' - '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright