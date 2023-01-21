export interface ICountries {
  capital: string
  flags: { svg: string; png: string }
  independent: boolean
  name: string
  population: number
  region: string
}

export interface ServerResponse<T> {
  info: {
    count: number
    pages: number
    next: string
    prev: string
  }
  results: T[]
}
