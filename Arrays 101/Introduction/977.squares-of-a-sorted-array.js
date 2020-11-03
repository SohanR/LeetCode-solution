/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

    let newArray = [];

    newArray = A.map( x => {
        return Math.pow(x,2)
    })

    return newArray.sort( (a,b) => a -b);
};
// @lc code=end

