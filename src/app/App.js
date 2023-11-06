import HeaderModel from "../widgets/header/model/index.js"
import FilterModel from "../widgets/filter/model/index.js"


const startDev = async () => {
    const { worker } = await import("../shared/api/browser.js")
    await worker.start()
    console.log("App started in development mode")
}

const startProd = async () => {
    // Logic for production mode
}

const runWidgets = async () => {
    new HeaderModel()
    new FilterModel()
    await Promise.all(Object.keys(import.meta.glob("../**/*.pcss", { "query": "?inline" })).map(path => import(`${path}`).then((module) => module?.default ?? module)))
}

const runApp = async () => {
    try {
        switch (process.env.NODE_ENV) {
            case "production":
                await startProd()
                break
            case "development":
                await startDev()
                await runWidgets()
                break
            default:
                console.log("Unknown NODE_ENV:", process.env.NODE_ENV)
                break
    }
    } catch (e) {
        console.log(e)
    }
}

runApp()