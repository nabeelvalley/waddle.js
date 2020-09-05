interface Collection<T> {
  getOne: (index: number) => T
  getAll: () => T[]
  insertOne: (item: T) => void
  insertMany: (items: T[]) => void
  updateOne: (index: number, item: T) => T
  findMany: (predicate: (item: T) => boolean) => T[]
  findIndex: (predicate: (item: T) => boolean) => number | undefined
  findOne: (predicate: (item: T) => boolean) => T | undefined
}

export default Collection
