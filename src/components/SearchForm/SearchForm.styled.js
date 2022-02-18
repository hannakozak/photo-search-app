import styled from 'styled-components';
import { FaSistrix } from 'react-icons/fa';

export const Input = styled.input`
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-family: inherit;
  border-radius: 100px;
  width: 40%;
  margin-right: -4rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 8px;
  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Magnifier = styled(FaSistrix)`
  font-size: 1.6rem;
  background-color: white;
  border: none;
`;

export const CloseButton = styled.button`
  font-size: 1rem;
  font-style: inherit;
  text-align: center;
  border: none;
  position: relative;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  right: 5rem;
  bottom: 1.5rem;
  z-index: 10;
`;
