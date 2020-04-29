import styled from 'styled-components';

import { darken, lighten } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;



li {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: rgba(40, 42, 54, 1);
  border-radius: 4px;
  box-shadow: 3px 3px 3px 0px rgba(71,93,243,0.09);
  padding: 20px;


  img {
    align-self: center;
    max-width: 100%;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 245, 234, 1);
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
    color: rgba(2, 137, 133, 1);

  }
}
button {
  background: rgba(71, 93, 243, 1);
  color: rgba(255, 245, 234, 1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  width: auto;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#028985')};
  }

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0,0,0,0.1);
    width: auto;

    svg {
      margin-right: 5px;
    }
  }

  span {
    flex: 1;
    text-align: center;
  }
}

a:link {
  color: ${darken(0.03, '#475DF3')}
}

a:visited {
  color: ${darken(0.03, '#475DF3')}
}

a:hover {
  color: ${lighten(0.03, '#028985')}
}

a:active {
  color: ${lighten(0.02,'#9999' )}
}

`;
