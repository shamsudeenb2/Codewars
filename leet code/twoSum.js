// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function (nums, target) {
    let nu
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            nu = nums[i] + nums[j]
            if (nu === target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 18))