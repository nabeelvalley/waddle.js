# Waddle.js

Waddle.js is a collection of Javascript and Typescript libraries for performing
common tasks in Node.js or the browser

## Node-Test

A unit testing libary that can test collections. Based on the built-in Node.JS
`assert` module. Can test `sync` and `async` code

Usage of this library works (though not yet complete). The `src/tests` directory
uses this to test the `waddle.js` repo

To setup a test, create a directory from which to run tests with a test file in
it. This can be any TS module and is automatically run when imported. Use the
`test` function to run a test

`src/tests/my-test.ts`

```ts
import { test, assert } from '../../node-test'

test('my-test: compare some strings', () => {
  const actual = 'actual'
  const expected = 'expected'

  assert.isEqual(actual, expected)
})
```

Next, define a `Runner` **before** importing the tests into an `index.ts` file:

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
with the plann to add support for an event-driven database with static file
persistence, import, and export and connectivity with more traditional databases

## Node-Logger

Colour based logging, currently supporting console with the plan to add
file-based and database logging

## Node-Utils

Some basic general-purpose utilities, consumed mostly by other libraries
