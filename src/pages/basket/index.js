import { getPage } from "../../shared/lib/index.js"
import { Footer, Header } from "../../widgets"

export default () => {
    return getPage({
      title: "Главная / Корзина",
      body: `
        ${Header()}
        <div class="content">
            <ul class="nav_line">
                <li>
                    <a class="nav_line_link" href="/">ГЛАВНАЯ</a>
                </li>
                <div>/</div>
                <li>
                    <a class="nav_line_link" href="/basket.html">КОРЗИНА</a>
                </li>
            </ul>
            <h1>Корзина</h1>
            <li class="continue_shop">
                <a class="continue_shop_text" href="/catalog.html">Продолжить покупки</a>
            </li>
        </div>
        ${Footer()}
      `,
    })
  }