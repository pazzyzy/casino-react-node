import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {} from 'dotenv/config'
import sequelize from './db.mjs'
import { User } from './models/models.mjs'
import router from './routes/index.mjs'
import errorHandler from './middleware/ErrorHandlingMiddleware.mjs'

const PORT = process.env.PORT || 7001

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler) // мидлв раб с ошибками должен идти последним

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server is listening at port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
