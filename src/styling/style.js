import styled from 'styled-components';
import { COLORS } from './constants';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${COLORS.grey1};
`;

export const Input = styled.input`
background-color: ${COLORS.grey2};
border: none;
padding: .7rem 2rem;
border-radius: 100px;
width: 40%;
margin-right: -3.25rem;
margin-bottom: 3rem;
`;

export const Button = styled.button`
  font-size: 0.9rem;
  text-align: center;
  background-color: ${COLORS.grey2};
  border: none;
`;

export const Modal = styled.div`
  position: absolute;
  top: 5rem;
  bottom: 5rem;
  right: 5rem;
  left: 5rem;
`;

export const ModalImage = styled.div`
object-fit: cover;
`;


export const ImageGrid = styled.div`
margin-top: 2rem;
column-count: 3;
`;

export const Card = styled.div`
margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.div`
    border-radius: 10px;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100rem;
  padding: 4rem;
  font-size: 1.6rem;
  text-align: center;
`;