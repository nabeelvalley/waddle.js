import Collection from './interfaces/Collection'
import createCollection from './createCollection'

/**
 * Single-Collection In-Memory DB. A respective DB instance is accessed by a key
 */
class InMemory<T> implements Collection<T> {
  constructor(key: string) {
    let store: InMemory<T> | undefined = global.__node_persist__[key]

    if (typeof store === 'undefined') {
      const collection = createCollection<T>()

      this.getOne = collection.getOne
      this.getAll = collection.getAll
      this.insertOne = collection.insertOne
      this.insertMany = collection.insertMany
      this.updateOne = collection.updateOne
      this.findMany = collection.findMany
      this.findIndex = collection.findIndex
      this.findOne = collection.findOne

      global.__node_persist__[key] = this
    } else {
      this.getOne = store.getOne
      this.getAll = store.getAll
      this.insertOne = store.insertOne
      this.insertMany = store.insertMany
      this.updateOne = store.updateOne
      this.findMany = store.findMany
      this.findIndex = store.findIndex
      this.findOne = store.findOne
    }
  }

  getOne: (index: number) => T
  getAll: () => T[]
  insertOne: (item: T) => void
  insertMany: (items: T[]) => void
  updateOne: (index: number, item: T) => T
  findMany: (predicate: (item: T) => boolean) => T[]
  findIndex: (predicate: (item: T) => boolean) => number | undefined
  findOne: (predicate: (item: T) => boolean) => T | undefined
}

export default InMemory
