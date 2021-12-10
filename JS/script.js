//Declaration Const

const output1Html = document.querySelector(".container-js");

// For Loop

for (let i = 1; i < 101; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    output1Html.innerHTML += `<div class="box box-red"><div>FizzBuzz</div></div>`;
  } else if (i % 5 === 0) {
    output1Html.innerHTML += `<div class="box box-yellow"><div>Buzz</div></div>`;
  } else if (i % 3 === 0) {
    output1Html.innerHTML += `<div class="box box-green"><div>Fizz</div></div>`;
  } else {
    output1Html.innerHTML += `<div class="box box-blue"><div>${i}</div></div>`;
  }
}
