import wepy from 'wepy'
const URI = 'http://127.0.0.1:7001/api/'
export const httpPost = (url, data = {}) => {
  return wepy.request({
    url: `${URI}${url}`,
    data,
    method: 'POST',
    dataType: 'json',
    header: { 'content-type': 'application/json' }
  })
}
export const httpGet = (url, data = {}) => {
  return wepy.request({
    url: `${URI}${url}`,
    data,
    method: 'GET',
    dataType: 'json',
    header: { 'content-type': 'application/json' }
  })
}
