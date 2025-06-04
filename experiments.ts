// const number = 54

// const numStr1 = String(number)
// const numStr2 = number.toString()
// const numStr3 = '' + number
// const numStr4 = number.toFixed(0)
// const numStr5 = `${number}`

// console.log(number, typeof number)
// console.log(numStr1, typeof numStr1)
// console.log(numStr2, typeof numStr2)
// console.log(numStr3, typeof numStr3)
// console.log(numStr4, typeof numStr4)
// console.log(numStr5, typeof numStr5)


let str = "Item 123"
let num = str.match(/\d+/)
let result = num?.[0] ? parseInt(num[0]) : null

console.log(typeof num?.[0])
console.log(result, typeof result)
