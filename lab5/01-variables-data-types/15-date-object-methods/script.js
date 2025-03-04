let d = new Date(2025, 3, 22, 15, 45, 30, 123); // Set a different starting date

// Date methods
console.log("1️⃣ Full Date String:", d.toString());

console.log("2️⃣ Timestamp (ms since 1970):", d.getTime());
console.log("3️⃣ Timestamp using valueOf():", d.valueOf());

console.log("4️⃣ Year:", d.getFullYear());

console.log("5️⃣ Month (0-based):", d.getMonth());
console.log("6️⃣ Month (1-based):", d.getMonth() + 1);

console.log("7️⃣ Day of the Month:", d.getDate());

console.log("8️⃣ Day of the Week (0=Sunday):", d.getDay());

console.log("9️⃣ Hours:", d.getHours());
console.log("🔟 Minutes:", d.getMinutes());
console.log("1️⃣1️⃣ Seconds:", d.getSeconds());
console.log("1️⃣2️⃣ Milliseconds:", d.getMilliseconds());

console.log("1️⃣3️⃣ Formatted Date (YYYY-MM-DD):", `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);

// Intl.DateTimeFormat API (locale specific)
console.log("1️⃣4️⃣ US Format:", Intl.DateTimeFormat('en-US').format(d));
console.log("1️⃣5️⃣ UK Format:", Intl.DateTimeFormat('en-GB').format(d));
console.log("1️⃣6️⃣ Default Locale Format:", Intl.DateTimeFormat('default').format(d));

console.log("1️⃣7️⃣ Full Month Name:", Intl.DateTimeFormat('default', { month: 'long' }).format(d));
console.log("1️⃣8️⃣ Short Month Name:", d.toLocaleString('default', { month: 'short' }));

console.log("1️⃣9️⃣ Full Date & Time (Tokyo Time):", d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Tokyo',
}));
