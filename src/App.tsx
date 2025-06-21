import { RouterProvider } from 'react-router-dom'
import { CountriesContextProvider } from './context/CountriesContext'
import { router } from './router'

const App = () => {
  return (
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  )
}

export default App
