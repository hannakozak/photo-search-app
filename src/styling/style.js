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
  font-size: 1em;
  text-align: center;
  background-color: ${COLORS.grey2};
  border: none;
`;

export const Modal = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  bottom: 20px;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  background: #FFF;
`;