import * as React from "react"
import styled from "styled-components"
import * as Api from "~/store/api"
import { PokeImage } from "~/components/PokeImage"

export const App = () => {
  const [isStop, setIsStop] = React.useState(false)
  const {
    data: pokemons,
    isLoading,
    isError,
  } = Api.useGetPokemonsToLimitQuery({ limit: 151 })

  const onClick = React.useCallback(() => {
    setIsStop((isStop) => !isStop)
  }, [])

  if (isError) return <div>error!</div>
  if (isLoading) return <div>loading...</div>

  return (
    <Layout>
      <PokeImage pokemons={pokemons!} isStop={isStop} />
      <button onClick={onClick}>{isStop ? "Restart" : "Stop"}</button>
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
