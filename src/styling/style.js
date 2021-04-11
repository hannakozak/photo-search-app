import styled from 'styled-components';
import { COLORS } from './constants';
import MainPhoto from '../images/tree-large.jpg';


export const BgImage = styled.div`
    background-image: url(${MainPhoto});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  padding-bottom: 1rem;
  text-align: center;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Input = styled.input`
border: none;
padding: 1rem 2rem;
font-size: 1.5rem;
border-radius: 100px;
width: 60%;
margin-right: -3.25rem;
margin-bottom: 3rem;
margin-top: 3rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Button = styled.button`
  font-size: 2rem;
  text-align: center;
  background-color: white;
  border: none;
`;

export const Modal = styled.div`
  position: absolute;
  top: 4;
  left: 0;
  right: 0;
  bottom: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalImage = styled.div`
  display: inline-block;
  width: 100%;
  object-fit: cover;
`;

export const ImageGrid = styled.div`
column-count: 3;
padding: 4rem;
`;

export const Card = styled.div`
    display: flex;
`;

export const CardImage = styled.div`
    border-radius: 10px;
    padding-bottom: 1.5rem;
`;

export const Wrapper = styled.div`
position: relative;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;