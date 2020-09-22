import { IncomingMessage, request, RequestOptions } from 'http'

export interface Response<T = any> extends Partial<IncomingMessage> {
  /** HTTP Response Body */
  body?: T
}

/**
 * Wraps `http.request`, Returns with the http response with the combined chunks
 * as the `body`. Rejects on `error` from `request`
 * @param options request options
 * @param body request body
 * @param parseJson should response as JSON. If false `body` will be `string`
 */
const requestAsync = <T = any>(
  options: string | RequestOptions | URL,
  body?: string | Buffer,
  parseJson: boolean = true
) => {
  return new Promise<Response<T | string>>((resolve, reject) => {
    const callback = (response: IncomingMessage) => {
      let body: string
      response.on('data', chunk => {
        if (typeof body === 'undefined') {
          body = ''
        }
        body += chunk
      })

      response.on('end', function () {
        if (parseJson) {
          resolve({ ...response, body: JSON.parse(body) })
        } else {
          resolve({ ...response, body })
        }
      })

      response.on('error', () => {
        reject('an error occured while making the request')
      })
    }

    const req = request(options, callback)

    if (typeof body !== 'undefined') {
      req.write(body)
    }

    req.end()
  })
}

export default requestAsync
