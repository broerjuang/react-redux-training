import express from 'express'

let app = express()

app.get('/', (req, res) => {
  res.send('hello from server')
})

app.listen(3000, () => {
  console.log('server is running on 3000')
})
