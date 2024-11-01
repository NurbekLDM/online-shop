import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import getSignUpTheme from './getSignUpTheme';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import TemplateFrame from './TemplateFrame';
import { registerUser } from '../../services/RegisterUser';

import { useNavigate } from 'react-router-dom';


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

export default function SignUp() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });
  const SignUpTheme = createTheme(getSignUpTheme(mode));

  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [submissionError, setSubmissionError] = React.useState('');
  const navigate = useNavigate();


  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const validateInputs = (data) => {
    const email = data.get('email');
    const password = data.get('password');
    const fullName = data.get('name');
  
    let isValid = true;
  
    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }
  

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }
  

    if (!fullName || fullName.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }
  
    return isValid;
  };
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = new FormData(event.currentTarget);
        
    if (!validateInputs(data)) {
      return;
    }
  
    const fullName = data.get('name');
    const [firstName, lastName] = fullName.split(' '); 
  
    try {
      const response = await registerUser(firstName, lastName, data.get('email'), data.get('password'));
      console.log('Registration successful:', response);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      // error message
    }
  };
  

  return (
    <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
        <CssBaseline enableColorScheme />
        <SignUpContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <SitemarkIcon />
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
             <FormControl>
  <FormLabel htmlFor="name">Full name</FormLabel>
  <TextField
    autoComplete="name"
    name="name"
    required
    fullWidth
    id="name"
    placeholder="Jon Snow"
    error={nameError}
    helperText={nameErrorMessage}
    color={nameError ? 'error' : 'primary'}
  />
</FormControl>
    
<FormControl>
  <FormLabel htmlFor="name">Email address</FormLabel>
  <TextField
    autoComplete="email"
    name="email"
    required
    fullWidth
    id="email"
    placeholder="example@gmail.com"
    error={emailError}
    helperText={emailErrorMessage}
    color={emailError ? 'error' : 'primary'}
  />
</FormControl>

<FormControl>
  <FormLabel htmlFor="name">Email address</FormLabel>
  <TextField
    autoComplete="password"
    name="password"
    required
    fullWidth
id="password"
type="password"
placeholder="password"
error={passwordError}
helperText={passwordErrorMessage}
    color={passwordError ? 'error' : 'primary'}
  />
</FormControl>


              {submissionError && <Typography color="error">{submissionError}</Typography>}
              <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                Sign Up
              </Button>
            </Box>
            <Divider />
            <Typography variant="body2" align="center">
              Already have an account? <Link href="/login">Log in</Link>
            </Typography>

            <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign up with Facebook
            </Button>
          </Box>

          </Card>
        </SignUpContainer>
      </ThemeProvider>
    </TemplateFrame>
  );
}
