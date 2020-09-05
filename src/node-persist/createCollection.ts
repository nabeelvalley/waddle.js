import Collection from './interfaces/Collection'

/**
 * Creates a collection in which elements can only be inserted and updated,
 * deletion is prevented on the collection
 */
const createCollection = <T>(): Collection<T> => {
  const collection: T[] = []

  return {
    getOne: (index: number) => collection[index],
    getAll: () => collection,
    insertOne: (item: T) => {
      collection.push(item)
    },
    insertMany: (items: T[]) => {
      collection.push(...items)
    },
    updateOne: (index: number, item: T) => {
      collection[index] = { ...collection[index], ...item }
      return collection[index]
    },
    findMany: (predicate: (item: T) => boolean) => {
      return collection.filter(predicate)
    },

    findIndex: (predicate: (item: T) => boolean) => {
      const index = collection.findIndex(predicate)
      if (index < 0) return undefined
      else return index
    },
    findOne: (predicate: (item: T) => boolean) => {
      return collection.find(predicate)
    },
  }
}

export default createCollection
