import { getPage } from "../../shared/lib/index.js"
import { Filter } from "../../widgets/filter/index.js"

const cat = [{
    all: {
        name: "Все курсы",
        searchParam: "all",
        isChecked: true
    },
    front: {
        name: "Фронтенд",
        searchParam: "front"
    },
    back: {
        name: "Бэкенд",
        searchParam: "back"
    },
}]



export default () => {
    return getPage ({
        title: "Главная",
        body: `
            <h1>Главная</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                    <li>
                        <a href="/catalog.html">Каталог</a>
                    </li>
                </ul>
            </nav>
            ${Filter({category: cat})}
        `,
    })
}
