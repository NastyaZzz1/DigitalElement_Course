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
                ${category.map(cat => `<label><input ${cat.isChecked ? "checked" : ""} data-js-search-param="" type="checkbox" value="${cat.searchParam}">${cat.name}</label>`).join("")}
            </section>
            `
}