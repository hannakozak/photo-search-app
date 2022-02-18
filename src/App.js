import { useState, useEffect } from 'react';

import Home from './pages/Home/Home';
import PhotoList from './pages/PhotoList/PhotoList';
import ImageView from './components/ImageView/ImageView';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { unsplash } from './api';
function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  let navigate = useNavigate();

  const goToNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      await unsplash.search
        .getPhotos({
          query: query,
          page: currentPage,
          perPage: 9,
        })
        .then((result) => {
          setImages(result.response.results);
        });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(images);
  useEffect(() => {
    fetchData();
  }, [search, currentPage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(query);

    navigate('/photos');
  };

  return (
    <Routes>
      <Route path="/" element={<Home images={images} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />} />

      <Route
        path="photos"
        element={
          <PhotoList
            images={images}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            currentPage={currentPage}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            changePage={changePage}
          />
        }
      ></Route>
      <Route path="photos/:id" element={<ImageView images={images} />} />
    </Routes>
  );
}

export default App;
