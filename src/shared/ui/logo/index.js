import { commonComponentProps, getAttrs  } from "../../lib/index.js"

export function Logo (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "logo", getCN, imgScr } = { ...commonComponentProps, ...props }

    const getClassName = (elen, mod) => getCN(baseClass, elen, mod)

    return `<img src="${imgScr}" class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} alt="logo" />`
}