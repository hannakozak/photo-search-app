const Image = ({ url, key, alt }) => (
  <div key={key} >
    <img src={url} alt={alt} />
  </div>
);

export default Image;