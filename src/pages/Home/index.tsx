import * as S from "./style.ts"
import vovo from "../../images/vovo.png"

export function Home() {
    return(
        <S.Home>
            <div>
                <img src={vovo} alt="Vovó nde Rose" />    
            </div>
            <div>
                <article>
                    <h1>Seja bem-vindo!</h1>
                    <br />
                    <p>Eu sou vovó Rose e estou aqui para ensinar você, usuário de meu site, a fazer receitas para toda a família. Seja bem-vindo e aproveite os melhores sabores que podemos fazer com uma pitada de amor.</p>
                </article>
            </div> 
        </S.Home>    
    )
}