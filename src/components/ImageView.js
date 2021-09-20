import { useHistory } from "react-router-dom";
import { Wrapper, Image, CloseButton} from '../styles/style';

const ImageView = ({ image }) => {
  
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Wrapper onClick={ back }>
      <Image src={image.urls.full} alt={ image.description } />
        <CloseButton type="button" onClick={ back }>
        close
        </CloseButton>
        <p>Photo by { image.user.name } on Unsplash</p>
        <p>{ image.description }</p>
    </Wrapper>
  )
}

export default ImageView;