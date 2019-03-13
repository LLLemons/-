import { httpGet, httpPost } from './utils'
const service = {
  /**
   * 获取轮播数据
   */
  async getBannerList() {
    return httpGet('banner')
  },
  /**
   * 获取分类数据
   */
  async getSortList() {
    return httpGet('sort')
  },
  /**
   * 获取商品列表
   */
  async getGoodList(sort, page, size = 5) {
    return httpGet('good', { sort, page, size })
  },
  /**
   * 获取每日推荐
   */
  async getGoodListRec(page, size = 5, hot = 1) {
    return httpGet('good', { page, size, hot })
  },
  /**
   * 获取商品详情
   */
  async getGoodDetail(id) {
    return httpGet(`good/${id}`)
  },
  /**
   * 加入购物车
   */
  async addCartApi(id, size) {
    return httpPost('shopcart', { id, size })
  },
  /**
   * 登陆
   */
  async signInApi(phone, password) {
    return httpPost('login', { phone, password })
  },
  /**
   * 注册
   */
  async signUpApi(phone, password) {
    return httpPost('register', { phone, password })
  }
}
export default service
