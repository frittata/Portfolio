import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --very-deep-dark: #111111;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --green: #00e28f;
    --blue: #0096e2;
    --gray-logo: #424443;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--deep-dark);
  }
  ::-webkit-scrollbar {
  width: 8px;
  }

  .general-back{
    background-color: var(--deep-dark)
  }
  .dark-back{
    background-color: var(--very-deep-dark)
  }
  

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--gray-1); 
    border-radius: 10px;
  }
  .margin50{
    margin: 50px auto
  }


  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    font-size: 20px;
  }
  svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .button{
    outline: none;
    padding: 15px 15px;
    background-color: var(--very-deep-dark);
    border: 1px solid var(--deep-dark);
  }
  .button:hover{
    background-color: var(--green);
    color: var(--deep-dark)
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .moving-bg{
    background: -webkit-linear-gradient(
      0deg,
      var(--green) 0%,
      var(--blue) 50%,
      var(--green) 75%,
      var(--blue) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 900% 100%;
    animation: gradient 10s ease infinite;
  }


  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
