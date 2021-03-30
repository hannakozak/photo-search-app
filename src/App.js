import './App.css';
import React, {useState} from 'react';
import Image from "./components/Image";
import SearchForm from "./components/SearchForm";
import useAsyncHook from './hooks/useAsyncHook';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, loading] = useAsyncHook(searchQuery);

    return (
      <div className="App">
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          {loading ?
            images.map((image, index) => {
              return (
                <Image url={image.urls.regular} key={index} alt={image.description} />
              )
            })
           : ""}
      </div>
    )
}

export default App;
