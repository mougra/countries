export interface ICountries {
  capital: string
  flags: { svg: string; png: string }
  independent: boolean
  name: string
  population: number
  region: string
}

export interface IInfo {
  title: string
  description: string
}
