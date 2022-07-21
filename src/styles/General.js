import { createGlobalStyle } from 'styled-components';

const General = createGlobalStyle`
*{
    transition: all 0.5s;
}
  .page-container{
      max-width: 1800px;
      margin: auto;
      text-align: center;
      overflow: hidden;
  }
  .boxed{
    max-width: 1200px;
  }
  .header{
    background-color: var(--very-deep-dark);
    padding: 100px 2em ;
    min-height: 65vh;
  }
  .logo-cont{
    height: calc(95vh - 250px);
    max-height:600px
  }
  .img50{
      width: 50%;
  }
  h1{
      font-size: 8em;
  }
  h2{
      font-size: 36px;
    opacity: .8
  }
  h3{
    font-size: 24px;
    opacity: .6
  }
  p{
    font-size: 18px;
  }
  .cont{
      margin: 5rem auto;
      position: relative;
      padding:0 2em ;
  }
  .cont1{
      display: flex;
      direction: ltr;
      justify-content: space-around;
      padding: 2em;
  }
  .cont-head{
      margin: 2rem 0;
  }
  .cont33{
    //width: 33%;
    //max-width: 33%;
    padding: 8rem 0;
    margin: 2rem;
    position: relative;
  }
  .boxes a{
    width: 100%;
  }
  .black-box{
      background-color: var(--very-deep-dark);
  }

    .skill-box{
        background-color: var(--deep-dark);
    }

    .separator{
        height: 6px;
        width: 6px;
        margin: 5px auto;
        background-color: var(--green);
        border-radius:10px
    }

    .skill-box:hover .separator{
        width: 50%;
        border-radius: 2px;
    }

    .skill-box:hover .info-hide{
        display: block;
        opacity: 1;
        transform: translateY(10px);
        transition: all 0.5s;
    }

    .info-hide{
        opacity: 0;
        margin-top: -10px;
    }

    
  .price-main{
      display:flex;
      flex-direction: row;
      margin: 1em;
      justify-content: space-between;
      align-items: center;
  }
  .pricecont{
      display: flex;
      direction: row;
      padding: 0;
      align-items: center;
  }
  .price-title{
      padding: 2em;
      text-align: left;
  }

    .price-info{
        background-color: var(--gray-logo);
        padding: 2em;
    }

  .black-box:hover{
      transform: scale(1.05);
      //box-shadow: 0px 0px 6px 4px var(--green);
      color: var(--deep-dark);
      transition: all 0.5s;
      box-shadow: inset var(--green) 0px 0px 25px 3px;
  }
  .black-box:hover img{
    transform: rotate(180deg);
  }
  .box-info{
      //margin-top:20px
  }

  .black-box:hover .small-icon{
      display: block;
  }
  
  .icon-cont{
      width: 50px;
      margin: auto;
  }
  .circle{
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    z-index: -1;
    animation: inset-boxing 8s ease infinite
  }

  .box-icon{
      width: 100px;
  }

  .icon-cont{
      width: 20em;
  }

  .icon-head{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6em 2em;
  }

  .icon-head div{
      text-align: left;
  }

  .icon-head img{
      margin: 3em;
  }

  .gallery img{
      max-width: 20%;
      height: 100px
  }


  @keyframes inset-boxing{
        0%{box-shadow: none;
        transform:scale(5)}
        50%{box-shadow: inset var(--green) 0px 0px 80px 0px;transform:scale(0);opacity:0}
        100%{box-shadow: none;transform:scale(5)}
    }

    .small-icon:hover{
        animation: gradient 10s ease infinite;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    input[type="text"], textarea{
        background-color: transparent;
        box-shadow: var(--deep-dark) 0 0 15px 10px;
        border: none;
        padding: 1rem;
        border-radius: 5px;
        margin: 1rem;
        width: 100%;
        max-width: 500px
    }

    input[type="text"]:focus-visible, textarea:focus-visible{
        transform: scale(1.1);
        outline: none;
        box-shadow: inset var(--green) 0px 0px 10px 0px;
    }

    .btn-inset{
        box-shadow: var(--deep-dark) 0 0 15px 10px;
        cursor: pointer;
        padding: 1rem;
        margin-top: 2rem;
        border-radius: 5px
    }

    .btn-inset h3{
        color: var(--green);
    }

    

  @media only screen and (max-width: 768px) {
    .img75{
      width: 100%;
    }
    .img50{
        width: 100%;
    }
    .page-container{
        margin: auto;
    }
    .cont1{
        display: block;
    }
    .cont33{
        width: 100%;
        margin: 3rem 0;
        max-width: 100%;
        padding: 3rem;
    }
    .cont{
        margin: 3em 0;
    }
    .small-icon{
        display: none;
    }

    .logo-cont{
        width: 70%;
        height: auto;
        margin-bottom: 2em
    }
    .icon-head{
        flex-direction: column;
    }
    h1{
      font-size: 4em;
    }
    h2{
        font-size: 25px;
    }
    h3{
        font-size: 20px;
        opacity: .6
    }
    p{
        font-size: 14px;
    }

  }
`;

export default General;
