import { commonComponentProps, getAttrs } from "../../../shared/lib"

export function Footer(props) {
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "footer",
        getCN,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <footer  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-footer="" >
            <nav class="upper_container">
                <ul class="footer_links">
                    <li>
                        <a class="link" href="/catalog.html">КУРСЫ</a>
                    </li>
                    <li>
                        <a class="link" href="/about.html">О НАС</a>
                    </li>
                    <li>
                        <a class="link" href="/reviews.html">ОТЗЫВЫ</a>
                    </li>
                    <li>
                        <a class="link" href="/contacts.html">КОНТАКТЫ</a>
                    </li>
                </ul>
                <div>Политика конфиденциальности</div>
            </nav>
            <div class="low_container">
                <div>
                    <p class="name_cont">Наш адрес</p>
                    <p>г. Челябинск, ул. Лесопарковая 5/2</p>
                </div>
                <div>
                    <p class="name_cont">Эл. почта</p>
                    <p>info@d-element.ru</p>
                </div>
            </div> 
        </footer>
        `
        // padding-left: 0;
}