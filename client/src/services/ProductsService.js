import Api from './Api'

export default {
  getSongs () {
    return Api().get('products')
  },
  post (product) {
    return Api().post('sell', product)
  }
}
