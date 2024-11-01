// resetPassword.js
import axios from 'axios';

const options = {
  headers: {
    Accept: "*/*",
  },
};

const resetPassword = async (email) => {
  const payload = {
    email, // or email: email
    options: {},
  };

  try {
    const response = await axios.post("https://api.userfront.com/v0/tenants/rbvdmyqb/auth/reset/link", payload, options);
    console.log('Response from server:', response.data); // Log server response
    return response; 
  } catch (error) {
    console.error('Reset Password error:', error.response ? error.response.data : error.message); // Log error
    throw error; 
  }
};

export { resetPassword };
