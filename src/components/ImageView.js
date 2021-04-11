import { useHistory } from "react-router-dom";
import Image from "./Image";
import { Modal, ModalImage, Wrapper } from '../styling/style';

const ImageView = ({ image }) => {
  
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Wrapper onClick={back}>
    <Modal>
      <ModalImage>
      <Image url={image.urls.regular} alt={image.description} />
      <button type="button" onClick={back}>
        Close
      </button>
      </ModalImage>
    </Modal>
  </Wrapper>
  )
}

export default ImageView;