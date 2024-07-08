import { $http } from './reqeust'

export const generateCode = (params = {}) => {
  return $http.post('/voucher/generate', {
    productCode: params.productCode || 'xunleichaojihuiyuan',
    mobilePhone: params.mobilePhone
  })
}

export const exchange = (params) => {
  return $http.post('/voucher/exchange', {
    cdkey: params.cdkey
  })
}
