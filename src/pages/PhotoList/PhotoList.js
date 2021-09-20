import SearchForm from '../../components/SearchForm';

import { Link } from 'react-router-dom';

import { Wrapper, ImageGrid, Card } from './PhotoList.style';

const PhotoList = (props) => {
  const { images, query, setQuery, handleSubmit } = props;

  return (
    <Wrapper>
      <SearchForm query={ query } setQuery={ setQuery } handleSubmit={ handleSubmit } />
        <ImageGrid>
          { images.map((image) => (
            <Card key={ image.id } >
              <Link to={{ pathname: `/image/${image.id}` }}> 
                <img src={ image.urls.small } alt={ image.description } />
              </Link>
             </Card>
          ))}
        </ImageGrid>
    </Wrapper>
  )
}

export default PhotoList;