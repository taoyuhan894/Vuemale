import { request,requestData } from "./request";
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type,page) {
  return requestData({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

export function getHomeGoodsTitle() {
  return requestData({
    url: '/home/data?type=pop&page=1',
  })
}