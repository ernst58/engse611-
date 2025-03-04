const d = new Date(2022, 9, 30, 8, 0, 0); // Corrected Date (October 30, 2022, 08:00 AM)
const hour = d.getHours();

if (hour < 12) {
  console.log('Rise and shine!');
} else if (hour < 18) {
  console.log('Good Afternoon, keep going!');
} else {
  console.log('Good Night, time to relax.');
}

// Nested If
if (hour < 12) {
  console.log('Rise and shine!');

  if (hour === 8) {
    console.log('Time for coffee!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon, keep going!');
} else {
  console.log('Good Night, time to relax.');

  if (hour >= 21) {
    console.log('Bedtime soon...');
  }
}

if (hour >= 9 && hour < 17) {
  console.log('Work hours in progress...');
}

if (hour === 8 || hour === 21) {
  console.log('Don’t forget to brush your teeth!');
}
