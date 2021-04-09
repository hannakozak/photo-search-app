import './App.css';
import React, {useState} from 'react';
import Home from "./pages/Home";
import PhotoList from "./pages/PhotoList";
import useAsyncHook from './hooks/useAsyncHook';
import { Switch,  Route} from "react-router-dom";
import ImageView from "./components/ImageView";



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, loading] = useAsyncHook(searchQuery);

    return (
      <div>
      <Switch>
        <Route path="/photos" children={<PhotoList images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>} />
        <Route path="/image/:id" render={({match}) => (
           <ImageView image={images.find(image => image.id === match.params.id)} />)}></Route>
        <Route path="/" >
          <Home images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Route>
      </Switch>
      </div>
    )
}

export default App;
