// Params Returns E? Pseudo

// Kyu 6
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//It should remove all values from list a, which are present in list b keeping their order.

//Input: two arrays superSet,subSet of unspecified data types
//Output: the superSet array without elements present in subSet
function arrayDiff(superSet, subSet){

    // start with a filter function on the superSet
    return superSet.filter((ele) => {
        // indexOf returns -1 if the element is not present
        // use this as the filter criteria from the subset presence of the superset element
        return subSet.indexOf(ele) !== -1 ? false : true;
    })
}

arrayDiff([1,2],[1])
arrayDiff([1,2,2,2,3],[2])

//Solution 1: use the includes array method alternatively
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

//Solution 2: use Sets
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }