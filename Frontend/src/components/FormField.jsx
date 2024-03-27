import React from 'react';
import { FormGroup } from 'reactstrap';

const FormField = ({ type, id, placeholder, value, onChange, required, error }) => (
  <FormGroup>
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <span className='error'>{error}</span>}
  </FormGroup>
);

export default FormField;
