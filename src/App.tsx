import { Padrao } from "./style/GlobalStyle";
import { RouteSoftware } from "react-router-dom"
import { BrowserRouter } from "react-router-dom" 

export function App(){
    return(
        <BrowserRouter>
            <Padrao />
            <RouteSoftware />
        </BrowserRouter>
    )
}