import fs from 'fs/promises'
import path from 'path'

export default class WorrToString {
    async postStr(str) { // получение строки с клиента
        let string = str
        return string
    }

    async recodding(str) { // Индексация каждого числа
        const charCount = {}
        
        for(let char in str) {
            charCount[char] = (charCount[char] || 0)+1
        }

        return charCount
    }

    async QuickSort(obj) { // сортировка объекта
        // const massive2 = {}
        let smallArr = {}
        let bigArr = {}
        let newSmallArr1 = {}
        let newSmallArr2 = {}
        let newBigArr1={}
        let newBigArr2={}

        let sKeys = Object.keys(smallArr)
        let sCenter = smallArr[sKeys[0]]
        let sCenterKey = sKeys[0]

        let bKeys = Object.keys(bigArr)
        let bCenter = bigArr[bKeys[0]]
        let bCenterKey = bKeys[0]

        let keys = Object.keys(obj)
        let center = obj[keys[0]]
        let centerKey = keys[0]

        delete obj[keys[0]]        
        
        while (obj.length != 0) {
            let marker = 0
            let smallIndex = 0
            let bigIndex = 0

            for(let i of obj) {
               if(obj[i]<=center && marker === 0) {
                    smallArr[smallIndex++] = obj[i]
                    delete obj[i]
                    marker++
               } else if(obj[i]<=center && marker === 1) {
                    bigArr[bigIndex++] = obj[i]
                    delete obj[i]
                    marker--
               } else if(obj[i]>center && marker === 0) {
                    smallArr[smallIndex++] = center
                    center = obj[i]
                    centerKey = i
                    delete obj[i]
                    marker++
               } else if(obj[i]>center && marker === 1) {
                    bigArr[bigIndex++] = center
                    center = obj[i]
                    centerKey = i
                    delete obj[key]
                    marker--
               }
            }
        }

        delete smallArr[keys[0]]

        while(smallArr.length != 0) {
            let smallIndex = 0
            let bigIndex = 0

            for(let i of smallArr) {
                if(smallArr[i] > sCenter) {
                    newSmallArr2[bigIndex++] = smallArr[i]
                    delete smallArr[i]
                } else if(smallArr[i] <= sCenter) {
                    newSmallArr1[smallIndex++] = smallArr[i]
                    delete smallArr[i]
                }
            }
        }

        let resultSmall = {...newSmallArr1, ...sCenter, ...newSmallArr2}

        delete bigArr[keys[0]]

        while(bigArr.length != 0) {
            let smallIndex = 0
            let bigIndex = 0

            for(let i of bigArr) {
                if(bigArr[i] > bCenter) {
                    newBigArr1[bigIndex++] = bigArr[i]
                    delete bigArr[i]
                } else if(bigArr[i] <= bCenter) {
                    newBigArr2[smallIndex++] = bigArr[i]
                    delete bigArr[i]
                }
            }
        }

        let resultBig = {...newBigArr1, ...bCenter, ...newBigArr2}
        let RESULT = {...resultSmall, ...center, ...resultBig}

        return RESULT
    }
}