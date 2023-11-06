/**
 * Модель скрипта описывает основную JS-логику.
 * Может служить как самостоятельным скриптом, так и отправной точкой для монтирования иных компонентов.
 */

export default class FilterModel {
    static selectors = {
        instanceSelector: "[data-js-filter]",
        checkboxSelectors: "[data-js-search-param]"
    };

    static instance = null

    constructor(){
        if (FilterModel.instance) {
            return FilterModel.instance;
        }

        FilterModel.instance = document.querySelector(FilterModel.selectors.instanceSelector);
        this.btns = Array.from(document.querySelectorAll(FilterModel.selectors.btnSelectors))
        this.url = new URL(window.location.href)
        this.init()
    }

    getSearchParam(btn) {
        return btn.getAttribute(FilterModel.selectors.btnSelectors)
    }

    clickedBtn(e) {
        console.debug(this.btn)
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", this.clickedBtn)
        })
    }
}
