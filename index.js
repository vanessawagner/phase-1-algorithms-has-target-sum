function hasTargetSum(array, target) {
  // Write your algorithm here

  var twoSum = function(nums, target) {
    let arry = []
    for (i in nums) {
        for (j in nums) {
            if ((nums[j] + nums[i]) === target) {
                arry[0] = i
                arry[1] = j
            }
        }
    }
    for(m in nums){
        if (i === nums[m]){
            arry[0] = m
        }
        if (j === nums[m]){
            arry[1] = m
        }
    }
    return arry
};
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
