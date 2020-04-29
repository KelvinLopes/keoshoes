import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  a:link {
    text-decoration: none;
  }


  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.8);
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: rgba(71, 93, 243, 1);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(71, 93, 243, 1);
  }
`;
