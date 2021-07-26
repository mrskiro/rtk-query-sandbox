import axios from "axios"
import * as Entity from "~/entity"

const endPoint = "https://pokeapi.co/api/v2/"

const apiInstance = axios.create({
  baseURL: endPoint,
})

const getPokemonByName = async (name: string) => {
  const response = await apiInstance.get(`pokemon/${name}`)
  return response.data
}

export const getPokemonsToLimit = async (limit: number) => {
  const response = await apiInstance.get(`pokemon/?limit=${limit}`)
  const result = response.data.results as any[]
  const data = [] as Entity.Pokemon[]
  for (const p of result) {
    const d = await getPokemonByName(p.name)
    data.push(d)
  }
  return data
}

export const extraArgument = {
  api: {
    getPokemonsToLimit,
  },
}
