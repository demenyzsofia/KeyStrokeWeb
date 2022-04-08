import axios from './axios'


export const getImages = (dataset) => {
    const url = `/images/${dataset}`
    return axios.get(url)
}

// export const getSapipinImages = () => {
//     const url = '/images/sapipin'
//     return axios.get(url)
// }

// export const getEasyImages = () => {
//     const url = '/images/easy'
//     return axios.get(url)
// }

// export const getKeystroke2014Images = () => {
//     const url = '/images/keystroke2014'
//     return axios.get(url)
// }

// export const getLogicalstrongImages = () => {
//     const url = '/images/logicalstrong'
//     return axios.get(url)
// }

// export const getStrongImages = () => {
//     const url = '/images/strong'
//     return axios.get(url)
// }