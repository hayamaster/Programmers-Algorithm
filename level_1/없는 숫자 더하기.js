function solution(numbers) {
    let arr = [1,2,3,4,5,6,7,8,9,];
    for(let i=0; i<numbers.length; i++){
        arr = arr.filter(x => {
            return numbers[i] != x
        })
    }
    return arr.reduce((acc, cur) => {return acc += cur}, 0)
}