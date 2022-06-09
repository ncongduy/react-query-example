import {useQuery} from 'react-query'
import {useNavigate} from 'react-router-dom'

import allCountriesApi from '../../fetchApi/allCountriesApi'

function Countries() {
  const {isLoading, error, data} = useQuery('countries', allCountriesApi.getAllCountries)
  const navigate = useNavigate()

  const handleClick = (name) => {
    navigate(`/${name}`)
  }

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <table>
      <thead>
        <tr>
          <th>Country name</th>
          <th>Flag</th>
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((dt, index) => (
            <tr key={index} onClick={() => handleClick(dt?.name?.common)}>
              <td>{dt?.name?.common}</td>
              <td>
                <img src={dt?.flags?.svg} alt="flag of nation" width="100" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Countries
