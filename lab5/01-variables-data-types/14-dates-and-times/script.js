let d;

// Get today's date and time
d = new Date();
console.log("1️⃣ Current Date & Time:", d);
console.log("2️⃣ Date as a String:", d.toString());

// Get a specific date
console.log("3️⃣ Specific Date (2023-03-15 14:45:00):", new Date(2023, 2, 15, 14, 45, 0));

// Pass different date string formats
console.log("4️⃣ Date from ISO String:", new Date('2024-05-20T08:15:30'));
console.log("5️⃣ Date from MM/DD/YYYY String:", new Date('12/25/2023 18:00:00'));
console.log("6️⃣ Date from YYYY-MM-DD String:", new Date('2025-10-05'));
console.log("7️⃣ Date from MM-DD-YYYY String:", new Date('11-11-2026'));

// Get current timestamp
console.log("8️⃣ Current Timestamp (ms):", Date.now());

// Get the timestamp of a specific date
d = new Date();
console.log("9️⃣ Timestamp using getTime():", d.getTime());
console.log("🔟 Timestamp using valueOf():", d.valueOf());

// Create a date from a timestamp
const timestamp = 1700000000000;
console.log("1️⃣1️⃣ Date from Timestamp:", new Date(timestamp));

// Convert from milliseconds to seconds
console.log("1️⃣2️⃣ Current Time in Seconds:", Math.floor(Date.now() / 1000));
