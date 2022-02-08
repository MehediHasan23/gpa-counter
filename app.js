/* selected all element */

let inputs = document.querySelectorAll(".inputs");

let bangla = document.getElementById("bangla");

let english = document.getElementById("english");

let physics = document.getElementById("physics");

let math = document.getElementById("math");

let totalMark = document.getElementById("total_mark");

let avgMark = document.getElementById("avg_mark");

let gdPoint = document.getElementById("grade_point");

let pass_mark = document.getElementById("pass_mark");

/*  selected input field */

for (let input of inputs) {
  input.addEventListener("input", function (e) {
    if (input.value > 100 || input.value < 0) {
      alert("pls give a correct number");
      input.value = "";
    }
  });
}

/* added click event */

document.getElementById("add_mark").addEventListener("click", function (e) {
  /* sub total mark */

  for (let input of inputs) {
    if (input.value === '') {
      alert('pls give a valid num')
      return
    }
  }

  totalMark.innerHTML =
    parseInt(bangla.value) +
    parseInt(english.value) +
    parseInt(physics.value) +
    parseInt(math.value);

  /* average mark */

  avgMark.innerHTML = (totalMark.innerHTML / 4).toFixed(2);

  /* select all input field */

  for (let input of inputs) {
    if (input.value < 33) {
      gdPoint.innerHTML = "F";
      pass_mark.innerHTML = "failed";
      return;
    } else {
      gdPoint.innerHTML = "";
      pass_mark.innerHTML = "passed";
    }
  }

  /* added grade point */

  if (avgMark.innerHTML >= 33 && avgMark.innerHTML <= 39) {
    gdPoint.innerHTML = "D";
  } else if (avgMark.innerHTML >= 40 && avgMark.innerHTML <= 49) {
    gdPoint.innerHTML = "C";
  } else if (avgMark.innerHTML >= 50 && avgMark.innerHTML <= 59) {
    gdPoint.innerHTML = "B";
  } else if (avgMark.innerHTML >= 60 && avgMark.innerHTML <= 69) {
    gdPoint.innerHTML = "A-";
  } else if (avgMark.innerHTML >= 70 && avgMark.innerHTML <= 79) {
    gdPoint.innerHTML = "A";
  } else if (avgMark.innerHTML >= 80 && avgMark.innerHTML <= 100) {
    gdPoint.innerHTML = "A+";
  } else {
    gdPoint.innerHTML = "F";
  }
});

/* thats all */
