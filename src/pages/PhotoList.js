import SearchForm from "../components/SearchForm";
import { Link} from "react-router-dom";
import {Wrapper, ImageGrid, Card, CardImage} from '../styling/style';

const PhotoList = ( {images, loading, searchQuery, setSearchQuery}) => {
    return (
      <Wrapper>
        <SearchForm images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <ImageGrid>
        {images.map(image => (
          <Card>
            <Link
            key={image.id}
            to={{
              pathname: `/image/${image.id}`,
            }}
          > 
          <CardImage>
          <img src={image.urls.small} alt={image.description} />
          </CardImage>
           
            {console.log(image)}
          </Link>
          </Card>
        ))}
        </ImageGrid>
      </Wrapper>
    );
}

export default PhotoList;