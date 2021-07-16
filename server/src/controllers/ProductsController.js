const { Product } = require('../models')
const multer = require('multer')

module.exports = {
  async getSongs (req, res) {
    try {
      const products = await Product.findAll({
        where: {}
      })
      res.send(products)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the products.'
      })
    }
  },
  async post (req, res, cb) {
    try {
      const product = await Product.create(req.body)
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured add a product'
      })
    }
  }
}
