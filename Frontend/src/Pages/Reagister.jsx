import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import RegisterForm from '../components/RegisterForm';
import userIcon from '../assets/images/user.png';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));

    if (id === 'email' && value.trim() !== '') {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
      }
    }

    if (id === 'phoneNumber' && value.trim() !== '') {
      if (!validatePhoneNumber(value)) {
        setErrors((prev) => ({ ...prev, phoneNumber: 'Phone number must have exactly 11 digits.' }));
      }
    }
  };

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      credentials.username.trim() === '' ||
      credentials.email.trim() === '' ||
      credentials.password.trim() === '' ||
      credentials.confirmPassword.trim() === '' ||
      credentials.phoneNumber.trim() === ''
    ) {
      setError('Please fill out all fields.');
      return;
    }

    const validationErrors = {};
    if (credentials.username.length < 6) {
      validationErrors.username = 'Username must be at least 6 characters long.';
    }
    if (credentials.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long.';
    }
    if (credentials.password !== credentials.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(validationErrors).length === 0) {
      try {
        navigate("/register-success");
        setCredentials({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
        });
      } catch (error) {
        setError('Registration failed. Please try again.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{11}$/.test(phoneNumber);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='flex justify-center mt-20'> 
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Register</h2>
                <RegisterForm
                  credentials={credentials}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  errors={errors}
                  error={error}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;


