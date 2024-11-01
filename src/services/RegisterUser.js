import axios from 'axios';

const options = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const registerUser = async (firstName, lastName, email, password) => {
  const payload = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password
  };

  try {
    const response = await axios.post("http://127.0.0.1:5000/register", payload, options);
    console.log('Response from server:', response.data); // Server javobini log qilish
    return response.data; 
  } catch (error) {
    console.error('Registration error:', error.response ? error.response.data : error.message); // Xatolikni log qilish
    throw error; 
  }
};

export { registerUser };
