// temos, por omissão, acesso ao objecto Luxon, que é importado via CDN ou ficheiro local (luxon.min.js)
console.log(luxon);
// retorna um object com:
// DateTime
// Duration
// FixedOffsetZone
// IANAZone
// Info
// Interval
// InvalidZone
// Settings
// SystemZone
// VERSION
// Zone
console.log(luxon.DateTime);

// utilizar um alias
let DateTime = luxon.DateTime;
// utilizando destructuring
// const { DateTime } = luxon;
const Duration = luxon.Duration;
// const { DateTime, Duration } = luxon;

// criar uma data
const now = DateTime.now();
console.log(now.c); // {year: 2025, month: 9, day: 15, hour: 19, minute: 54, …}

// criar uma data específica
const data1 = DateTime.local(2025, 9, 15, 19, 54, 23);
console.log(data1.c); // {year: 2025, month: 9, day: 15, hour: 19, minute: 54, …}

const data2 = DateTime.fromObject({
  year: 2025,
  month: 9,
  day: 15,
  hour: 19,
  minute: 54,
  seconds: 23,
});
console.log(data2.c); // {year: 2025, month: 9, day: 15, hour: 19, minute: 54, …}

// const data3 = DateTime.fromISO("2025-09-15");
const data3 = DateTime.fromISO("2025-09-15T19:54:23");
console.log(data3.c); // {year: 2025, month: 9, day: 15, hour: 19, minute: 54, …}

// mostrar uma data
console.log(data3.toString()); // 2025-09-15T19:54:23.000+01:00
console.log(data3.toFormat("d MMMM yyyy")); // 15 September 2025
console.log(data3.setLocale("pt").toLocaleString()); // 15/09/2025

// obter os componentes da data
console.log(data3.year); // 2025
console.log(data3.day); // 15
console.log(data3.zoneName); // Europe/Lisbon

// transformar datas
console.log(data3.plus({ days: 3 }).toString()); // 2025-09-18T19:54:23.000+01:00
console.log(data3.plus({ months: 1, hours: 2, seconds: 20 }).toString()); // 2025-10-15T21:54:43.000+01:00

// duration
const duration1 = Duration.fromObject({ days: 2, hours: 3 });
console.log(duration1.toISO()); // P2DT3H
const finalDuration = duration1.plus({ hours: 4 });
console.log(finalDuration.toISO()); // P2DT7H
console.log(finalDuration.toHuman()); // 2 days, 7 hours
console.log(finalDuration.toHuman()); // 2 days, 7 hours
