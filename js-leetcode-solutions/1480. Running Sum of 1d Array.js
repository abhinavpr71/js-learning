let nums = [1,2,3,4]

function runningSum(nums){
    let newarray = []
    let runningTotal = 0
   for (let i = 0; i < nums.length; i++){
        runningTotal += nums[i]
        newarray.push(runningTotal)
   }

   return newarray
}

runningSum(nums)


