/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p1 = 0;    

   for(let p2 = 0; p2 < nums.length; p2++){
       if(nums[p2] !== val){
           nums[p1] = nums[p2];
           p1++;
       }
   }
return p1;

};
// @lc code=end

