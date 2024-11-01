import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from 'axios';

function ForgotPassword({ open, handleClose }) {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Clear previous messages
    setError('');
    setSuccess('');

    const payload = {
      email,
      options: {}
    };

    try {
      const response = await axios.post(
        "https://api.userfront.com/v0/tenants/rbvdmyqb/auth/reset/link", 
        payload, 
        {
          headers: {
            Accept: "*/*"
          }
        }
      );
      console.log('Response:', response.data);
      setSuccess('A reset link has been sent to your email.');
      setEmail(''); // Clear the email input
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data.message : 'Network error');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit, // Call the handleSubmit function on form submit
      }}
    >
      <DialogTitle>Reset password</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Enter your account&apos;s email address, and we&apos;ll send you a link to
          reset your password.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email address"
          placeholder="Email address"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
        />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" type="submit">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
