import { Padrao } from "./style/GlobalStyle";
import { Rout } from "react-router-dom"
import { BrowserRouter } from "react-router-dom" 

export function App(){
    return(
        <BrowserRouter>
            <Padrao />
            <Rout />
        </BrowserRouter>
    )
}