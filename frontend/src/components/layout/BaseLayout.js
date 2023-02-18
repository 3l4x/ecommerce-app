import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
const BaseLayout = () => {
    return (
        <React.Fragment>

            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default BaseLayout