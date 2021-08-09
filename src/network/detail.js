import { request, requestData } from "./request";
export class Goods {
  constructor(itemInfo,columns,detailInfo) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.realPrice = itemInfo.lowNowPrice
    this.detailInfoImage = detailInfo.detailImage[0].list
  }
}
export function getDetailGoods(iid) {
  return requestData({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommendGoods() {
  return requestData({
    url: '/recommend'
  })
}