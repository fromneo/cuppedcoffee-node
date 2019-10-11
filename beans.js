require('dotenv').config()
const knex = require('./config')

const getBeans = async(request, response) => {
    try {
        let beans = await knex('beans')
        console.log(typeof(beans))
        response.status(200).render('index', {data: beans})
      } catch (e) {
        console.log(e)
      }
}

const getBeansById = async(request, response) => {
    try {
        const id = parseInt(request.params.id)
        let bean = await knex('beans').where('id', id)
        response.json(bean).status(200)
      } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getBeans,
    getBeansById
}