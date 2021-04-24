const bubbleSort = (arr) => {
    let swap;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([6,8,3,2,1,8]));