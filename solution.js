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
