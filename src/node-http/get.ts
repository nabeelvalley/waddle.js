import { RequestOptions } from 'http'
import requestAsync from './requestAsync'

const get = async <T = any>(requestOptions: RequestOptions) => {
  const options: RequestOptions = {
    ...requestOptions,
    method: 'GET',
  }

  return await requestAsync<T>(options, undefined)
}

export default get
