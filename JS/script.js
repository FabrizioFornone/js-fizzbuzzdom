//Declaration Const

const output1Html = document.querySelector(".container-js");

// For Loop

for (let i = 1; i < 101; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    output1Html.innerHTML += `<div class="box box-red">FizzBuzz</div>`;
  } else if (i % 5 === 0) {
    output1Html.innerHTML += `<div class="box box-yellow">Buzz</div>`;
  } else if (i % 3 === 0) {
    output1Html.innerHTML += `<div class="box box-green">Fizz</div>`;
  } else {
    output1Html.innerHTML += `<div class="box box-blue">${i}</div>`;
  }
}
