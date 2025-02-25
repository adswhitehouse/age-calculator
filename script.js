// Variables
let input = document.querySelector(".jsInput");
let calculate = document.querySelector(".jsCalculate");
let ageOutput = document.querySelector(".jsAgeOutput");
let yearsSpan = document.querySelector(".jsAgeYears");
let monthsSpan = document.querySelector(".jsAgeMonths");
let daysSpan = document.querySelector(".jsAgeDays");

// Cant select future date
input.max = new Date().toISOString().split("T")[0];

// Calculates age
function calculateAge() {
  let currentDate = new Date();
  let inputDate = new Date(input.value);

  let InputDay = inputDate.getDate();
  let inputMonth = inputDate.getMonth() + 1;
  let inputYear = inputDate.getFullYear();

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let dayDifference, monthDifference, yearDifference;
  yearDifference = currentYear - inputYear;

  if (currentMonth >= inputMonth) {
    monthDifference = currentMonth - inputMonth;
  } else {
    yearDifference--;
    monthDifference = 12 + currentMonth - inputMonth;
  }

  if (currentDay >= InputDay) {
    dayDifference = currentDay - InputDay;
  } else {
    monthDifference--;
    dayDifference = daysInMonth(inputYear, inputMonth) + currentDay - InputDay;
  }

  if (monthDifference < 0) {
    monthDifference = 11;
    yearDifference--;
  }

  ageOutput.style.visibility = "visible";
  yearsSpan.textContent = `${yearDifference}`;
  monthsSpan.textContent = `${monthDifference}`;
  daysSpan.textContent = `${dayDifference}`;
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// Runs calculate age on calculate button click
calculate.addEventListener("click", () => {
  calculateAge();
});
