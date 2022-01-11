import { Wrapper, Image, CloseButton } from "../styles/style";
import { useParams, useNavigate } from "react-router-dom";

const ImageView = ({ images }) => {
  const { id } = useParams();
  const image = images.find((image) => image.id === id);

  const navigate = useNavigate();

  const handleCloseImage = () => {
    navigate(-1);
  };

  return (
    <Wrapper onClick={handleCloseImage}>
      <Image src={image.urls.regular} alt={image.description} />
      <CloseButton type="button" onClick={handleCloseImage}>
        close
      </CloseButton>
      <p>Photo by {image.user.name} on Unsplash</p>
      <p>{image.description}</p>
    </Wrapper>
  );
};

export default ImageView;
