import * as React from "react"
import styled from "styled-components"
import * as Api from "~/store/api"
import { PokeImage } from "~/components/PokeImage"

export const App = () => {
  const [isStop, setIsStop] = React.useState(false)
  const [isShiny, setIsShiny] = React.useState(false)

  const {
    data: pokemons,
    isLoading,
    isError,
  } = Api.useGetPokemonsToLimitQuery({ limit: 151 })

  const onClick = React.useCallback(() => {
    setIsStop((isStop) => !isStop)
  }, [])

  const onShinyClick = React.useCallback(() => {
    setIsShiny((isShiny) => !isShiny)
  }, [])

  if (isError) return <div>error!</div>
  if (isLoading) return <Layout>loading...</Layout>

  return (
    <Layout>
      <ButtonGroup>
        <Button isClicked={isShiny} onClick={onShinyClick}>
          色違い
        </Button>
      </ButtonGroup>
      <PokeImage pokemons={pokemons!} isStop={isStop} isShiny={isShiny} />
      <Button onClick={onClick}>{isStop ? "Restart" : "Stop"}</Button>
    </Layout>
  )
}

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const ButtonGroup = styled.div`
  display: flex;
`

const Button = styled.button<{ isClicked?: boolean }>`
  background-color: ${(props) => (props.isClicked ? "gray" : "inherit")};
`
