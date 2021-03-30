import { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

export default function useAsyncHook(searchQuery) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      async function fetchImages() {
        try {
          setLoading(true);
          const response = await unsplash.get('/search/photos', { params: { query: searchQuery } });
          setImages(response.data.results);
        }
        catch (error) {
          setLoading(null);
       }
    }   
          
      if (searchQuery !== "") {
        fetchImages();
      }
    }, [searchQuery]);
  
    return [images, loading];
  }