import { cryptoAssets, cryptoData } from '../data';


export function getFetchCrypto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 1)
    })
}

export function getFetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 1)
    })
}