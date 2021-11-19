import styled from 'styled-components';
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
width: 40%;
margin-right: -3.25rem;
margin-bottom: 5rem;
margin-top: 5rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 8px;
&:focus {
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`;

export const Button = styled.button`
  font-size: 2rem;
  text-align: center;
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
export const Image = styled.img`
 max-height: 80vh;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 position: relative;
 z-index: 1;
`;

export const Modal = styled.img`
 position: relative;
`;

export const Wrapper = styled.div`
position: relative;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;