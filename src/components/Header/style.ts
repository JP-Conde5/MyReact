import styled from "styled-components"
import { cores } from "../../style/GlobalStyle"

export const Header = styled.header`
    height: 5.625rem;
    width: 100%;
    background-color: ${cores.primaria};
    color: ${cores.branco};
    border-bottom: 1.625rem ${cores.primaria} solid;
    border-bottom-left-radius: 7%;
    border-bottom-right-radius: 7%;
    display: flex;
    align-items: center;
    div{
        width: 50%;
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
                
                a{
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
`    
export const Fundo = styled.div`
    height: 6.75rem;
    width: 100%;
    background-color: ${cores.secundaria};
    border-bottom: 1.125rem ${cores.secundaria} solid;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%; 
`