function mergeSort (array) {
    
    let left = []
    let right = []
    let newArr = []

    if (array.length === 1){
        return array
    }

    let n = Math.round(array.length / 2)
    left = array.slice(0, n)
    right = array.slice(n, array.length)

    left = mergeSort(left);
    right = mergeSort(right);

    return newArr.concat(left,right); 
}

console.log(mergeSort([22, 5, 2, 13, 19]))



