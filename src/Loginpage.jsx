import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Loginpage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
  };
  return (
    <>
    <Box >
    <Container maxWidth="xs">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 10,
            padding: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: '#fff',
          }}
        >
          {/* Animated Title */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome Back
            </Typography>
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ width: '100%' }}
          >
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: '100%' }}
          >
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ width: '100%' }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, py: 1.5, fontSize: '16px' }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </motion.div>

          {/* Additional Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
              Don't have an account? <a href="#signup">Sign up</a>
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
    </Box>
          

    </>
  )
}

export default Loginpage
