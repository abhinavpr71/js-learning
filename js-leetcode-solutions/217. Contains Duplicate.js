let nums = [1,2,3,1]

function containsDuplicate(nums){
   let uniqueValues = new Set(nums)
   if(uniqueValues.size == nums.length){
    return false
   }else{
    return true
   }
 
}

console.log((containsDuplicate(nums)))