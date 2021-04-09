import { useHistory } from "react-router-dom";
import Image from "./Image";
import { Modal, ModalImage } from '../styling/style';

const ImageView = ({ image }) => {
  
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div onClick={back}>
    <Modal>
      <ModalImage>
      <Image url={image.urls.regular} alt={image.description} />
      <button type="button" onClick={back}>
        Close
      </button>
      </ModalImage>
    </Modal>
  </div>
  )
}

export default ImageView;