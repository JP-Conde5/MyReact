import * as S from "./style"
import { ComponentMenu } from "../index"
import logo from "../../images/icon.png"

import React, { useState } from "react";

export function Header() {
    const [isMenuChecked, setMenuChecked] = useState(false);
                const handleMenuCheckboxChange = (isChecked) => {
                    setMenuChecked(isChecked)
                };
    return (
        <S.Fundo>
            <S.Header>
                
                <div>
                    <picture>
                         <img src={logo} alt="Logo" />
                    </picture>
                    <h1>Doces da Rose</h1>
                </div>
                <ComponentMenu onCheckboxChange={handleMenuCheckboxChange} />
      <nav className={isMenuChecked ? "" : "hidden"}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/revenues">Receitas</a>
                        </li>
                    </ul>
                </nav>
            </S.Header>
        </S.Fundo>
    )
}