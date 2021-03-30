const SerachForm = ({ searchQuery, setSearchQuery }) => {
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value)
    }

   const handleSubmit = e => {
      e.preventDefault();
      setSearchQuery(searchQuery); 
    };

    return (
      <form onSubmit={handleSubmit}>
        <input value={searchQuery} onChange={handleChange} autocomplete="on"/>
      </form>
    )
  }

  export default SerachForm;