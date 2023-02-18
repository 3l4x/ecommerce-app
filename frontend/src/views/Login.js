import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginForm from '../components/form/LoginForm';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LoginForm handleSubmit={handleSubmit} />
      </Box>
    </Container>
  )
}

export default Login