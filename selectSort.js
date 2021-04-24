const selectSort = (arr) => {
    let swap;

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap = arr[j];
                arr[j] = arr[i];
                arr[i] = swap;
            }
        }
    }

    return arr;
}

console.log(selectSort([5,8,3,6,9,2]));