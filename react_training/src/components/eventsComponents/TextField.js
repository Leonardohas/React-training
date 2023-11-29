import * as React from 'react';
import Input from '@mui/joy/Input';

function TextField({ name, placeholder, handleOnChange, value }) {
  return (
    <div>
      <Input 
        color="primary" 
        variant="soft"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        required
      />
    </div>
  )
};

export default TextField;