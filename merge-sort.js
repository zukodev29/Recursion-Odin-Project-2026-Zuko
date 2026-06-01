const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const middle =  Math.ceil(array.length / 2);

    const leftSorted = mergeSort(array.slice(0, middle));
    const rightSorted = mergeSort(array.slice(middle, array.length));

    return merge(leftSorted, rightSorted);
};

/*This JavaScript code is an implementation of the Merge Sort algorithm, but it contains a critical bug in how it splits the array, 
which will cause an infinite loop (Stack Overflow) for certain array sizes */

const merge = (array1, array2) => {

    const mergedArray = [];
    let pointer1 = 0;
    pointer2 = 0;

    while (array1.length > pointer1 && array2.length > pointer2) {
        if (array1[pointer1] < array2[pointer2]) {
            mergedArray.push(array1[pointer1++]);
       } else {
        mergedArray.push(array2[pointer2++]);
       }
    }

    mergedArray.push(...array1.slice(pointer1));
    mergedArray.push(...array2.slice(pointer2));

    return mergedArray;
};

/**This is a classic JavaScript implementation of the Merge Two Sorted Arrays algorithm, which is the foundational step in Merge Sort */

export {merge, mergeSort};

//We are exporting this two consts

