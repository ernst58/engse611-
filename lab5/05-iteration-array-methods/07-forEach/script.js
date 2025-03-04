const socials = ['Snapchat', 'TikTok', 'Reddit', 'YouTube']; // Changed social platforms

// View prototype chain
console.log(socials.__proto__);

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Snapchat', url: 'https://snapchat.com' }, // Changed platform names and URLs
  { name: 'Reddit', url: 'https://reddit.com' },
  { name: 'TikTok', url: 'https://tiktok.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
];

socialObjs.forEach((item) => console.log(item.url));
