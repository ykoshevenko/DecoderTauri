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
        const massive2 = {}
        let smallArr = {}
        let bigArr = {}

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
    }
}