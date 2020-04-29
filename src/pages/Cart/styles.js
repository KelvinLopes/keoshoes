import styled from 'styled-components';
import { lighten } from 'polished';


export const Container = styled.div`
  padding: 30px;
  background: rgba(40, 42, 54, 1);
  border-radius: 4px;

  .total {
    color: rgba(2, 137, 133, 1);
  }

  .button-back:hover {
    border-radius: 50%;
    background:  rgba(0, 0, 0, 0.7);
    opacity: 0.5;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    button {
      background: rgba(71, 93, 243, 1);
      color: #fff;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-decoration: uppercase;
      transition: background 0.2s;
      outline: none;
      border: none;

      &:hover {
        background: ${lighten(0.03, '#028985')}
      }
    }
  }
`;

export const ProductTable = styled.table`

  width: 100%;

  thead th {
    color: #999;
    padding: 12px;
  }

 .border-bottom td {

    border-bottom: 1px solid #eee;
    width: 100%;
  }



  img {
    height: 100px;
  }

strong {
    color: rgba(2, 137, 133, 1);
    display: flex;

    text-align: center;

  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(2, 137, 133, 1);

  }

  div button {

    display: flex;
    align-items: center;

    width: 100%;
    position: relative;
  }

   input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: rgba(2, 137, 133, 1);
      text-align: center;
      background: rgba(40, 42, 54, 0.7);
      padding: 6px;
      width: 50px;

    }

  button {
    background: none;
    border: 0;
    padding: 4px;
  }

`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
