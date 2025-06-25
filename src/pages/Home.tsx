import React from 'react'
import { CountriesContext } from '../context/CountriesContext'
import InputComponent from '../components/InputComponent'
import { Link } from 'react-router-dom'
import CountryCard from '../components/CountryCard'
import SelectedComponent from '../components/SelectedComponent'

const Home = () => {
  const {countries, loading, error, inputValue, changeInoutValue, ling, changeLing} = React.useContext(CountriesContext)

  return (
    <div className='grid pt-1 pr-2 pl-2 mb-8 sm:pt-2 sm:pr-4 sm:pl-4 lg:pt-6 lg:pr-8 lg:pl-8'>
      <div className='mb-2 grid justify-items-end'>
        <SelectedComponent value={ling} func={changeLing} />
      </div>

      <div className='justify-self-center grid gap-4 mb-8'>
        <h2 className='text-xl sm:text-2xl'><span className='mr-4'>🌍</span>Explore os países do mundo</h2>
        <InputComponent value={inputValue} func={changeInoutValue} />
      </div>

      {loading && <div className='text-center text-gray-400'>Carregando...</div>}
      {error && <div className='text-center text-gray-400'>Algo deu errado!</div>}

      <div className='grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {countries.map((country) => (
          <Link className='bg-gray-50 p-4 grid' to={`/pais/${country.name.common.toLocaleLowerCase()}`} key={country.name.common}>
            <CountryCard name={country.translations[ling].common} flag={country.flags.svg} alt={country.flags.alt} />
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