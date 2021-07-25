import * as React from "react"
import styled from "styled-components"
import * as Entity from "~/entity"

type Props = {
  pokemons: Entity.Pokemon[]
  isStop: boolean
  isShiny: boolean
  isBack: boolean
}

export const PokeImage = React.memo<Props>((props) => {
  const [currentPokemon, setCurrentPokemon] = React.useState<Entity.Pokemon>(
    getRandomPokemon(props.pokemons)
  )

  React.useEffect(() => {
    if (props.isStop) return
    const interval = setInterval(() => {
      const poke = getRandomPokemon(props.pokemons)
      setCurrentPokemon(poke)
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [props.pokemons, props.isStop])

  const src = React.useMemo(() => {
    if (props.isShiny && props.isBack) return currentPokemon.sprites.back_shiny
    if (props.isBack) return currentPokemon.sprites.back_default
    if (props.isShiny) return currentPokemon.sprites.front_shiny

    return currentPokemon.sprites.front_default
  }, [props.isShiny, props.isBack, currentPokemon])

  return (
    <>
      <Img src={src} alt="pokemon" />
      <P>{props.isStop ? currentPokemon.name : ""}</P>
    </>
  )
})

function getRandomPokemon(pokemons: Entity.Pokemon[]): Entity.Pokemon {
  return pokemons[Math.floor(Math.random() * pokemons.length)]
}

const Img = styled.img`
  width: 220px;
  height: 220px;
`

const P = styled.p`
  height: 16px;
`
