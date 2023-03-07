import React from 'react'
import { Container,Paper } from '@mui/material'
import CartForm from '../components/form/CartForm'
const Cart = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <CartForm/>
      </Paper>
    </Container>
  )
}

export default Cart