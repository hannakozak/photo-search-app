import { useHistory } from "react-router-dom";
import Image from "./Image";

const ImageView = ({ image }) => {
  
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
    onClick={back}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "black"
    }}
  >
    <div
      className="modal"
      style={{
        position: "absolute",
        background: "#fff",
        top: 25,
        left: "10%",
        right: "10%",
        padding: 15,
        border: "2px solid #444"
      }}
    >
    
    {console.log(image)}
    
    <Image url={image.urls.small} alt={image.description} />
      <button type="button" onClick={back}>
        Close
      </button>
    </div>
  </div>
  )
}

export default ImageView;