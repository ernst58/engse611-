const d = new Date(2023, 5, 15, 21, 0, 0); // June 15, 2023, at 9:00 PM
const month = d.getMonth();
const hour = d.getHours();

// Immediate value evaluation
switch (month) {
  case 0:
    console.log('It is January');
    break;
  case 1:
    console.log('It is February');
    break;
  case 5:
    console.log('It is June');
    break;
  default:
    console.log('It is not Jan, Feb, or June');
}

// Range evaluation
switch (true) {
  case hour < 12:
    console.log('Good Morning!');
    break;
  case hour < 18:
    console.log('Good Afternoon!');
    break;
  default:
    console.log('Good Evening, time to unwind.');
}
