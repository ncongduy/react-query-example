import axiosClient from './axiosClient'

const country = {
  getCountry(name) {
    const url = `/name/${name}?fullText=true`
    return axiosClient.get(url)
  }
}

export default country
