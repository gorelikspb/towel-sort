
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix == 'undefined') {
    return [];
  }
  let forward = true
  let towel = []
  for (let row of matrix){
      if (!forward){
          row = row.reverse()
      }
      for (el of row){
          towel.push(el)    
      }
      forward = !forward
      
      }
  
  return towel;
  
}
