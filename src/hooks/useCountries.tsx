import React from "react"
import type { Countries } from "../context/CountriesContext"

export function useCountries() {
  const [countries, setCountries] = React.useState<Countries[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<null | string>(null)

  React.useEffect(() => {
    async function fetchCountries() {
      setLoading(true)
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flag,flags,translations')
        const data: Countries[] = await response.json()
        setCountries(data)
      } catch (error) {
        if(error instanceof Error) setError(error.message)
      } finally {
        setLoading(false)
      }
  }

    fetchCountries()
  }, [])

  return {countries, setCountries, loading, error}
}
