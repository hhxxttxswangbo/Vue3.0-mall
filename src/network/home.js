import { request } from './request'

export function getHomeAllData() {
  // 返回promise
  return request({
    url: '/api/index'
  })
}

//携带默认值
export function getHomeGoodsData(type = "sales", page = "1") {
  // 返回promise
  return request({
    //携带参数，type类型值为1    ？表示后面传递的参数  &表示后面继续跟参数
    url: '/api/index?' + type + '1&page=' + page
  })
}