import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import RegisterForm from '../components/form/RegisterForm';


const Register = () => {
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
        <RegisterForm handleSubmit={handleSubmit}/>
      </Box>
    </Container>
  );
}

export default Register