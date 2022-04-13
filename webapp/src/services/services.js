import axios from './axios'


export const getImages = (dataset) => {
    const url = `/images/${dataset}`
    return axios.get(url)
}

export const getDetectorsBoxImages = () => {
    const url = '/images/detectors'
    return axios.get(url)
}