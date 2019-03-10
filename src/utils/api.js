import { httpGet } from './utils'
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
  }
}
export default service
