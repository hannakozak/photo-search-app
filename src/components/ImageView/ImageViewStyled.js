import styled from 'styled-components';
import media from '../../styles/media';

export const Image = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1;
  margin: 2rem 0;
  margin-top: 3rem;
  max-width: 95%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageDescription = styled.div`
  color: white;
  font-size: 1.2rem;
  padding-bottom: 2rem;
  max-width: 80%;
  margin: 0 auto;

  ${media.desktop`
  max-width: 50%;
`};
`;

export const Icon = styled.div`
  color: white;
  font-size: 1.6rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
`;
