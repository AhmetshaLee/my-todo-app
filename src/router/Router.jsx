import { useRoute } from "./useRoute"

const Router = (props) => {
  const { routes } = props
  const path = useRoute()
  const Page = routes[path] ?? routes["*"]

  return <Page />
}

export default Router
