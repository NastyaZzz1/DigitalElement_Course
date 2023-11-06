// import { Button } from "../../shared/ui/Button"
import { Filter } from "../../widgets/filter"
import { getPage } from "../../shared/lib/index.js"
// import { Footer, Header } from "../../widgets"

const cat = [
  
    {
      name: "Все курсы",
      searchParam: "all",
      isChecked: true
    },
    {
      name: "Фронтенд",
      searchParam: "front"
    },
    {
      name: "Бэкенд",
      searchParam: "back"
    },
  
]

// const cat = [
//   {
//     all: {
//       name: "Все курсы",
//       searchParam: "all",
//       isChecked: true
//     },
//     front: {
//       name: "Фронтенд",
//       searchParam: "front"
//     },
//     back: {
//       name: "Бэкенд",
//       searchParam: "back"
//     },
//   }
// ]
export default () => {
  
  return getPage({
    title: "Главная",
    body: `
      <h1>Каталог</h1>
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
