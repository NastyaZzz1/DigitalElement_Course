// import { Button } from "../../shared/ui/Button"
import { Filter } from "../../widgets/filter"
import { getPage } from "../../shared/lib/index.js"
import { Footer, Header } from "../../widgets"

const cat = [
    {
      name: "Все курсы",
      searchParam: "all",
      isChecked: true
    },
    {
      name: "Фронтенд-разработка",
      searchParam: "front"
    },
    {
      name: "Бэкенд-разработка",
      searchParam: "back"
    },
  
]

export default () => {
  
  return getPage({
    title: "Главная / Каталог",
    body: `
      ${Header()}
      <div class="content">
        <nav>
          <ul class="nav_line">
          <li>
              <a class="nav_line_link" href="/">ГЛАВНАЯ</a>
          </li>
          <div>/</div>
          <li>
              <a class="nav_line_link" href="/basket.html">КОРЗИНА</a>
          </li>
        </ul>
        </nav>
        <h1>Каталог</h1>
        ${Filter({category: cat})}
      </div>
      ${Footer()}
    `,
  })
}
