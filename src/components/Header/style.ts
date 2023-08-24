import styled from "styled-components"
import { cores } from "../../style/GlobalStyle"

export const Header = styled.header`
height:100%;

/*Esconderemos a ul*/
.hidden ul {
    position: absolute;

}
.hidden {
       /*display:none; */
        backdrop-filter: blur(5px);
    }
    height: 5.625rem;
    width: 100%;
    background-color: ${cores.primaria};
    color: ${cores.branco};
    border-bottom: 1.625rem ${cores.primaria} solid;
    border-bottom-left-radius: 7%;
    border-bottom-right-radius: 7%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    div{
        /* width: 50%; */
        display: flex;
        align-items: center;
        justify-content: start;
        h1{
            font-size: 63px;
            align-items: center;
            margin-top: 3rem;
            color: ${cores.branco};
        }
        picture{
            width: 4.375rem;
            height: 4.375rem;
            margin-right: 3rem;
            margin-top: 2rem;
            margin-left: 2rem
        }
    }    
    nav{
        width: 50%;
        height: 100%;
        align-items: center;
        display: flex;
        ul{
            display: flex; 
            justify-content: space-around;
            text-align: end;
            list-style-type: none;
            width: 100%;
            height: 100%;
            li{
                width: 100%;
                height: 100%;
                display: flex;
                text-align: center;
                a{
                    margin-top: 1.5rem;
                    width: 100%;
                    text-decoration: none;
                    color: ${cores.branco};
                    font-size: 2.25rem;
                }
                a:hover{
                color: ${cores.secundaria};
                }
            }
        }
    }
    @media(max-width: 1100px){
        h1{
            display: none;
        }
    }

    @media(max-width:800px) {

/*menu vai desaparecer*/
nav {
    position:absolute;
    width: 100%;
    justify-content: right;
    height:10rem;
    top:5.625rem;


}

nav ul {
    flex-wrap: wrap;
    
    background-color: #4c4c4cca ;
    height: 100%;
    width: 100%;

}
nav ul li {
        width: 100%;
        text-align: center;
        display: block;
        height: calc(100%/2);
        border-top: 0.1px solid ;
        display: flex;
        backdrop-filter:blur(5px);
    }
    nav ul li a{
      display:inline-block;
    }

/*Esconderemos a ul*/
.hidden ul {
    position: absolute;

}
.hidden {
       display:none; 
        backdrop-filter: blur(5px);
    }
  nav{
    display:block;
  }
}
@media(max-width:1500px){
      nav ul a{
        font-size:1.2rem;
      }
  }
  @media (max-width: 1000px) {
    div.logo img{
      height:auto;
      width:60%;
    }
  }
  @media (max-width: 600px){
    div.logo img{
      width:100%;
    }
    div.logo{
      width:60%;
    }
  }


`    
export const Fundo = styled.div`
    width: 100%;
    background-color: ${cores.secundaria};
    border-bottom: 1.125rem ${cores.secundaria} solid;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%; 
`