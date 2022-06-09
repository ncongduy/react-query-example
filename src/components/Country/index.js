import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'

import countryApi from '../../fetchApi/countryApi'

function Country() {
  const {countryName} = useParams()
  const {isLoading, error, data} = useQuery('country', () => countryApi.getCountry(countryName))

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      {data && (
        <div>
          <h2>Country name: {countryName}</h2>
          <h2>Flag: {data[0].flag}</h2>
          <h2>Capital: {data[0].capital[0]}</h2>
          <h2>
            Areas:{' '}
            {new Intl.NumberFormat('en-EU', {maximumSignificantDigits: 3}).format(data[0].area)}{' '}
            km2
          </h2>
        </div>
      )}
    </>
  )
}

export default Country
