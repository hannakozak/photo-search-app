import Image from "../components/Image";
import SearchForm from "../components/SearchForm";
import { Link} from "react-router-dom";

const Gallery = ( {images, loading, searchQuery, setSearchQuery}) => {
    return (
      <div>
        <SearchForm images={images} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        {images.map(image => (
          <Link
            key={image.id}
            to={{
              pathname: `/image/${image.id}`,
            }}
          > 
            <Image url={image.urls.small} alt={image.description} />
            {console.log(image)}
            <p>{image.description}</p>
          </Link>
        ))}
      </div>
    );
}

export default Gallery;