const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 3000
const beans = require('./beans')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// base route
app.get('/', (request, response) => response.json({ info: 'CuppedCoffee API' }))

// beans
app.get('/beans', beans.getBeans)
app.get('/beans/:id', beans.getBeansById)
// beans should have a country, a roaster, a type, and a name



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})