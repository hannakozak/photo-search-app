import { useState, useEffect, useCallback } from 'react';

import Home from './pages/Home/Home';
import PhotoList from './pages/PhotoList/PhotoList';
import ImageView from './components/ImageView';

import { Switch,  Route, useHistory } from 'react-router-dom';

import unsplash from './api/unsplash';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');

  let history = useHistory();

  const fetchData = useCallback(async () => {
    const response = await unsplash.get('/search/photos', { params: { query: search } });
    setImages(response.data.results);
  }, [search])

  useEffect(() => {
    fetchData();
    setQuery('')
  }, [fetchData])

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(query)
    
    history.push("/photos");
  };
    
    return (
      <Switch>
        <Route path="/photos">
          <PhotoList images={images} query={query} setQuery={setQuery} handleSubmit={handleSubmit}/>
        </Route>
        <Route path="/image/:id" render={({match}) => (
           <ImageView image={images.find(image => image.id === match.params.id)} />)}></Route>
        <Route path="/" >
          <Home images={images} query={query} setQuery={setQuery} handleSubmit={handleSubmit}/>
        </Route>
      </Switch>
    )
}

export default App;