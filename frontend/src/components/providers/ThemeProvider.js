import React from 'react'
import {ThemeProvider as ThemeProviderMui} from '@mui/material/styles'
import mainTheme from '../../utils/mainTheme'
const MainThemeProvider = ({children}) => {

  return (
        <ThemeProviderMui theme={mainTheme}>
            {children}
        </ThemeProviderMui>
  )
}

export default MainThemeProvider