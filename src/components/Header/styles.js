import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 50px 0;


  @media screen and (max-width: 500px) {

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    transition: opacity 0.2s;

    align: center;
    justify-content: center;
  }

`;

export const Cart = styled(Link)`

  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }


  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: rgba(18, 100, 180, 1);
  }

  span {
    font-size: 12px;
    color: rgba(18, 100, 180, 0.7);
  }

  @media screen and (max-width: 500px) {

    div {
      margin-top: 30px;
      display: flex;
      align: center;
      justify-content: center;
    }


    span {

      padding: 0 5px;
    }

  }

`;
