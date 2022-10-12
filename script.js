


//Question 1 ... Given two sets of elements, find the sum of all distinct elements from the set. 
//  To get the sum of the elements that appeared once across the sets 


function distinctSum(set1, set2) {
    var arr = set1.concat(set2);
    var count = {};
    var distinct = [];
    var sum = 0;
    arr.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });
    for (var key in count) {
      if (count[key] == 1) {
        sum += parseInt(key);
        distinct.push(key);
      }
    }
    return `${sum} (${distinct.toString()})`;
  } console.log(distinctSum([5, 3, 7, 9, 1], [4, 3, 9, 5, 1]));






// Question 2 ... Given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets.

let set1 = [5, 3, 7, 9, 1];
let set2 = [4, 3, 9, 5, 1] ;
let sum = 0; // sum of the elements that appeared more than once across the sets



for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
            sum += (set1[i] + set2[j])
        }
    }
}
console.log(sum)

//solution 2
function overlappingSum(set1, set2) {
    var sum = 0;
    var overlappingElements = [];
    for (var i = 0; i < set1.length; i++) {
      if (set2.includes(set1[i])) {
        sum += set1[i];
        overlappingElements.push(set1[i]);
      }
    }
    for (var i = 0; i < set2.length; i++) {
      if (set1.includes(set2[i])) {
        sum += set2[i];
        overlappingElements.push(set2[i]);
      }
    }
    return ` ${sum} (${overlappingElements.toString()})`;
  }

  console.log(overlappingSum ([5, 3, 7, 9, 1],[4, 3, 9, 5, 1]  ))
  