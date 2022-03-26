import axios from './axios'

export const getSapipinImages = () => {
    const url = '/images/sapipin'
    return axios.get(url)
}