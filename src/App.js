import { useState, useEffect, useCallback } from "react";

import Home from "./pages/Home/Home";
import PhotoList from "./pages/PhotoList/PhotoList";
import ImageView from "./components/ImageView";

import { Routes, Route, useNavigate } from "react-router-dom";

import { unsplash } from "./api";
function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      await unsplash.search
        .getPhotos({
          query: query,
          page: 10,
        })
        .then((result) => {
          setImages(result.response.results);
        });
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    fetchData();
    setQuery("");
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(query);

    navigate("/photos");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            images={images}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
        }
      />

      <Route
        path="photos"
        element={
          <PhotoList
            images={images}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
        }
      ></Route>
      <Route path="photos/:id" element={<ImageView images={images} />} />
    </Routes>
  );
}

export default App;
