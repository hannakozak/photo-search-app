import styled from 'styled-components';
import media from '../../styles/media';

export const ImageGrid = styled.div`
  column-count: 1;

  ${media.tablet`
  column-count: 1;
`};

  ${media.desktop`
  column-count: 2;
  margin: 5%;
`};

  ${media.widescreen`
  column-count: 3;
  margin: 5%;
`};
`;

export const Card = styled.div`
  padding-bottom: 3rem;
`;

export const Image = styled.img`
  max-width: 95%;
  height: auto;
`;
