import React from 'react'
import { CountriesContext } from '../context/CountriesContext'
import InputComponent from '../components/InputComponent'
import { Link } from 'react-router-dom'
import CountryCard from '../components/CountryCard'

const Home = () => {
  const {countries, inputValue, changeInoutValue} = React.useContext(CountriesContext)

  return (
    <div className='grid pt-2 pr-2 pl-2 mb-8 sm:pt-4 sm:pr-4 sm:pl-4 lg:pt-8 lg:pr-8 lg:pl-8'>
      <div className='justify-self-center grid gap-4 mb-8'>
        <h2 className='text-xl sm:text-2xl'><span className='mr-4'>🌍</span>Explore os países do mundo</h2>
        <InputComponent value={inputValue} func={changeInoutValue} />
      </div>
      <div className='grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {countries.map((country) => (
          <Link className='bg-gray-50 p-4 grid' to={`/pais/${country.name.common.toLocaleLowerCase()}`} key={country.name.common}>
            <CountryCard name={country.name.common} flag={country.flags.svg} alt={country.flags.alt} />
          </Link>
        ))}
      </div>
      <div className='mb-8'>
        <p className='text-sm sm:text-[1rem] text-center text-gray-400'>Diretos reservados ao desenvolvedor Tomaz Costa.</p>
      </div>
    </div>
  )
}

export default Home
