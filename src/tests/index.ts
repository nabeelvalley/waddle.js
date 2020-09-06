// import test runner
import Runner from '../node-test/Runner'

// start runner with an optional close handler
const runner = new Runner(() => {
  console.log('close handler, triggered before process exits')
})

// import tests
import './node-utils/counter.test'
import './node-test/async-assertions.test'
import './node-test/object-comparisons.test'
import './node-test/throw-error.test'
import './node-persist/in-memory.test'

// get status while tests are running
const status = runner.getTestStatus()
console.log('get test status while runs are in progress', status)
