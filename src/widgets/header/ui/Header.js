import { commonComponentProps, getAttrs } from "../../../shared/lib";
import { Logo } from "../../../shared/ui/logo"

export function Header(props) {
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "header",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elen, mod) => getCN(baseClass, elen, mod)

    return `
        <header class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
            <nav class="container">
                <div class="${getClassName("logo", { isValid: true })}">
                    ${Logo({imgScr: "public/icons/logo.svg"})}
                </div>
                <ul class="links">
                    <li>
                        <a class="link" href="/">ГЛАВНАЯ</a>
                    </li>
                    <li>
                        <a class="link" href="/catalog.html">КАТАЛОГ</a>
                    </li>
                    <li class="basket_button">
                        <a class="basket_text" href="/basket.html">
                            <img src="public/icons/basket.png" width="18" height="18"> Корзина
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        `
}