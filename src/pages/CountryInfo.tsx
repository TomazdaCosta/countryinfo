import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { CountriesContext } from '../context/CountriesContext'

const CountryInfo = () => {
  const {countryName} = useParams()
  const {country, getCountry} = React.useContext(CountriesContext)

  React.useEffect(() => {
    if(countryName) {
      getCountry(countryName)
    }
  }, [countryName])

  const nativeNameObj = country[0]?.name.nativeName
  const nameKeys = nativeNameObj?Object.keys(nativeNameObj) as (keyof typeof nativeNameObj)[]: []
  const nameKey = nameKeys[0]
  
  return (
    <div className='pt-2 pr-2 pl-2 mb-8 sm:pt-4 sm:pr-4 sm:pl-4 lg:pt-8 lg:pr-8 lg:pl-8'>
      <Link to={'/'}><button className='bg-gray-50 pt-1 pb-1 pr-2 pl-2 sm:pt-2 sm:pb-2 sm:pr-4 sm:pl-4 rounded-md cursor-pointer'>⇐ Voltar</button></Link>
      {country.map((countrySelected) => (
        <div className='grid sm:grid-cols-2' key={countrySelected.name.common}>
          <div className='mb-2 mt-4 sm:mb-4 sm:mt-8'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl'>{countrySelected.name.common}</h2>
          </div>
          <div className='col-start-1 max-w-150 sm:max-w-none'>
            <img src={countrySelected.flags.svg} alt={countrySelected.flags.alt} />
          </div>
          <div className='mt-4 sm:ml-8 sm:mt-0 *:mb-2'>
            {countrySelected.independent ? null : <p>País não independente.</p>}
            <p><span className='font-bold'>Nome oficila:</span> {nativeNameObj?.[nameKey]?.official}</p>
            <p><span className='font-bold'>Capital:</span> {countrySelected.capital}.</p>
            <p><span className='font-bold'>População total:</span> {countrySelected.population.toLocaleString('de-DE')} de pessoas.</p>
            <p><span className='font-bold'>Área total:</span> {countrySelected.area.toLocaleString('de-DE')} km².</p>
            <p><span className='font-bold'>Continente:</span> {countrySelected.continents}.</p>
            <p><span className='font-bold'>Região:</span> {countrySelected.region}.</p>
            <p><span className='font-bold'>Faz fronteira com:</span> {countrySelected.borders ? countrySelected.borders?.join(', ') : 'Não faz fronteira outros países'}.</p>
          </div>
        </div>
      ))}
      <div className='pb-8 pt-8'>
        <p className='text-sm sm:text-[1rem] text-center text-gray-400'>Diretos reservados ao desenvolvedor Tomaz Costa.</p>
      </div>
    </div>
  )
}

export default CountryInfo
