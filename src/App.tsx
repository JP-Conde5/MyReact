import { Padrao } from "./style/GlobalStyle";
import { Rout } from "./routes/index.tsx"
import { BrowserRouter } from "react-router-dom" 

export function App(){
    return(
        <BrowserRouter>
            <Padrao />
            <Rout />
        </BrowserRouter>
    )
}