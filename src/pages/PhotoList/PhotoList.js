import SearchForm from "../../components/SearchForm";

import { Link } from "react-router-dom";

import { Wrapper, ImageGrid, Card, Image } from "./PhotoList.style";

const PhotoList = ({ images, query, setQuery, handleSubmit }) => {
  return (
    <Wrapper>
      <SearchForm
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <ImageGrid>
        {images.map((image) => (
          <Card key={image.id}>
            <Link to={`/photos/${image.id}`}>
              <Image src={image.urls.regular} alt={image.description} />
            </Link>
          </Card>
        ))}
      </ImageGrid>
    </Wrapper>
  );
};

export default PhotoList;
