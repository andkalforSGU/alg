const lineSearch = (arr, data) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data)
            return i;
    }

    return -1;
}

console.log(lineSearch([0,1,2,3,4,5,6], 7));