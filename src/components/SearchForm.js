import React from 'react';

import { Input, Button } from '../styling/style';
import { FaSistrix } from 'react-icons/fa';
import { GlobalStyle } from '../styling/globalStyle';
 
const SerachForm = (props) => {
  const { query, setQuery, handleSubmit } = props;
  
  const handleChange = (event) => {
    setQuery(event.target.value);
  }
  
  return (
    <form onSubmit={ handleSubmit }>
      <GlobalStyle />
        <Input value={ query } onChange={ handleChange } placeholder="Search photos" />
        <Button>
          <FaSistrix />
        </Button>
    </form>
  )
}

 export default SerachForm;