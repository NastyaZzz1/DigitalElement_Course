import { rest } from "msw"

export const handlers = [
    rest.get("/api/getProducts", (req, res, ctx) => {
    return res(
      ctx.json({
        isSuccess: "true",
        data: {
          idProduct: "123",
          label: "Бесплатный офлайн курс",
          productName: "«Frontend-разработчик»",
          category: ["Веб-разработка", "Мобильная разработка"],
          imageSrc: "/images/course-image.png",
          registration: {
            startDate: "298347302984",
            endDate: "239847320984",
          },
          startCourse: "2389047320",
          price: 10000,
          isPopular: true,
        },
      })
    )
    }),

  rest.post("/api/cartSubmit", async (req, res, ctx) => {
    try {
      // const {idGoods, promo} = req.json()
      return res(ctx.json({ message: 'ok' }))
    } catch (e) {
      console.log(e)
    }
  }),
]

