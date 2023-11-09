import { defineConfig } from 'vite'
import { createHtmlPlugin } from "vite-plugin-html"
import mainPage from "./src/pages/index"
import catalogPage from "./src/pages/catalog" 
import basketPage from "./src/pages/basket"

const pages = [
    {
        name: "index",
        content: mainPage(),
    },
    {
        name: "catalog",
        content: catalogPage(),
    },
    {
        name: "basket",
        content: basketPage(),
    },
]

export default defineConfig({
    plugins:[
        createHtmlPlugin({
            minify: true,
            pages: pages.map(({ name, content }) => ({
                filename: `${name}.html`,
                template: `${name}.html`,
                injectOptions: {
                    data: {
                        injectScript: content,
                    },
                },
            })),
        }),
    ],
})
