import SearchForm from '../components/SearchForm';

import { Link } from 'react-router-dom';

import { Wrapper, ImageGrid, Card, CardImage } from '../styling/style';

const PhotoList = (props) => {
  const { images, query, setQuery, handleSubmit } = props;

  return (
    <Wrapper>
      <SearchForm query={ query } setQuery={ setQuery } handleSubmit={ handleSubmit } />
        <ImageGrid>
          { images.map((image) => (
            <Card key={ image.id } >
              <Link to={{ pathname: `/image/${image.id}` }}> 
                <CardImage>
                  <img src={ image.urls.small } alt={ image.description } />
                </CardImage>
              </Link>
             </Card>
          ))}
        </ImageGrid>
    </Wrapper>
  )
}

export default PhotoList;