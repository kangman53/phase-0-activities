// function fpb(angka1, angka2) {
//   // you can only write your code here!
//   // var result = 0;
//   // while(angka2 != 0){
//   //   result = angka1%angka2;
//   //   angka1 = angka2;
//   //   angka2 = result;
//   // }
//   // return angka1;
// }

function fpb(angka1, angka2) {
  if(angka1 > angka2){
    var min = angka2;
  } else {
    var min = angka1;
  }

  for(var i = min; i>=1; i--){
    if(angka1 % i === 0 && angka2 % i === 0){
      return i;
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
