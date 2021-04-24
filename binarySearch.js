const binarySearch = (arr, data) => {
    let left = 0;
    let right = arr.length;
    let index;

    while(1) {
        index = Math.floor((right+left)/2);

        if (arr[index] === data)
            return index;
        else if (right === left)
            return -1;
        else if (data < arr[index])
            right = index-1;
        else if (data > arr[index])
            left = index+1;
    }
}

console.log(binarySearch([0,2,4,6], 6));