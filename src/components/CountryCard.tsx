type CountryCardProps = {
  name: string,
  flag: string,
  alt: string,
}

const CountryCard = ({name, flag, alt}: CountryCardProps) => {
  return (
    <div className='grid justify-items-center items-end'>
      <img className='max-w-28 sm:max-w-32 md:max-w-34 lg:max-w-38' src={flag} alt={alt}/>
      <h3>{name}</h3>
    </div>
  )
}

export default CountryCard
