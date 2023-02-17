/* used for checkout */

import React from 'react'

import { CssBaseline } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import HeaderMinimal from '../common/HeaderMinimal';

import { Outlet } from 'react-router-dom';
const BaseLayout = ({ children }) => {
    return (
        <React.Fragment>

            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <HeaderMinimal />
            <Outlet/>
        </React.Fragment>
    )
}

export default BaseLayout