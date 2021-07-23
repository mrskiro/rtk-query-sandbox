import * as React from "react"
import styled from "styled-components"
import * as Entity from "~/entity"

type Props = {
  pokemons: Entity.Pokemon[]
  isStop: boolean
  isShiny: boolean
}

export const PokeImage = React.memo<Props>((props) => {
  const [currentPokemon, setCurrentPokemon] = React.useState<Entity.Pokemon>(
    getRandomImage(props.pokemons)
  )

  React.useEffect(() => {
    if (props.isStop) return
    const interval = setInterval(() => {
      const poke = getRandomImage(props.pokemons)
      setCurrentPokemon(poke)
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [props.pokemons, props.isStop])

  const src = React.useMemo(() => {
    if (props.isShiny) return currentPokemon.sprites.front_shiny
    return currentPokemon.sprites.front_default
  }, [props.isShiny, currentPokemon])

  return <Img src={src} />
})

function getRandomImage(pokemons: Entity.Pokemon[]): Entity.Pokemon {
  return pokemons[Math.floor(Math.random() * pokemons.length)]
}

const Img = styled.img`
  width: 220px;
  height: 220px;
`
