/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maximum= 0;
    let numberOfOne = 0;
     
     for(let i = 0; i < nums.length; i++){
         if(nums[i] == 1){
             numberOfOne++
             maximum = Math.max(maximum , numberOfOne)
         }else{
             numberOfOne = 0;
         }
 }
     
     return maximum;
     
};
// @lc code=end

