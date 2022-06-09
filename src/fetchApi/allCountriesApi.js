import axiosClient from './axiosClient'

const allCountriesApi = {
  getAllCountries() {
    const url = `/all`
    return axiosClient.get(url)
  }
}

export default allCountriesApi
