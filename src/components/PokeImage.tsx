import * as React from "react"
import styled from "styled-components"
import * as Entity from "~/entity"

type Props = {
  pokemons: Entity.Pokemon[]
  isStop: boolean
}

export const PokeImage = React.memo<Props>((props) => {
  const [currentImage, setCurrentImage] = React.useState("")

  React.useEffect(() => {
    if (props.isStop) return
    const interval = setInterval(() => {
      const src = getRandomImage(props.pokemons)
      setCurrentImage(src)
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [props.pokemons, props.isStop])

  return <Img src={currentImage} />
})

function getRandomImage(pokemons: Entity.Pokemon[]): string {
  return pokemons[Math.floor(Math.random() * pokemons.length)].sprites
    .front_default
}

const Img = styled.img`
  width: 220px;
  height: 220px;
`
