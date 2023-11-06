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
        <div class="${getClassName("logo", { isValid: true })}">
            ${Logo({imgScr: "/icons/logo.svg"})}
        </div>
        <div class="${getClassName("nav")}"> Nav </div>
        </header>
        `
}