import { testAsync, assert } from '../../node-test'
import { get } from '../../node-http'
import { Endpoints, Post1 } from './JsonBin'

testAsync('http get matches expected', async () => {
  const actual = await get({ host: Endpoints.Host, path: Endpoints.Post1 })

  assert.isDefined(actual)
  assert.isEqual(actual.statusCode, 200)
  assert.isDeepEqual(actual.body, Post1)
})

export default 'object-comparison tests'
