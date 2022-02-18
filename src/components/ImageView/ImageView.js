import { useParams, useNavigate } from 'react-router-dom';
import { ImageWrapper, Image, ImageDescription, Icon } from './ImageViewStyled';
import { StyledContainer } from '../../styles/style';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageView = ({ images }) => {
  const { id } = useParams();
  const image = images.find((image) => image.id === id);

  const navigate = useNavigate();

  const handleCloseImage = () => {
    navigate('/photos');
  };

  return (
    <StyledContainer>
      <Icon onClick={handleCloseImage}>
        <FaArrowAltCircleLeft />
      </Icon>
      <ImageWrapper onClick={handleCloseImage}>
        <FaArrowAltCircleLeft />
        <Image src={image.urls.regular} alt={image.description} />
      </ImageWrapper>
      <ImageDescription>
        <p>Photo by {image.user.name} on Unsplash</p>
        <p>{image.description}</p>
        <p>likes: {image.likes}</p>
      </ImageDescription>
    </StyledContainer>
  );
};

export default ImageView;
