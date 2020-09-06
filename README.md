# Waddle.js

Waddle.js is a collection of Javascript and Typescript libraries for performing
common tasks in Node.js or the browser

## Node-Test

A unit testing libary that can test collections. Based on the built-in Node.JS
`assert` module. Can test `sync` and `async` code

Usage of this library works (though not yet complete). The `src/tests` directory
uses this to test the `waddle.js` repo

### Basic Usage

To setup a test using `node-test`, create a directory from which to run tests
with a test file in it. This can be any TS module and is automatically run when
imported. Use the `test` function to run a test

`src/tests/my-test.ts`

```ts
import { test, assert } from '../../node-test'

test('my-test: compare some strings', () => {
  const actual = 'actual'
  const expected = 'expected'

  assert.isEqual(actual, expected)
})
```

Next, create an `index.ts` file in the `tests` directory which just imports all
your tests

`src/tests/index.ts`

```ts
// import tests
import './my-test'
// ... import other tests
```

Lastly - compile the Typescript as your project requires, then run the file. For
example, based on the configuration of this repo you would need to run
`node build/tests/index.js`

### Advanced Usage

If you'd like to track the test progress, define a `Runner` **before** importing
the tests into an `index.ts` file. Then create a runner instance

`src/tests/index.ts`

```ts
// import test runner
import Runner from '../node-test/Runner'

// start runner with an optional close handler
const runner = new Runner(() => {
  console.log('close handler, triggered before process exits')
})

// import tests
import './my-test'
// ... import other tests

// get status while tests are running if you want
const status = runner.getTestStatus()
console.log('get test status while runs are in progress', status)
```

## Node-Persist

Basic data-storage mechanisms, currently supports an in-memory synchronouse DB
with the plan to add support for an event-driven database with static file
persistence, import, and export and connectivity with more traditional databases

### Usage

To use the `node-persist` in-memory storage you can create an `InMemory`
instance with a unique `key` to identify a collection. You can then use
available functions on the `InMemory` class instance to access and work with
data:

```ts
const db = new InMemory<MyDataType>('my-collection-key')
db.insertOne({ name: 'test' })

const allData = db.getAll()
```

You can create any other instances of the `InMemory` object and as long as you
use the same `key` when initializing they will have access to the same data

## Node-Logger

Colour based logging, currently supporting console with the plan to add
file-based and database logging

## Usage

The `node-logger` provides functionality to create different loggers. You can
create a logger that can log in a specific colour with the `createColouredLog`
function:

```ts
const magentaLog = createColouredLog(Colour.BgMagenta, LogLevel.Log)
```

And can be used with:

```ts
magentaLog('stuff to log')
```

If you would like a logger that has basic `console` like interfaces use the
`PreconfiguredLogger` class. You can create an instance of the logger like so:

```ts
const logger = new PreconfiguredLogger()
```

And then use it:

```ts
logger.log('log')
logger.warn('warn')
logger.info('info')
logger.error('error')
```

## Node-Utils

Some basic general-purpose utilities, consumed mostly by other libraries
