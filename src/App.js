import './App.css';
import React, {useState} from 'react';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import useAsyncHook from './hooks/useAsyncHook';
import {Switch, Route} from "react-router-dom";
import ImageView from "./components/ImageView";


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, loading] = useAsyncHook(searchQuery);

    return (
      <div>
      <Switch>
        <Route exact path="/" children={<Home images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        <Route path="/gallery" children={<Gallery images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>} />
        <Route exact path="/image/:id" render={({match}) => (
           <ImageView image={images.find(image => image.id === match.params.id)} />)}></Route>
      </Switch>
      </div>
    )
}

export default App;
