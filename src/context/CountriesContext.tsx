
import React from "react"
import { useCountries } from "../hooks/useCountries"

export type Countries = {
  name: {
    common: string,
  },
  flags: {
    svg: string,
    alt: string,
  },
  translations: {
    [key: string]: {
      common: string,
      official: string,
    }
  }
}

export type Country = {
  name: {
    common: string,
    official: string,
    nativeName: {
      ara: {
        official: string,
        common: string
      },
      bre: {
        official: string,
        common: string
      },
      ces: {
        official: string,
        common: string
      },
      cym: {
        official: string,
        common: string
      },
      deu: {
        official: string,
        common: string
      },
      est: {
        official: string,
        common: string
      },
      fin: {
        official: string,
        common: string
      },
      fra: {
        official: string,
        common: string
      },
      hrv: {
        official: string,
        common: string
      },
      hun: {
        official: string,
        common: string
      },
      ind: {
        official: string,
        common: string
      },
      ita: {
        official: string,
        common: string
      },
      jpn: {
        official: string,
        common: string
      },
      kor: {
        official: string,
        common: string
      },
      nld: {
        official: string,
        common: string
      },
      per: {
        official: string,
        common: string
      },
      pol: {
        official: string,
        common: string
      },
      por: {
        official: string,
        common: string
      },
      rus: {
        official: string,
        common: string
      },
      slk: {
        official: string,
        common: string
      },
      spa: {
        official: string,
        common: string
      },
      srp: {
        official: string,
        common: string
      },
      swe: {
        official: string,
        common: string
      },
      tur: {
        official: string,
        common: string
      },
      urd: {
        official: string,
        common: string
      },
      zho: {
        official: string,
        common: string
      }
    }
  },
  capital: string[],
  region: string,
  borders: string[],
  population: number,
  continents: string,
  flags: {
    svg: string,
    alt: string
  },
  area: number,
  independent: boolean,
  translations: {
    [key: string]: {
      common: string,
      official: string,
    }
  }
}

type ICountriesContext = {
  countries: Countries[],
  inputValue: string,
  changeInoutValue: (value: string) => void,
  country: Country[],
  getCountry: (country: string) => void,
  ling: string,
  changeLing: (lingName: string) => void,
  loading: boolean,
  error: null | string
}

export const CountriesContext = React.createContext<ICountriesContext>({} as ICountriesContext)

export const CountriesContextProvider = ({children}: React.PropsWithChildren) => {
  const {countries, setCountries, loading, error} = useCountries()
  const allCountries = useCountries()
  const [inputValue, setInputValue] = React.useState<string>('')
  const [country, setCountry] = React.useState<Country[]>([])
  const [ling, setLing] = React.useState('por')

  const changeInoutValue = (value: string) => {
    setInputValue(value)
  }

  const getCountry = (country: string) => {
    async function getCountryInfo() {
      const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
      const json = await response.json()
      setCountry(json)
    }

    getCountryInfo()
  }

  React.useEffect(() => {
    if(inputValue !== '') {
      setCountries(allCountries.countries.filter(country => country.translations[ling].common.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())))
    } else if(inputValue === '') {
      setCountries(allCountries.countries)
    }

  }, [inputValue])

  const changeLing = (lingName: string) => {
    setLing(lingName)
  }

  return (
    <CountriesContext.Provider value={{countries, loading, error, inputValue, changeInoutValue, country, getCountry, ling, changeLing}}>
      {children}
    </CountriesContext.Provider>
  )
}
