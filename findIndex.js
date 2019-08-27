//Create a function that finds the index of a given item

function search(arr, item) {
    if (arr.includes(item)) {
        return arr.indexOf(item)
    } else {
        return -1
    }
}

//Create a function that finds the index of a given item if the array is sorted

function search(arr, item) {
    var sortedArr = arr.sort(function(a, b){return a-b});
    if (sortedArr.includes(item)) {
        return arr.indexOf(item)
    } else {
        return -1
    }
}