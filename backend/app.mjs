import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
// log info about request
app.use(morgan('tiny'))
// converts JSON to JS Obj in POST, PUT, Patch request
app.use(express.json())
// converts form data to JS OBJ in POST, PUT, PATCH request
app.use(express.urlencoded({ extended: true }))
// enable all cors request
app.use(cors())

app.use((req, res) => {
  const personData = {
    name: 'Ant',
    gender: 'male',
    photo: 'https://gc.onliner.by/images/logo/onliner_logo.v3.png?1698310615',
  }
  console.log(req.body)
  return res.json(personData)
})

app.listen(5001, () => console.log('server is listening at port 5001'))
