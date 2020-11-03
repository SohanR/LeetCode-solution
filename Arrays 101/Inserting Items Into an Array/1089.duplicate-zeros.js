/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    


    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            arr.splice(i+1,0,0);
            
            arr.pop();
            i++
        }
    }
   

};
// @lc code=end

