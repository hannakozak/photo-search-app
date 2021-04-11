import {Input, Button} from '../styling/style';
import { FaSistrix } from "react-icons/fa";
import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import {GlobalStyle} from '../styling/globalStyle';
 
const SerachForm = ({images, loading, searchQuery, setSearchQuery} ) => {
  const [redirect, setRedirect] = useState(false);
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value)
    }

   const handleSubmit = e => {
      e.preventDefault();
      setRedirect(true);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
        <GlobalStyle />
        <Input value={searchQuery} onChange={handleChange} placeholder="Search photos"></Input>
        <Button>
        <FaSistrix />
        </Button>
      </form>
        {redirect && <Redirect to="/photos" />}
      </div>
    )
  }

  export default SerachForm;