import React from "react"
import type { Countries } from "../context/CountriesContext"

export function useCountries() {
  const [countries, setCountries] = React.useState<Countries[]>([])

  React.useEffect(() => {
    async function fetchCountries() {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flag,flags')
      const data: Countries[] = await response.json()
      setCountries(data)
  }

    fetchCountries()
  }, [])

  return {countries, setCountries}
}
