import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export const ArrowRight = styled(FaArrowRight)`
  color: white;
  font-size: 1.6rem;
  padding: 0 1rem;
`;

export const ArrowLeft = styled(FaArrowLeft)`
  color: white;
  font-size: 1.6rem;
  padding: 0 1rem;
`;

export const Wrapper = styled.div``;

export const PagButton = styled.button`
  font-size: 2rem;
  border: none;
  padding: 1rem;
  width: 2rem;
  background-color: transparent;
  border-radius: 20%;
  color: white;
  margin: 2rem 0.5rem;

  :hover {
    background-color: white;
    color: #030617;
  }
  :active {
    background-color: #87cefa;
    opacity: 0.5;
  }

  &.selected {
    background-color: white;
    color: #030617;
  }
`;
