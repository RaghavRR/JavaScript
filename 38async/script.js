
// **************************setTimeout****************************
const sayRaghav = function () {
    console.log("Raghav");
  };
  // hamne yha function k refernce diya h na ki function ko exceute krvaya h..
  // toh hame function k refernce dena h na ki exceute krvana h.
  // setTimeout(sayRaghav, 2000);
  
  const changeText = function () {
    document.querySelector("h1").innerHTML = "Best Js Series";
  };
  // const changeMe = setTimeout(changeText, 2000);
  
  document.querySelector("#stop").addEventListener("click", function () {
    // aagr setTimeOut ko rookna h toh clearTimeout se rook skte h.
    // clearTimeout(changeMe);
    // console.log("STOOPED");
  });
  
  
  
  // **************setInterval*************************8
  const sayDate = function (str) {
    console.log(str, Date.now());
  };
  const invertalId = setInterval(sayDate, 1000, "Hello");
  
  clearInterval(invertalId);
  