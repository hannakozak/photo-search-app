import {Input, Button} from '../styling/style';
import { FaSistrix } from "react-icons/fa";
import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
 
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
        <Input value={searchQuery} onChange={handleChange}></Input>
        <Button>
        <FaSistrix />
        </Button>
      </form>
        {redirect && <Redirect to="/gallery" />}
      </div>
    )
  }

  export default SerachForm;