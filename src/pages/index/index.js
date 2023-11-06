import { Button } from "../../shared/ui/button/button.js"
import { getPage } from "../../shared/lib/index.js"
import { Footer, Header } from "../../widgets"

export default () => {

  const testButton = false
  
  return getPage({
    title: "Главная",
    breadCrumbs:{
        main: "/",
        aboutPage: "/about"
    },
    body: `
      ${Header()}
      <h1>Главная</h1>
      ${Button({
        label: "Кнопка",
        extraAttrs: {
          "data-js-require": true,
          "id": "btn"
        },
        extraClasses: {
          isHidden: true,
          isDisabled: testButton
        }
      })}
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
      ${(Footer())}
    `,
  })
}