// function prefill(n, v) {
//     //1 define n and v empty arr. n must be a positive number, else return n is invalid, n=0 returns empty array , v omitted returns undefined
//     var arr = []

//     if (isNaN(n)) {
//         throw new TypeError(`${n} is invalid`)
//     }
//     if (isNaN(v) === false) {
//         const nV = Number(v)


//     }


//     if (n === 0 || v === []) {
//         return arr
//     }
//     if (Array.isArray(v)) {
//         return [v, v, v]
//     }
//     //2 seperate v by commas
//     var sep = v + ','

//     //3 send to array and return array
//     var newArr = sep.toString().repeat(Number(n)).split(",")
//     newArr.pop()
//     if (newArr[0] == !NaN) {
//         return newArr.map(i => Number(i))
//     } else return newArr


// }
// console.log(prefill(24, '23'))
// console.log(prefill('3', 1))
// console.log(prefill('adsf', "abc"))
// console.log(prefill(2, "abc"))



// console.log(prefill(2, prefill(2, '2d')))
function prefill(n, v) {
    //1 define n and v empty arr. n must be a positive number, else return n is invalid, n=0 returns empty array , v omitted returns undefined
    var arr = []

    if (isNaN(n)) {
        throw new TypeError(`${n} is invalid`)
    }
    if (n === 0 || v === []) {
        return arr
    }
    if (Array.isArray(v)) {
        return [v, v, v]
    }
    //2 seperate v by commas
    var sep = v + ','

    //3 send to array and return array
    var newArr = sep.toString().repeat(Number(n)).split(",")
    newArr.pop()
    if (isNaN(newArr[0]) === false) {
        return newArr.map(i => Number(i))
    } else return newArr


}
console.log(prefill(24, '23'))
console.log(prefill('3', 1))
console.log(prefill(2, "abc"))
console.log(prefill(2, prefill(2, '2d')))