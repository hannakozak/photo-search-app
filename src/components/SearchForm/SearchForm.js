import React from 'react';

import { Input, Magnifier } from './SearchForm.styled';
import { GlobalStyle } from '../../styles/globalStyle';

const SerachForm = ({ query, setQuery, handleSubmit }) => {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <GlobalStyle />
      <Input value={query} onChange={handleChange} placeholder="Search photos" />
      <Magnifier />
    </form>
  );
};

export default SerachForm;
