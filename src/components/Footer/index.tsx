import * as S from "./style"
import telegram from "../../images/telegram.png"

export function Footer(){
    return(
        <S.Footer>
            <picture>
                <a href="https://web.telegram.org/" target="_blank"><img src="telegram" alt="Telegram" /></a>
            </picture>
        </S.Footer>
    )    
}