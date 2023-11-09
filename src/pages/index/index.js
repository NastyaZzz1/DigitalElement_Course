import { Button } from "../../shared/ui/button/button.js"
import { getPage } from "../../shared/lib/index.js"
import { Footer, Header } from "../../widgets"

export default () => {

  const testButton = false
  
  return getPage({
    title: "Digital-academy",
    breadCrumbs:{
        main: "/",
        aboutPage: "/about"
    },
    body: `
      ${Header()}
      <div class="content">
        <h1>Популярные товары</h1>

        <!--${Button({
          label: "Кнопка",
          extraAttrs: {
            "data-js-require": true,
            "id": "btn"
          },
          extraClasses: {
            isHidden: true,
            isDisabled: testButton
          }
        })} -->
        
        <div class="paragraphs">
          <div class="about">
            <h2>О нас</h2>
              <div class="paragraph1">
                <p class="blue_text">>100 сотрудников</p>
                <p>Аттестованных middle и senior разработчиков со всеми необходимыми компетенциями для создания качественных продуктов, 
                которые занимают призовые места на всероссийских и международных конкурсах.</p>
              </div>
              <div class="paragraph2">
                <p class="blue_text">Своя диджитал академия</p>
                <p>Курсы по основам управления проектами, веб-разработки, программированию. 
                Много практики, основанной на проектах нашей компании, познавательные лекции и море интерактива.</p>
              </div>
          </div>
          <div class="how">
            <h2>Как пройти курс</h2>
            <p>Записывайтесь и получайте новые знания! Делайте репост и отправляйте друзьям, которым эта новость будет полезна.</p>
            <p class="blue_text">Ждем вас на наших курсах!</p>
          </div>
        </div>
      </div>
      ${Footer()}
    `,
  })
}