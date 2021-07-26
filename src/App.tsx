import * as React from "react"
import styled from "styled-components"
import * as ReactRedux from "react-redux"
import * as Api from "~/store/api"
import * as PokemonsOperations from "~/store/entities/pokemons/operations"
import * as PokemonsSelectors from "~/store/entities/pokemons/selectors"
import { PokeImage } from "~/components/PokeImage"

export const App = () => {
  const [isStop, setIsStop] = React.useState(false)
  const [isShiny, setIsShiny] = React.useState(false)
  const [isBack, setIsBack] = React.useState(false)

  const dispatch = ReactRedux.useDispatch()
  const isLoading = ReactRedux.useSelector(PokemonsSelectors.isLoading)
  const isError = ReactRedux.useSelector(PokemonsSelectors.isError)
  const pokemons = ReactRedux.useSelector(
    PokemonsSelectors.pokemonsSelector.selectAll
  )

  // const {
  //   data: pokemons,
  //   isLoading,
  //   isError,
  // } = Api.useGetPokemonsToLimitQuery({ limit: 151 })
  React.useEffect(() => {
    dispatch(PokemonsOperations.getPokemonsToLimit({ limit: 151 }))
  }, [])

  const onClick = React.useCallback(() => {
    setIsStop((isStop) => !isStop)
  }, [])

  const onShinyClick = React.useCallback(() => {
    setIsShiny((isShiny) => !isShiny)
  }, [])

  const onBackClick = React.useCallback(() => {
    setIsBack((isBack) => !isBack)
  }, [])

  if (isError) return <div>error!</div>
  if (isLoading || !pokemons.length) return <Layout>loading...</Layout>

  return (
    <Layout>
      <ButtonGroup>
        <Button isClicked={isShiny} onClick={onShinyClick}>
          色違い
        </Button>
        <Button isClicked={isBack} onClick={onBackClick}>
          後ろ姿
        </Button>
      </ButtonGroup>
      <PokeImage
        pokemons={pokemons}
        isStop={isStop}
        isShiny={isShiny}
        isBack={isBack}
      />
      <Button onClick={onClick}>{isStop ? "もう一回" : "ストップ"}</Button>
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
  gap: 8px;
`

const Button = styled.button<{ isClicked?: boolean }>`
  background-color: ${(props) => (props.isClicked ? "gray" : "inherit")};
`
