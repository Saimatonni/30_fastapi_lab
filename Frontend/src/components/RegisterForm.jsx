import React from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import FormField from './FormField';
import ErrorMessage from './ErrorMessage';

const RegisterForm = ({ credentials, onChange, onSubmit, errors, error }) => (
  <Form onSubmit={onSubmit}>
    <FormField
      type='text'
      id='username'
      placeholder='Username'
      value={credentials.username}
      onChange={onChange}
      required
      error={errors.username}
    />
    <FormField
      type='email'
      id='email'
      placeholder='Email'
      value={credentials.email}
      onChange={onChange}
      required
      error={errors.email}
    />
    <FormField
      type='password'
      id='password'
      placeholder='Password'
      value={credentials.password}
      onChange={onChange}
      required
      error={errors.password}
    />
    <FormField
      type='password'
      id='confirmPassword'
      placeholder='Confirm Password'
      value={credentials.confirmPassword}
      onChange={onChange}
      required
      error={errors.confirmPassword}
    />
    <FormField
      type='tel'
      id='phoneNumber'
      placeholder='Phone Number'
      value={credentials.phoneNumber}
      onChange={onChange}
      required
      error={errors.phoneNumber}
    />
    {error && <ErrorMessage message={error} />}
    <Button className='btn secondary__btn auth__btn' type='submit'>
      Register
    </Button>
  </Form>
);

export default RegisterForm;

