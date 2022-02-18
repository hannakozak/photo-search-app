import SearchForm from '../../components/SearchForm/SearchForm';
import Pagination from '../../components/Pagination/Pagination';
import { Header } from '../../components/Header/Header';

import { Link } from 'react-router-dom';

import { ImageGrid, Card, Image } from './PhotoList.style';
import { StyledContainer } from '../../styles/style';

const PhotoList = ({ images, query, setQuery, handleSubmit, currentPage, goToNextPage, goToPreviousPage, changePage }) => {
  return (
    <StyledContainer>
      <Header>Find Your Photo Inspiration</Header>
      <SearchForm query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <ImageGrid>
        {images.map((image) => (
          <Card key={image.id}>
            <Link to={`/photos/${image.id}`}>
              <Image src={image.urls.regular} alt={image.description} />
            </Link>
          </Card>
        ))}
      </ImageGrid>
      <Pagination currentPage={currentPage} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} changePage={changePage} />
    </StyledContainer>
  );
};

export default PhotoList;
