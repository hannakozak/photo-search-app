import styled from 'styled-components';
import MainPhoto from '../../images/jonatan-pie-3l3RwQdHRHg-unsplash.jpg';

export const BackgroundPhoto = styled.div`
  background-image: url(${MainPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100vh;
`;

export const PhotoAuthor = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 2rem;
  font-size: 1.6rem;
  color: white;
  & a {
    font-size: 1.6rem;
    color: #87cefa;
    text-decoration: none;
  }
`;

