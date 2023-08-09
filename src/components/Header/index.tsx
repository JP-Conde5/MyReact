import * as S from "./style"
import logo from "../../images/bolo.png"

export function Header(){
    return(
        <S.Fundo>
            <S.Header>
                <div>
                    <picture>
                        <img src={logo} alt="Logo" />
                    </picture>
                    <h1>Doces da Rose</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="">Home</a>    
                        </li>
                        <li>
                            <a href="">Receitas</a>
                        </li>
                    </ul>
                </nav>
            </S.Header>
        </S.Fundo>
    )    
}