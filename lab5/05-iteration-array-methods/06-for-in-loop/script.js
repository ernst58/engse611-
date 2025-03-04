// Loop through objects
const colorObj = {
    shade1: 'purple', // Changed keys and values
    shade2: 'pink',
    shade3: 'yellow',
    shade4: 'black',
  };
  
  for (const key in colorObj) {
    console.log(key, colorObj[key]);
  }
  
  // Loop through arrays
  const colorArr = ['cyan', 'magenta', 'yellow', 'black']; // Changed array values
  
  for (const key in colorArr) {
    console.log(colorArr[key]);
  }
  