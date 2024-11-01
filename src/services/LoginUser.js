import axios from 'axios';

const options = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const loginUser = async (email, password) => {
  const payload = {
    email: email,
    password: password
  };

  try {
 
    const response = await axios.post("http://127.0.0.1:5000/login", payload, options);
    console.log('Response from server:', response.data); // Server javobini log qilish
    return response.data; 
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message); 
    throw error; 
  }
};

export { loginUser };
