import { commonComponentProps, getAttrs } from "../../../shared/lib";

/**
 * Виджет фильтра
 * @param extraClasses{Object}
 * @returns {string}
 * @constructor 
 */


export function Filter (props) {
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "filter",
        getCN,
        category
    } = { ...commonComponentProps, ...props }

    const getClassName = (elen, mod) => getCN(baseClass, elen, mod)

    return `
            <section class='${getClassName("", extraClasses)}' ${getAttrs(extraAttrs)} data-js-filter="" >
              ${category.map(cat => `<button data-js-search-param="${cat.searchParam}" class="${getClassName("btn")}">${cat.name}</button>`).join("")}
            </section>
            `
}

