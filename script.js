// connects the button to the check function
document.getElementById('button').addEventListener('click', check)

// set everything to 0
let age = 0
let weekday = 0

function check () {
  age = document.getElementById('age').value
  weekday = document.getElementById('weekday').value
  if ((age <= 18 && weekday !== 'saturday') || (age <= 18 && weekday !== 'sunday')) {
    document.getElementById('answer').innerHTML = 'time to go to school'
  } else if ((age > 18 && weekday !== 'saturday') || (age > 18 && weekday !== 'sunday')) {
    document.getElementById('answer').innerHTML = 'time to go to work'
  } else if ((weekday === 'saturday') || (weekday === 'sunday')) {
    document.getElementById('answer').innerHTML = 'time to relax for the weekend'
  }
}
