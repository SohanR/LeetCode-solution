/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i=0; i < arr.length; i++){
        for (let j =0; j < arr.length; j++){
            if( i !== j && arr[i] === 2* arr[j]){
                return true;
            }
        }
    }
    
    return false;
};
// @lc code=end

