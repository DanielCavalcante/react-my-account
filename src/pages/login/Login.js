import React, { useState } from 'react';
import { Container, Button, TextField, FormGroup, Box } from '@material-ui/core';

function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    if (login && password) {
      console.log('Autenticado')
    } else {
      console.log('Preencha todas as informações')
    }
  }

  return (
    <Container>
        <FormGroup variant="outlined">
          <Box m={"auto"}>
            <h2>Sign in</h2>
            <Box mt={1}>
              <TextField
                id="login"
                label="Login" 
                variant="outlined"
                type="email"
                onChange={event => setLogin(event.target.value)} 
              />
            </Box>
            <Box mt={2}>
              <TextField 
                id="password"
                label="Password" 
                variant="outlined"
                type="password"
                onChange={event => setPassword(event.target.value)} 
                />
            </Box>
            <Box mt={2}>
              <Button 
              variant="contained"
              color="primary" 
              onClick={handleLogin}>
                Login
              </Button>
            </Box>
          </Box>
      </FormGroup>
    </Container>
  );
}

export default Login;