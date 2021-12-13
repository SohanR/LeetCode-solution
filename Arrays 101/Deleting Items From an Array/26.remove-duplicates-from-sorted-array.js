/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let pointer1 = 0;

    for(let pointer2 = 1; pointer2 < nums.length; pointer2++){

        if( nums[pointer1] !== nums[pointer2] ){
            pointer1++;

            nums[pointer1] = nums[pointer2];
        }
    }

    return pointer1 + 1;

};
// @lc code=end

