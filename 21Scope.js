// let var const
//(INTERVIEW Q) window k aander (Inspect) global scope aalg h aur node k aandr global scope aalg h.

// var globally and locally hota h vo function k brr ho ya andr koi frk nhi padega. SO AVOID var
let a = 200;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; 
  console.log("INNER: ", a);
}


console.log(a);
// console.log(b);
// console.log(c);
