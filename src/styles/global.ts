import { createGlobalStyle } from 'styled-components'
import theme from './theme'
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body{
    width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${theme.background};
  color: ${theme.primary};
  font-family:"Montserrat", sans-serif;
    font-size:62.5% ;
  }

  a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  outline: none;
}

`
