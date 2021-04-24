function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    
    let left=[], right=[], pivot=arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot)
            left.push(arr[i]);
        else 
            right.push(arr[i]);
    }

    left = quickSort(left);
    right = quickSort(right);

    return left.concat(pivot, right);
}

console.log(quickSort([6,4,3,1,2,4,8,0,8,6,5,4,3,4,6,66,7,8,0]));