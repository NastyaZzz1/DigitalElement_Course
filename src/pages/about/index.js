import { getPage } from "../../shared/lib/index.js"

export default () => {
  return getPage({
    title: "О нас",
    body: `
      <h1>О нас</h1>
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
    `,
  })
}