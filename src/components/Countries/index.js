import {useQuery} from "react-query";

import allCountriesApi from '../../fetchApi/allCountriesApi'

function Countries() {
  const {isLoading, error, data} = useQuery('countries', allCountriesApi.getAllCountries)

  console.log('data: ', data)

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
        {data && data.map((dt, index) => (
          <tr key={index}>
            <td>{dt?.name?.common}</td>
            <td><img src={dt?.flags?.svg} alt="flag of nation" width="100" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Countries
