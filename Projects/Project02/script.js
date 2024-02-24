const form = document.querySelector("form");

// event k upper ye value nhi lengye kyuki jb page load hoga toh empty value store hogi .
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

// server me jane se rookna hoga.. toh event ke upper method hota h
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // hamne parseInt isliye kiya kyuki ye value string me mil rhe the toh usko int me milegi
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const guide = document.querySelector("#weight-guide");

  // checks
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please gives a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please gives a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result me show krnvana hai.
    results.innerHTML = `<span>${bmi}</span>`;

    //   check person is underweight , normalRange, overweight
    if (bmi < 18.6) {
      guide.innerHTML = `Person is Underweight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      guide.innerHTML = `Person is in Normal Range`;
    } else {
      guide.innerHTML = `Person is Overweight`;
    }
  }
});
