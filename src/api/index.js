import { $http } from './reqeust'

export const sendSms = (mobile) => {
  return $http.post('', { mobile: mobile })
}
